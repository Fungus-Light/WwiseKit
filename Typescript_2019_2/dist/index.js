// SRC/Wwise/Utils.ts
var import_autobahn = require("autobahn");
function SimpleConnect(url, action) {
  let connection = new import_autobahn.Connection({
    url,
    realm: "realm1",
    protocols: ["wamp.2.json"]
  });
  connection.onopen = function(session) {
    action(session, connection);
  };
  connection.onclose = function(reason, details) {
    if (reason !== "lost") {
      console.log("Connection closed. Reason: " + reason);
    }
    process.exit();
  };
  connection.open();
}
function Sub(session, topic, options, action, onError) {
  session.subscribe(topic, (args, _kwargs, details) => {
    action(_kwargs);
  }, options).catch((err) => {
    onError(err);
  });
}
var DEFAULT_URL = "ws://localhost:8080/waapi";
var Log = console.log;
var TaskQueue = class {
  tasks = [];
  output = null;
  onCompleted;
  runTask(input) {
    if (input.type === "error") {
      this.ErrorEnd(input.data);
      return;
    }
    const task = this.tasks.shift();
    if (!task) {
      this.onCompleted();
      return;
    } else {
      task.regCompleteAction(() => {
        this.output = task.getOutput();
        this.runTask(this.output);
      });
      task.runTask(input);
    }
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  clear() {
    this.tasks = [];
  }
  regCompleteAction(action) {
    this.onCompleted = action;
  }
  getOutput() {
    return this.output;
  }
  ErrorEnd(err) {
    this.output = {
      type: "error",
      data: err
    };
    console.log("Task Queue Error End beacause ", this.output);
    this.onCompleted();
  }
  constructor() {
    this.onCompleted = () => {
    };
  }
};
var CallWaapiTask = class {
  session;
  api;
  args;
  options;
  output;
  onCompleted;
  constructor(session, api) {
    this.session = session;
    this.api = api;
  }
  getInput;
  runTask(input) {
    this.args = input.args;
    this.options = input.options;
    this.session.call(this.api, [], this.args, this.options).then(
      (res) => {
        this.output = {
          data: res,
          type: "success"
        };
      },
      (error) => {
        this.output = {
          data: error,
          type: "error"
        };
      }
    ).then(
      () => {
        this.onCompleted?.call(this);
      }
    );
  }
  getOutput() {
    return this.output;
  }
  regCompleteAction(action) {
    this.onCompleted = action;
  }
};
var SimpleTask = class {
  output;
  handler;
  constructor(handler) {
    this.handler = handler;
  }
  onCompleted;
  runTask(input) {
    this.output = this.handler(input);
    this.onCompleted();
  }
  getOutput() {
    return this.output;
  }
  regCompleteAction(action) {
    this.onCompleted = action;
  }
  preSet(input) {
    this.output = input;
  }
};

// SRC/Wwise/waapi_apis_topics.ts
function T_ak_wwise_core_audio_imported(session, options, action, onError) {
  Sub(session, "ak.wwise.core.audio.imported", options, action, onError);
}
function T_ak_wwise_core_log_itemAdded(session, options, action, onError) {
  Sub(session, "ak.wwise.core.log.itemAdded", options, action, onError);
}
function T_ak_wwise_core_object_attenuationCurveChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.attenuationCurveChanged", options, action, onError);
}
function T_ak_wwise_core_object_attenuationCurveLinkChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.attenuationCurveLinkChanged", options, action, onError);
}
function T_ak_wwise_core_object_childAdded(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.childAdded", options, action, onError);
}
function T_ak_wwise_core_object_childRemoved(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.childRemoved", options, action, onError);
}
function T_ak_wwise_core_object_created(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.created", options, action, onError);
}
function T_ak_wwise_core_object_curveChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.curveChanged", options, action, onError);
}
function T_ak_wwise_core_object_nameChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.nameChanged", options, action, onError);
}
function T_ak_wwise_core_object_notesChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.notesChanged", options, action, onError);
}
function T_ak_wwise_core_object_postDeleted(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.postDeleted", options, action, onError);
}
function T_ak_wwise_core_object_preDeleted(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.preDeleted", options, action, onError);
}
function T_ak_wwise_core_object_propertyChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.propertyChanged", options, action, onError);
}
function T_ak_wwise_core_object_referenceChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.referenceChanged", options, action, onError);
}
function T_ak_wwise_core_profiler_captureLog_itemAdded(session, options, action, onError) {
  Sub(session, "ak.wwise.core.profiler.captureLog.itemAdded", options, action, onError);
}
function T_ak_wwise_core_project_loaded(session, options, action, onError) {
  Sub(session, "ak.wwise.core.project.loaded", options, action, onError);
}
function T_ak_wwise_core_project_postClosed(session, options, action, onError) {
  Sub(session, "ak.wwise.core.project.postClosed", options, action, onError);
}
function T_ak_wwise_core_project_preClosed(session, options, action, onError) {
  Sub(session, "ak.wwise.core.project.preClosed", options, action, onError);
}
function T_ak_wwise_core_project_saved(session, options, action, onError) {
  Sub(session, "ak.wwise.core.project.saved", options, action, onError);
}
function T_ak_wwise_core_soundbank_generated(session, options, action, onError) {
  Sub(session, "ak.wwise.core.soundbank.generated", options, action, onError);
}
function T_ak_wwise_core_soundbank_generationDone(session, options, action, onError) {
  Sub(session, "ak.wwise.core.soundbank.generationDone", options, action, onError);
}
function T_ak_wwise_core_switchContainer_assignmentAdded(session, options, action, onError) {
  Sub(session, "ak.wwise.core.switchContainer.assignmentAdded", options, action, onError);
}
function T_ak_wwise_core_switchContainer_assignmentRemoved(session, options, action, onError) {
  Sub(session, "ak.wwise.core.switchContainer.assignmentRemoved", options, action, onError);
}
function T_ak_wwise_core_transport_stateChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.transport.stateChanged", options, action, onError);
}
function T_ak_wwise_debug_assertFailed(session, options, action, onError) {
  Sub(session, "ak.wwise.debug.assertFailed", options, action, onError);
}
function T_ak_wwise_ui_commands_executed(session, options, action, onError) {
  Sub(session, "ak.wwise.ui.commands.executed", options, action, onError);
}
function T_ak_wwise_ui_selectionChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.ui.selectionChanged", options, action, onError);
}
var waapi_topics = {
  ak: {
    wwise: {
      core: {
        audio: {
          imported: T_ak_wwise_core_audio_imported
        },
        log: {
          itemAdded: T_ak_wwise_core_log_itemAdded
        },
        object: {
          attenuationCurveChanged: T_ak_wwise_core_object_attenuationCurveChanged,
          attenuationCurveLinkChanged: T_ak_wwise_core_object_attenuationCurveLinkChanged,
          childAdded: T_ak_wwise_core_object_childAdded,
          childRemoved: T_ak_wwise_core_object_childRemoved,
          created: T_ak_wwise_core_object_created,
          curveChanged: T_ak_wwise_core_object_curveChanged,
          nameChanged: T_ak_wwise_core_object_nameChanged,
          notesChanged: T_ak_wwise_core_object_notesChanged,
          postDeleted: T_ak_wwise_core_object_postDeleted,
          preDeleted: T_ak_wwise_core_object_preDeleted,
          propertyChanged: T_ak_wwise_core_object_propertyChanged,
          referenceChanged: T_ak_wwise_core_object_referenceChanged
        },
        profiler: {
          captureLog: {
            itemAdded: T_ak_wwise_core_profiler_captureLog_itemAdded
          }
        },
        project: {
          loaded: T_ak_wwise_core_project_loaded,
          postClosed: T_ak_wwise_core_project_postClosed,
          preClosed: T_ak_wwise_core_project_preClosed,
          saved: T_ak_wwise_core_project_saved
        },
        soundbank: {
          generated: T_ak_wwise_core_soundbank_generated,
          generationDone: T_ak_wwise_core_soundbank_generationDone
        },
        switchContainer: {
          assignmentAdded: T_ak_wwise_core_switchContainer_assignmentAdded,
          assignmentRemoved: T_ak_wwise_core_switchContainer_assignmentRemoved
        },
        transport: {
          stateChanged: T_ak_wwise_core_transport_stateChanged
        }
      },
      debug: {
        assertFailed: T_ak_wwise_debug_assertFailed
      },
      ui: {
        commands: {
          executed: T_ak_wwise_ui_commands_executed
        },
        selectionChanged: T_ak_wwise_ui_selectionChanged
      }
    }
  }
};

// SRC/Wwise/WwiseObjectsReference.ts
var WwiseTypes = {
  AcousticTexture: "AcousticTexture",
  Action: "Action",
  ActionException: "ActionException",
  ActorMixer: "ActorMixer",
  Attenuation: "Attenuation",
  AudioDevice: "AudioDevice",
  AudioSource: "AudioSource",
  AuxBus: "AuxBus",
  BlendContainer: "BlendContainer",
  BlendTrack: "BlendTrack",
  Bus: "Bus",
  ControlSurfaceBinding: "ControlSurfaceBinding",
  ControlSurfaceBindingGroup: "ControlSurfaceBindingGroup",
  ControlSurfaceSession: "ControlSurfaceSession",
  Conversion: "Conversion",
  Curve: "Curve",
  CustomState: "CustomState",
  DialogueEvent: "DialogueEvent",
  Effect: "Effect",
  Event: "Event",
  ExternalSource: "ExternalSource",
  ExternalSourceFile: "ExternalSourceFile",
  Folder: "Folder",
  GameParameter: "GameParameter",
  Language: "Language",
  MidiParameter: "MidiParameter",
  MixingSession: "MixingSession",
  Modifier: "Modifier",
  ModulatorEnvelope: "ModulatorEnvelope",
  ModulatorLfo: "ModulatorLfo",
  ModulatorTime: "ModulatorTime",
  MultiSwitchEntry: "MultiSwitchEntry",
  MusicClip: "MusicClip",
  MusicClipMidi: "MusicClipMidi",
  MusicCue: "MusicCue",
  MusicEventCue: "MusicEventCue",
  MusicFade: "MusicFade",
  MusicPlaylistContainer: "MusicPlaylistContainer",
  MusicPlaylistItem: "MusicPlaylistItem",
  MusicSegment: "MusicSegment",
  MusicStinger: "MusicStinger",
  MusicSwitchContainer: "MusicSwitchContainer",
  MusicTrack: "MusicTrack",
  MusicTrackSequence: "MusicTrackSequence",
  MusicTransition: "MusicTransition",
  ObjectSettingAssoc: "ObjectSettingAssoc",
  Panner: "Panner",
  ParamControl: "ParamControl",
  Path: "Path",
  Platform: "Platform",
  PluginDataSource: "PluginDataSource",
  Position: "Position",
  Project: "Project",
  Query: "Query",
  RandomSequenceContainer: "RandomSequenceContainer",
  SearchCriteria: "SearchCriteria",
  Sound: "Sound",
  SoundBank: "SoundBank",
  SoundcasterSession: "SoundcasterSession",
  State: "State",
  StateGroup: "StateGroup",
  Switch: "Switch",
  SwitchContainer: "SwitchContainer",
  SwitchGroup: "SwitchGroup",
  Trigger: "Trigger",
  UserProjectSettings: "UserProjectSettings",
  WorkUnit: "WorkUnit"
};

// SRC/Wwise/waapi_functions_names.ts
var waapi_functions_names = {
  ak: {
    soundengine: {
      executeActionOnEvent: "ak.soundengine.executeActionOnEvent",
      postEvent: "ak.soundengine.postEvent",
      postMsgMonitor: "ak.soundengine.postMsgMonitor",
      postTrigger: "ak.soundengine.postTrigger",
      registerGameObj: "ak.soundengine.registerGameObj",
      resetRTPCValue: "ak.soundengine.resetRTPCValue",
      seekOnEvent: "ak.soundengine.seekOnEvent",
      setDefaultListeners: "ak.soundengine.setDefaultListeners",
      setGameObjectAuxSendValues: "ak.soundengine.setGameObjectAuxSendValues",
      setGameObjectOutputBusVolume: "ak.soundengine.setGameObjectOutputBusVolume",
      setListeners: "ak.soundengine.setListeners",
      setListenerSpatialization: "ak.soundengine.setListenerSpatialization",
      setMultiplePositions: "ak.soundengine.setMultiplePositions",
      setObjectObstructionAndOcclusion: "ak.soundengine.setObjectObstructionAndOcclusion",
      setPosition: "ak.soundengine.setPosition",
      setRTPCValue: "ak.soundengine.setRTPCValue",
      setScalingFactor: "ak.soundengine.setScalingFactor",
      setState: "ak.soundengine.setState",
      setSwitch: "ak.soundengine.setSwitch",
      stopAll: "ak.soundengine.stopAll",
      stopPlayingID: "ak.soundengine.stopPlayingID",
      unregisterGameObj: "ak.soundengine.unregisterGameObj"
    },
    wwise: {
      core: {
        audio: {
          import: "ak.wwise.core.audio.import",
          importTabDelimited: "ak.wwise.core.audio.importTabDelimited"
        },
        audioSourcePeaks: {
          getMinMaxPeaksInRegion: "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion",
          getMinMaxPeaksInTrimmedRegion: "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion"
        },
        getInfo: "ak.wwise.core.getInfo",
        log: {
          get: "ak.wwise.core.log.get"
        },
        object: {
          copy: "ak.wwise.core.object.copy",
          create: "ak.wwise.core.object.create",
          delete: "ak.wwise.core.object.delete",
          get: "ak.wwise.core.object.get",
          getAttenuationCurve: "ak.wwise.core.object.getAttenuationCurve",
          getPropertyAndReferenceNames: "ak.wwise.core.object.getPropertyAndReferenceNames",
          getPropertyInfo: "ak.wwise.core.object.getPropertyInfo",
          getPropertyNames: "This function is deprecated!!!  ak.wwise.core.object.getPropertyNames",
          isPropertyEnabled: "ak.wwise.core.object.isPropertyEnabled",
          move: "ak.wwise.core.object.move",
          setAttenuationCurve: "ak.wwise.core.object.setAttenuationCurve",
          setName: "ak.wwise.core.object.setName",
          setNotes: "ak.wwise.core.object.setNotes",
          setProperty: "ak.wwise.core.object.setProperty",
          setRandomizer: "ak.wwise.core.object.setRandomizer",
          setReference: "ak.wwise.core.object.setReference"
        },
        plugin: {
          getList: "This function is deprecated!!!  ak.wwise.core.plugin.getList"
        },
        profiler: {
          getCursorTime: "ak.wwise.core.profiler.getCursorTime",
          getRTPCs: "ak.wwise.core.profiler.getRTPCs",
          getVoiceContributions: "ak.wwise.core.profiler.getVoiceContributions",
          getVoices: "ak.wwise.core.profiler.getVoices",
          startCapture: "ak.wwise.core.profiler.startCapture",
          stopCapture: "ak.wwise.core.profiler.stopCapture"
        },
        project: {
          save: "ak.wwise.core.project.save"
        },
        remote: {
          connect: "ak.wwise.core.remote.connect",
          disconnect: "ak.wwise.core.remote.disconnect",
          getAvailableConsoles: "ak.wwise.core.remote.getAvailableConsoles",
          getConnectionStatus: "ak.wwise.core.remote.getConnectionStatus"
        },
        soundbank: {
          generate: "ak.wwise.core.soundbank.generate",
          getInclusions: "ak.wwise.core.soundbank.getInclusions",
          setInclusions: "ak.wwise.core.soundbank.setInclusions"
        },
        switchContainer: {
          addAssignment: "ak.wwise.core.switchContainer.addAssignment",
          getAssignments: "ak.wwise.core.switchContainer.getAssignments",
          removeAssignment: "ak.wwise.core.switchContainer.removeAssignment"
        },
        transport: {
          create: "ak.wwise.core.transport.create",
          destroy: "ak.wwise.core.transport.destroy",
          executeAction: "ak.wwise.core.transport.executeAction",
          getList: "ak.wwise.core.transport.getList",
          getState: "ak.wwise.core.transport.getState"
        },
        undo: {
          beginGroup: "ak.wwise.core.undo.beginGroup",
          cancelGroup: "ak.wwise.core.undo.cancelGroup",
          endGroup: "ak.wwise.core.undo.endGroup"
        }
      },
      debug: {
        enableAsserts: "ak.wwise.debug.enableAsserts",
        enableAutomationMode: "ak.wwise.debug.enableAutomationMode",
        testAssert: "ak.wwise.debug.testAssert",
        testCrash: "ak.wwise.debug.testCrash"
      },
      ui: {
        bringToForeground: "ak.wwise.ui.bringToForeground",
        captureScreen: "ak.wwise.ui.captureScreen",
        commands: {
          execute: "ak.wwise.ui.commands.execute",
          getCommands: "ak.wwise.ui.commands.getCommands",
          register: "ak.wwise.ui.commands.register",
          unregister: "ak.wwise.ui.commands.unregister"
        },
        getSelectedObjects: "ak.wwise.ui.getSelectedObjects",
        project: {
          close: "ak.wwise.ui.project.close",
          open: "ak.wwise.ui.project.open"
        }
      },
      waapi: {
        getFunctions: "ak.wwise.waapi.getFunctions",
        getSchema: "ak.wwise.waapi.getSchema",
        getTopics: "ak.wwise.waapi.getTopics"
      }
    }
  }
};

// SRC/index.ts
Log("Hello Waapi!!!!!");
SimpleConnect(DEFAULT_URL, async (session, connection) => {
  Log("Connected");
  waapi_topics.ak.wwise.core.object.created(session, {}, (args) => {
    let obj = args.object;
    if (obj) {
      if (obj.type == WwiseTypes.Event) {
        Log("Created Event", args);
        let id = obj.id;
        let startArgs = {
          from: {
            id: [id]
          }
        };
        let options = {
          return: ["id", "name"]
        };
        let input = {
          args: startArgs,
          options
        };
        let tasks = new TaskQueue();
        let step_1_get_event_name = new CallWaapiTask(session, waapi_functions_names.ak.wwise.core.object.get);
        let step_2_buil_create_soundbanks_args = new SimpleTask((input2) => {
          let res = input2.data;
          let event = res.kwargs.return[0];
          Log("Get Event message: ", event);
          let name = event.name;
          let args2 = {
            parent: "{39003BC1-0B4E-4863-A33B-7C29B1B62FFD}",
            type: WwiseTypes.SoundBank,
            name
          };
          return {
            args: args2,
            options: {}
          };
        });
        let step_3_create_soundbanks = new CallWaapiTask(session, waapi_functions_names.ak.wwise.core.object.create);
        let step_4_build_set_inclusion_args = new SimpleTask((input2) => {
          let res = input2.data;
          Log("Create SoundBank Success: ", res.kwargs);
          let params = res.kwargs;
          let soundBankId = params.id;
          let inclusionArgs = {
            soundbank: soundBankId,
            operation: "add",
            inclusions: [
              {
                object: id,
                filter: ["events", "structures", "media"]
              }
            ]
          };
          return {
            args: inclusionArgs
          };
        });
        let step_5_setsoundbanks_inclusions = new CallWaapiTask(session, waapi_functions_names.ak.wwise.core.soundbank.setInclusions);
        tasks.addTask(step_1_get_event_name);
        tasks.addTask(step_2_buil_create_soundbanks_args);
        tasks.addTask(step_3_create_soundbanks);
        tasks.addTask(step_4_build_set_inclusion_args);
        tasks.addTask(step_5_setsoundbanks_inclusions);
        tasks.regCompleteAction(() => {
          let result = tasks.getOutput();
          if (result.type === "error") {
            connection.close();
          }
        });
        tasks.runTask(input);
      }
    }
  }, (error) => {
    console.log(error);
    connection.close();
  });
});
