import { ak_wwise_core_object_create_Args, ak_wwise_core_object_get_Args, ak_wwise_core_soundbank_setInclusions_Args} from "Wwise/waapi_apis";
import { CallWaapiTask, CallWaapiTaskOutPut, DEFAULT_URL, Log, SimpleConnect, SimpleSubOptions, SimpleTask, TaskQueue } from "Wwise/Utils";
import { waapi_topics } from "Wwise/waapi_apis_topics";
import { WwiseTypes } from "Wwise/WwiseObjectsReference";
import { waapi_functions_names } from "Wwise/waapi_functions_names";

Log("Hello Waapi!!!!!")

SimpleConnect(DEFAULT_URL,(session, connection) => {
    Log("Connected")
    waapi_topics.ak.wwise.core.object.created(session, {}, (args) => {
        let obj = args.object
        if (obj) {
            if(obj.type == WwiseTypes.Event) {
                Log("Created Event", args)
                let id = obj.id

                let input = {
                    args:{
                        from: {
                            id: [id]
                        }
                    },
                    options:{
                        return: ['id', 'name']
                    }
                }
                
                let tasks = new TaskQueue()

                let step_1_get_event_name = new CallWaapiTask(session,waapi_functions_names.ak.wwise.core.object.get)

                let step_2_buil_create_soundbanks_args = new SimpleTask((input) => {
                    let res = (input as CallWaapiTaskOutPut).data

                    let event = (res as any).kwargs.return[0]
                    Log("Get Event message: ", event)

                    let name = event.name

                    let args: ak_wwise_core_object_create_Args = {
                        parent: "{39003BC1-0B4E-4863-A33B-7C29B1B62FFD}",
                        type: WwiseTypes.SoundBank,
                        name: name,
                    }

                    return {
                        args:args,
                        options:{}
                    }

                })

                let step_3_create_soundbanks = new CallWaapiTask(session,waapi_functions_names.ak.wwise.core.object.create)

                let step_4_build_set_inclusion_args = new SimpleTask((input)=>{
                    let res = (input as CallWaapiTaskOutPut).data
                    Log("Create SoundBank Success: ", res.kwargs)
                    let params = res.kwargs

                    let soundBankId = params.id

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
                    return {
                        args:inclusionArgs
                    }
                })

                let step_5_setsoundbanks_inclusions = new CallWaapiTask(session,waapi_functions_names.ak.wwise.core.soundbank.setInclusions)

                tasks.addTask(step_1_get_event_name)
                tasks.addTask(step_2_buil_create_soundbanks_args)
                tasks.addTask(step_3_create_soundbanks)
                tasks.addTask(step_4_build_set_inclusion_args)
                tasks.addTask(step_5_setsoundbanks_inclusions)

                tasks.regCompleteAction(()=>{
                    let result = tasks.getOutput()
                    if(result.type === "error"){
                        connection.close()
                    }
                })

                tasks.runTask(input)
            }
        }
    } , (error) => {
        console.log(error)
        connection.close()
    })
})
