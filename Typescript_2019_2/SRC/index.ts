console.log("Wwise Tools By Fungus Light!!!!!");

import { WwiseTypes } from "Wwise/WwiseObjectsReference";
import { ActorMixer } from "../@types/WwiseObjects/AllWwiseObject";
import { } from "Wwise/waapi_apis";
import { DEFAULT_URL, SimpleConnect } from "Wwise/Utils";
import { waapi_topics } from "Wwise/waapi_topics";
import { ISubscribeOptions } from "autobahn";
import { T_ak_wwise_core_object_nameChanged } from "Wwise/waapi_apis_subs";

SimpleConnect(DEFAULT_URL, (session, connection) => {

    T_ak_wwise_core_object_nameChanged(session, {
        return: ["id", "name", "path", "type" , "parent" , "workunit"]
    }, (kwargs) => {
        console.log("Name Changed: ", kwargs);
    }, (error) => {
        console.log("Error: ", error);
    })
    
})