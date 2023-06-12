import { DEFAULT_URL, Log, SimpleConnect } from "Wwise/Utils";
import { APIs_Async } from "Wwise/waapi_apis_promise";

SimpleConnect(DEFAULT_URL, async (session, connection) => {
    try{
        await APIs_Async.ak.wwise.core.switchContainer.addAssignment(session,{
            child: "{7A12D08F-B0D9-4403-9EFA-2E6338C197C1}",
            stateOrSwitch: "{7A12D08F-B0D9-4403-9EFA-2E6338C197C1}"
        })
        connection.close()
    }catch(e){
        Log(e)
        connection.close()
    }
})