console.log("Wwise Tools By Fungus Light!!!!!");

import { WwiseTypes } from "Wwise/WwiseObjectsReference";
import { ActorMixer } from "../@types/WwiseObjects/AllWwiseObject";
import { $ak_wwise_core_object_create } from "Wwise/waapi_apis";
import { DEFAULT_URL, SimpleAction } from "Wwise/Utils";

SimpleAction(DEFAULT_URL, (session,connection) => {
    let extraArgs: ActorMixer = {
        Color: 4,
        OverrideColor: true,
    }

    $ak_wwise_core_object_create(session, {
        parent: "{918A82F1-910D-4A73-952C-5A1FEC025428}",
        type: WwiseTypes.ActorMixer,
        name: "MyActorMixer20",
    }, extraArgs,null,null,()=>{
        connection.close()
    })
})