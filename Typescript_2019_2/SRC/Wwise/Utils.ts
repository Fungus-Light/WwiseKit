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

function CallWaapiPromise(session: Session, api: string, args: any, options: SimpleSubOptions, onComplete: () => void):Promise<Result> {
    return new Promise((resolve, reject) => {
        session.call(api, [], args, options as any).then(
            function (res: Result) {
                resolve(res)
            },
            function (error: Error) {
                reject(error)
            }
        ).then(
            function () {
                onComplete?.call(this)
            }
        );
    })
    
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
    getOutput: () => TaskTransData;
    regCompleteAction: (action: () => void) => void;
}

class TaskQueue implements ITask {
    protected tasks: ITask[] = [];
    protected output: TaskTransData = null;
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

    regCompleteAction(action: () => void) {
        this.onCompleted = action;
    }

    getOutput():TaskTransData {
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

    constructor(_tasks?:ITask[]){
        if(_tasks == undefined){
            this.tasks = []
        }else{
            this.tasks = _tasks
        }

    }

}

class TaskTransData {
    data: any;
    type:"success"|"error"|"init"
}

class CallWaapiTask implements ITask {
    private session: Session;
    private api: string;
    private args: any;
    private options: SimpleSubOptions;
    private output:TaskTransData
    public onCompleted: () => void;

    constructor(session: Session, api: string) {
        this.session = session;
        this.api = api;
    }

    getInput: () => any;
    
    public runTask(input: TaskTransData) {

        if(input.type == "error"){
            this.output = input
            this.onCompleted?.call(this);
            return
        }
        //Log("CallWaapiTask ",input)
        this.args = input.data.args;
        this.options = input.data.options;
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
    handler: (inputData: any) => any;
    constructor(handler: (inputData: any) => any) {
        this.handler = handler
    }
    public onCompleted: () => void;

    public runTask(input: TaskTransData) {
        if(input.type == "error"){
            this.output = input
        }else{
            this.output = this.handler(input.data);
        }
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
    CallWaapiPromise,
    JoinArgs,
    SimpleConnect,
    Sub,
    SimpleSubOptions,
    Log,

    TaskTransData,
    CallWaapiTask,
    SimpleTask,
    TaskQueue
}