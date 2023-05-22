import { Result, Error, Session, Connection } from "autobahn"

function CallWaapi(session: Session, api: string, args: any, options: SimpleSubOptions, onSuccess: (res: Result) => void, onError: (error: Error) => void, onComplete: () => void) {
    session.call(api, [], args, options as any).then(
        function (res: Result) {
            onSuccess?.call(this, res)
        },
        function (error: Error) {
            onError?.call(this, error)
        }
    ).then(
        function () {
            onComplete?.call(this)
        }
    );
}


function JoinArgs(args: any, exArgs: any) {
    for (const k in exArgs) {
        let v = exArgs[k]
        let newKey = k
        if (k.startsWith("_")) {
            newKey = "@" + k.substring(1);
        } else {
            newKey = "@" + k;
        }
        args[newKey] = v

    }
    return args
}

function SimpleConnect(url: string, action: (session: Session, connection: Connection) => void) {
    let connection = new Connection({
        url: url,
        realm: 'realm1',
        protocols: ['wamp.2.json']
    });
    connection.onopen = function (session) {
        action(session, connection)
    };

    connection.onclose = function (reason, details) {
        if (reason !== 'lost') {
            console.log("Connection closed. Reason: " + reason);
        }
        process.exit();
    };

    // Open the connection
    connection.open();
}

interface SimpleSubOptions {
    return?: string[]
}

function Sub(session: Session, topic: string, options: SimpleSubOptions, action: (kwargs: any) => void, onError: (error: Error) => void) {
    session.subscribe(topic, (args, _kwargs, details) => { action(_kwargs) }, options as any).catch((err) => {
        onError(err)
    });
}

const DEFAULT_URL = "ws://localhost:8080/waapi"

const Log = console.log

interface ITask {
    onCompleted: () => void;
    runTask: (input: any) => any;
    getOutput: () => any;
    regCompleteAction: (action: () => void) => void;
}

class TaskQueue implements ITask {
    protected tasks: ITask[] = [];
    protected output: any = null;
    public onCompleted: () => void;

    runTask(input: any) {

        if(input.type === "error"){
            this.ErrorEnd(input.data)
            return
        }

        const task = this.tasks.shift();
        if (!task) {
            this.onCompleted();
            return;
        }else{
            task.regCompleteAction(() => {
                this.output = task.getOutput();
                this.runTask(this.output);
            });
            task.runTask(input);
        }
    }

    addTask(task: ITask) {
        this.tasks.push(task);
    }

    removeTask(task: ITask) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    clear() {
        this.tasks = [];
    }

    regCompleteAction(action: () => void) {
        this.onCompleted = action;
    }

    getOutput() {
        return this.output;
    }

    ErrorEnd(err:any) {
        this.output = {
            type: "error",
            data: err
        };
        console.log("Task Queue Error End beacause ",this.output)
        this.onCompleted();
    }

    constructor() {
        this.onCompleted = () => { };
    }

}

class CallWaapiTaskOutPut {
    data: any;
    type:"success"|"error"
}

class CallWaapiTask implements ITask {
    private session: Session;
    private api: string;
    private args: any;
    private options: SimpleSubOptions;
    private output:CallWaapiTaskOutPut
    public onCompleted: () => void;

    constructor(session: Session, api: string) {
        this.session = session;
        this.api = api;
    }

    getInput: () => any;
    
    public runTask(input: {
        args: any,
        options: SimpleSubOptions
    }) {
        this.args = input.args;
        this.options = input.options;
        this.session.call(this.api, [], this.args, this.options as any).then(
            (res: Result) => {
                this.output = {
                    data:res,
                    type:"success"
                };
            },
            (error: Error) => {
                this.output = {
                    data:error,
                    type:"error"
                };
            }
        ).then(
            () => {
                this.onCompleted?.call(this);
            }
        );
    }

    public getOutput() {
        return this.output;
    }

    public regCompleteAction(action: () => void) {
        this.onCompleted = action;
    }
}

//SimpleTask Implement
class SimpleTask implements ITask {
    output:any
    handler: (input: any) => any;
    constructor(handler: (input: any) => any) {
        this.handler = handler
    }
    public onCompleted: () => void;

    public runTask(input: any) {
        this.output = this.handler(input);
        this.onCompleted();
    }

    public getOutput() {
        return this.output;
    }

    public regCompleteAction(action: () => void) {
        this.onCompleted = action;
    }

    public preSet(input: any) {
        this.output = input;
    }
}


export {
    DEFAULT_URL,

    CallWaapi,
    JoinArgs,
    SimpleConnect,
    Sub,
    SimpleSubOptions,
    Log,

    CallWaapiTaskOutPut,
    CallWaapiTask,
    SimpleTask,
    TaskQueue
}