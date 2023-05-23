import { DEFAULT_URL, Log, SimpleConnect, } from "Wwise/Utils";
import { WwiseTypes } from "Wwise/WwiseObjectsReference";
import { Connection, Session } from "autobahn";
import { APIs_Async } from "./Wwise/waapi_apis_promise"
import { ak_wwise_core_object_create_Args, ak_wwise_core_soundbank_setInclusions_Args } from "Wwise/waapi_apis";

SimpleConnect(DEFAULT_URL, HelloWwise)

async function HelloWwise(session: Session, connection: Connection) {
    let info = await APIs_Async.ak.wwise.core.getInfo(session)
    Log("Hello Wwise! Version: ", info.kwargs.version.displayName)
    connection.close()
}