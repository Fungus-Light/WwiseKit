import { DEFAULT_URL, Log, SimpleConnect, } from "Wwise/Utils";
import { Connection, Session } from "autobahn";
import { APIs_Async } from "./Wwise/waapi_apis_promise"

SimpleConnect(DEFAULT_URL, HelloWwise)

async function HelloWwise(session: Session, connection: Connection) {
    let info = await APIs_Async.ak.wwise.core.getInfo(session)
    Log("Hello Wwise! Version: ", info.kwargs.version.displayName)
    connection.close()
}