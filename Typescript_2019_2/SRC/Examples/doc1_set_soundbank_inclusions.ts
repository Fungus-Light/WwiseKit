import { DEFAULT_URL, Log, SimpleConnect } from "Wwise/Utils"
import { APIs_Async } from "Wwise/waapi_apis_promise"

SimpleConnect(DEFAULT_URL, async (session, connection) => {
    try {

        let result = await APIs_Async.ak.wwise.core.soundbank.setInclusions(session,{
            soundbank: "{AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE}",
            operation: "add",
            inclusions: [
                {
                object: "{FFFFFFFF-GGGG-HHHH-IIII-JJJJJJJJJJJJ}",
                filter: ["events","structures"]
                }
            ]
        })

        Log(result.kwargs)
        connection.close()
    } catch (e) {
        Log(e)
        connection.close()
    }

})