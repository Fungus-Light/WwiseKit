import { Result, Error, Session, Connection } from "autobahn"

function CallWaapi(session: Session, api: string, args: any, onSuccess: (res: Result) => void, onError: (error: Error) => void, onComplete: () => void) {
    session.call(api, [], args).then(
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
    session.subscribe(topic, (args, _kwargs, details)=>{action(_kwargs)}, options as any).catch((err)=>{
        onError(err)
    });
}

const DEFAULT_URL = "ws://localhost:8080/waapi"

const Log = console.log

export {
    DEFAULT_URL,

    CallWaapi,
    JoinArgs,
    SimpleConnect,
    Sub,
    SimpleSubOptions,
    Log
}