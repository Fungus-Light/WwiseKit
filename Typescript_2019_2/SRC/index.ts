import { DEFAULT_URL, Log, SimpleConnect, } from "Wwise/Utils";
import { WwiseTypes } from "Wwise/WwiseObjectsReference";
import { Connection, Session } from "autobahn";
import { APIs_Async } from "./Wwise/waapi_apis_promise"
import { ak_wwise_core_object_create_Args, ak_wwise_core_soundbank_setInclusions_Args } from "Wwise/waapi_apis";

SimpleConnect(DEFAULT_URL, Main)

async function Main(session: Session, connection: Connection) {

    try {
        //获取选中的obj
        let selects = await APIs_Async.ak.wwise.ui.getSelectedObjects(session)
        let objects = (selects.kwargs.objects as Array<any>)

        //遍历每个obj
        for (let i = 0; i < objects.length; i++) {
            let obj = objects[i]
            let id = obj.id
            //检查obj是否为event
            let checkResult = await APIs_Async.ak.wwise.core.object.get(session, { from: { id: [id] } }, { return: ["id", "type"] })
            let type = checkResult.kwargs.return[0].type
            if (type == WwiseTypes.Event) {
                //如果是就创建bank
                let name = obj.name
                let args: ak_wwise_core_object_create_Args = {
                    parent: "{39003BC1-0B4E-4863-A33B-7C29B1B62FFD}",
                    type: WwiseTypes.SoundBank,
                    name: name
                }
                let createResult = await APIs_Async.ak.wwise.core.object.create(session, args)
                let soundBankId = createResult.kwargs.id

                //成功了就设置bank的inclusion
                let inclusionArgs: ak_wwise_core_soundbank_setInclusions_Args = {
                    soundbank: soundBankId,
                    operation: "add",
                    inclusions: [
                        {
                            object: id,
                            filter: ["events", "structures", "media"]
                        }
                    ]
                }

                await APIs_Async.ak.wwise.core.soundbank.setInclusions(session, inclusionArgs)
                Log("Set SoundBank Success : ", name)
            }
        }
        connection.close()
    } catch (err) {
        Log("Error: ", err)
        connection.close()
    }
}