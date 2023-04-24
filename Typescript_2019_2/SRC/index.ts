import { } from "Wwise/waapi_apis";
import { DEFAULT_URL, Log, SimpleConnect } from "Wwise/Utils";
import { T_ak_wwise_core_object_nameChanged } from "Wwise/waapi_apis_subs";

Log("Hello Waapi!!!!!")

SimpleConnect(DEFAULT_URL, (session, connection) => {

    T_ak_wwise_core_object_nameChanged(session, {
        return: ["id", "name", "path", "type", "parent", "workunit"]
    }, (kwargs) => {
        console.log("Name Changed: ", kwargs);
    }, (error) => {
        console.log("Error: ", error);
    })

})