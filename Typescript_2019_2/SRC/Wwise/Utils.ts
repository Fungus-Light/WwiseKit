import {Result, Error,Session, Connection } from "autobahn"

function CallWaapi(session:Session,api:string, args:any,onSuccess:(res:Result)=>void,onError:(error:Error)=>void,onComplete:()=>void){
    session.call(api, [], args).then(
        function (res: Result) {
            onSuccess?.call(this,res)
        },
        function (error: Error) {
            onError?.call(this,error)
        }
    ).then(
        function () {
            onComplete?.call(this)
        }
    );
}

function JoinArgs(args:any,exArgs:any){
    for (const k in exArgs) {
        let v = exArgs[k]
        let newKey = k
        if(k.startsWith("_")){
            newKey = "@" + k.substring(1);
        }else{
            newKey = "@" + k;
        }
        args[newKey] = v

    }
    return args
}

function SimpleAction(url:string,action:(session:Session,connection:Connection)=>void){
    let connection = new Connection({
        url: url,
        realm: 'realm1',
        protocols: ['wamp.2.json']
    });
    connection.onopen = function (session) {
        action(session,connection)
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

const DEFAULT_URL = "ws://localhost:8080/waapi"

export{
    DEFAULT_URL,

    CallWaapi,
    JoinArgs,
    SimpleAction
}