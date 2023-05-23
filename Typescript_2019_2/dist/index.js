// SRC/Wwise/Utils.ts
var import_autobahn = require("autobahn");
function CallWaapiPromise(session, api, args, options, onComplete) {
  return new Promise((resolve, reject) => {
    session.call(api, [], args, options).then(
      function(res) {
        resolve(res);
      },
      function(error) {
        reject(error);
      }
    ).then(
      function() {
        onComplete?.call(this);
      }
    );
  });
}
function JoinArgs(args, exArgs) {
  for (const k in exArgs) {
    let v = exArgs[k];
    let newKey = k;
    if (k.startsWith("_")) {
      newKey = "@" + k.substring(1);
    } else {
      newKey = "@" + k;
    }
    args[newKey] = v;
  }
  return args;
}
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
var DEFAULT_URL = "ws://localhost:8080/waapi";
var Log = console.log;

// SRC/Wwise/waapi_apis_promise.ts
function P_ak_soundengine_executeActionOnEvent(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.executeActionOnEvent", args, options, onComplete);
}
function P_ak_soundengine_postEvent(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.postEvent", args, options, onComplete);
}
function P_ak_soundengine_postMsgMonitor(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.postMsgMonitor", args, options, onComplete);
}
function P_ak_soundengine_postTrigger(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.postTrigger", args, options, onComplete);
}
function P_ak_soundengine_registerGameObj(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.registerGameObj", args, options, onComplete);
}
function P_ak_soundengine_resetRTPCValue(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.resetRTPCValue", args, options, onComplete);
}
function P_ak_soundengine_seekOnEvent(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.seekOnEvent", args, options, onComplete);
}
function P_ak_soundengine_setDefaultListeners(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setDefaultListeners", args, options, onComplete);
}
function P_ak_soundengine_setGameObjectAuxSendValues(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setGameObjectAuxSendValues", args, options, onComplete);
}
function P_ak_soundengine_setGameObjectOutputBusVolume(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setGameObjectOutputBusVolume", args, options, onComplete);
}
function P_ak_soundengine_setListeners(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setListeners", args, options, onComplete);
}
function P_ak_soundengine_setListenerSpatialization(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setListenerSpatialization", args, options, onComplete);
}
function P_ak_soundengine_setMultiplePositions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setMultiplePositions", args, options, onComplete);
}
function P_ak_soundengine_setObjectObstructionAndOcclusion(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setObjectObstructionAndOcclusion", args, options, onComplete);
}
function P_ak_soundengine_setPosition(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setPosition", args, options, onComplete);
}
function P_ak_soundengine_setRTPCValue(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setRTPCValue", args, options, onComplete);
}
function P_ak_soundengine_setScalingFactor(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setScalingFactor", args, options, onComplete);
}
function P_ak_soundengine_setState(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setState", args, options, onComplete);
}
function P_ak_soundengine_setSwitch(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setSwitch", args, options, onComplete);
}
function P_ak_soundengine_stopAll(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.stopAll", args, options, onComplete);
}
function P_ak_soundengine_stopPlayingID(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.stopPlayingID", args, options, onComplete);
}
function P_ak_soundengine_unregisterGameObj(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.unregisterGameObj", args, options, onComplete);
}
function P_ak_wwise_core_audio_import(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audio.import", args, options, onComplete);
}
function P_ak_wwise_core_audio_importTabDelimited(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audio.importTabDelimited", args, options, onComplete);
}
function P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion", args, options, onComplete);
}
function P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion", args, options, onComplete);
}
function P_ak_wwise_core_getInfo(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.getInfo", null, null, onComplete);
}
function P_ak_wwise_core_log_get(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.log.get", args, options, onComplete);
}
function P_ak_wwise_core_object_copy(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.copy", args, options, onComplete);
}
function P_ak_wwise_core_object_create(session, args, exArgs, options, onComplete) {
  args = JoinArgs(args, exArgs);
  return CallWaapiPromise(session, "ak.wwise.core.object.create", args, options, onComplete);
}
function P_ak_wwise_core_object_delete(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.delete", args, options, onComplete);
}
function P_ak_wwise_core_object_get(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.get", args, options, onComplete);
}
function P_ak_wwise_core_object_getAttenuationCurve(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.getAttenuationCurve", args, options, onComplete);
}
function P_ak_wwise_core_object_getPropertyAndReferenceNames(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.getPropertyAndReferenceNames", args, options, onComplete);
}
function P_ak_wwise_core_object_getPropertyInfo(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.getPropertyInfo", args, options, onComplete);
}
function P_ak_wwise_core_object_isPropertyEnabled(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.isPropertyEnabled", args, options, onComplete);
}
function P_ak_wwise_core_object_move(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.move", args, options, onComplete);
}
function P_ak_wwise_core_object_setAttenuationCurve(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setAttenuationCurve", args, options, onComplete);
}
function P_ak_wwise_core_object_setName(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setName", args, options, onComplete);
}
function P_ak_wwise_core_object_setNotes(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setNotes", args, options, onComplete);
}
function P_ak_wwise_core_object_setProperty(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setProperty", args, options, onComplete);
}
function P_ak_wwise_core_object_setRandomizer(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setRandomizer", args, options, onComplete);
}
function P_ak_wwise_core_object_setReference(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setReference", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getCursorTime(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getCursorTime", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getRTPCs(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getRTPCs", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getVoiceContributions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getVoiceContributions", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getVoices(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getVoices", args, options, onComplete);
}
function P_ak_wwise_core_profiler_startCapture(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.startCapture", null, null, onComplete);
}
function P_ak_wwise_core_profiler_stopCapture(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.stopCapture", null, null, onComplete);
}
function P_ak_wwise_core_project_save(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.project.save", null, null, onComplete);
}
function P_ak_wwise_core_remote_connect(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.connect", args, options, onComplete);
}
function P_ak_wwise_core_remote_disconnect(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.disconnect", null, null, onComplete);
}
function P_ak_wwise_core_remote_getAvailableConsoles(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.getAvailableConsoles", null, null, onComplete);
}
function P_ak_wwise_core_remote_getConnectionStatus(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.getConnectionStatus", null, null, onComplete);
}
function P_ak_wwise_core_soundbank_generate(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.generate", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_getInclusions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.getInclusions", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_setInclusions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.setInclusions", args, options, onComplete);
}
function P_ak_wwise_core_switchContainer_addAssignment(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.switchContainer.addAssignment", args, options, onComplete);
}
function P_ak_wwise_core_switchContainer_getAssignments(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.switchContainer.getAssignments", args, options, onComplete);
}
function P_ak_wwise_core_switchContainer_removeAssignment(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.switchContainer.removeAssignment", args, options, onComplete);
}
function P_ak_wwise_core_transport_create(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.create", args, options, onComplete);
}
function P_ak_wwise_core_transport_destroy(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.destroy", args, options, onComplete);
}
function P_ak_wwise_core_transport_executeAction(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.executeAction", args, options, onComplete);
}
function P_ak_wwise_core_transport_getList(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.getList", null, null, onComplete);
}
function P_ak_wwise_core_transport_getState(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.getState", args, options, onComplete);
}
function P_ak_wwise_core_undo_beginGroup(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.beginGroup", null, null, onComplete);
}
function P_ak_wwise_core_undo_cancelGroup(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.cancelGroup", null, null, onComplete);
}
function P_ak_wwise_core_undo_endGroup(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.endGroup", args, options, onComplete);
}
function P_ak_wwise_debug_enableAsserts(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.enableAsserts", args, options, onComplete);
}
function P_ak_wwise_debug_enableAutomationMode(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.enableAutomationMode", args, options, onComplete);
}
function P_ak_wwise_debug_testAssert(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.testAssert", null, null, onComplete);
}
function P_ak_wwise_debug_testCrash(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.testCrash", null, null, onComplete);
}
function P_ak_wwise_ui_bringToForeground(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.bringToForeground", null, null, onComplete);
}
function P_ak_wwise_ui_captureScreen(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.captureScreen", args, options, onComplete);
}
function P_ak_wwise_ui_commands_execute(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.execute", args, options, onComplete);
}
function P_ak_wwise_ui_commands_getCommands(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.getCommands", null, null, onComplete);
}
function P_ak_wwise_ui_commands_register(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.register", args, options, onComplete);
}
function P_ak_wwise_ui_commands_unregister(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.unregister", args, options, onComplete);
}
function P_ak_wwise_ui_getSelectedObjects(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.getSelectedObjects", null, null, onComplete);
}
function P_ak_wwise_ui_project_close(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.project.close", args, options, onComplete);
}
function P_ak_wwise_ui_project_open(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.project.open", args, options, onComplete);
}
function P_ak_wwise_waapi_getFunctions(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.waapi.getFunctions", null, null, onComplete);
}
function P_ak_wwise_waapi_getSchema(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.waapi.getSchema", args, options, onComplete);
}
function P_ak_wwise_waapi_getTopics(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.waapi.getTopics", null, null, onComplete);
}
var APIs_Async = {
  ak: {
    soundengine: {
      executeActionOnEvent: P_ak_soundengine_executeActionOnEvent,
      postEvent: P_ak_soundengine_postEvent,
      postMsgMonitor: P_ak_soundengine_postMsgMonitor,
      postTrigger: P_ak_soundengine_postTrigger,
      registerGameObj: P_ak_soundengine_registerGameObj,
      resetRTPCValue: P_ak_soundengine_resetRTPCValue,
      seekOnEvent: P_ak_soundengine_seekOnEvent,
      setDefaultListeners: P_ak_soundengine_setDefaultListeners,
      setGameObjectAuxSendValues: P_ak_soundengine_setGameObjectAuxSendValues,
      setGameObjectOutputBusVolume: P_ak_soundengine_setGameObjectOutputBusVolume,
      setListeners: P_ak_soundengine_setListeners,
      setListenerSpatialization: P_ak_soundengine_setListenerSpatialization,
      setMultiplePositions: P_ak_soundengine_setMultiplePositions,
      setObjectObstructionAndOcclusion: P_ak_soundengine_setObjectObstructionAndOcclusion,
      setPosition: P_ak_soundengine_setPosition,
      setRTPCValue: P_ak_soundengine_setRTPCValue,
      setScalingFactor: P_ak_soundengine_setScalingFactor,
      setState: P_ak_soundengine_setState,
      setSwitch: P_ak_soundengine_setSwitch,
      stopAll: P_ak_soundengine_stopAll,
      stopPlayingID: P_ak_soundengine_stopPlayingID,
      unregisterGameObj: P_ak_soundengine_unregisterGameObj
    },
    wwise: {
      core: {
        audio: {
          import: P_ak_wwise_core_audio_import,
          importTabDelimited: P_ak_wwise_core_audio_importTabDelimited
        },
        audioSourcePeaks: {
          getMinMaxPeaksInRegion: P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion,
          getMinMaxPeaksInTrimmedRegion: P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion
        },
        getInfo: P_ak_wwise_core_getInfo,
        log: {
          get: P_ak_wwise_core_log_get
        },
        object: {
          copy: P_ak_wwise_core_object_copy,
          create: P_ak_wwise_core_object_create,
          delete: P_ak_wwise_core_object_delete,
          get: P_ak_wwise_core_object_get,
          getAttenuationCurve: P_ak_wwise_core_object_getAttenuationCurve,
          getPropertyAndReferenceNames: P_ak_wwise_core_object_getPropertyAndReferenceNames,
          getPropertyInfo: P_ak_wwise_core_object_getPropertyInfo,
          getPropertyNames: "This function is deprecated!!!  ak.wwise.core.object.getPropertyNames",
          isPropertyEnabled: P_ak_wwise_core_object_isPropertyEnabled,
          move: P_ak_wwise_core_object_move,
          setAttenuationCurve: P_ak_wwise_core_object_setAttenuationCurve,
          setName: P_ak_wwise_core_object_setName,
          setNotes: P_ak_wwise_core_object_setNotes,
          setProperty: P_ak_wwise_core_object_setProperty,
          setRandomizer: P_ak_wwise_core_object_setRandomizer,
          setReference: P_ak_wwise_core_object_setReference
        },
        plugin: {
          getList: "This function is deprecated!!!  ak.wwise.core.plugin.getList"
        },
        profiler: {
          getCursorTime: P_ak_wwise_core_profiler_getCursorTime,
          getRTPCs: P_ak_wwise_core_profiler_getRTPCs,
          getVoiceContributions: P_ak_wwise_core_profiler_getVoiceContributions,
          getVoices: P_ak_wwise_core_profiler_getVoices,
          startCapture: P_ak_wwise_core_profiler_startCapture,
          stopCapture: P_ak_wwise_core_profiler_stopCapture
        },
        project: {
          save: P_ak_wwise_core_project_save
        },
        remote: {
          connect: P_ak_wwise_core_remote_connect,
          disconnect: P_ak_wwise_core_remote_disconnect,
          getAvailableConsoles: P_ak_wwise_core_remote_getAvailableConsoles,
          getConnectionStatus: P_ak_wwise_core_remote_getConnectionStatus
        },
        soundbank: {
          generate: P_ak_wwise_core_soundbank_generate,
          getInclusions: P_ak_wwise_core_soundbank_getInclusions,
          setInclusions: P_ak_wwise_core_soundbank_setInclusions
        },
        switchContainer: {
          addAssignment: P_ak_wwise_core_switchContainer_addAssignment,
          getAssignments: P_ak_wwise_core_switchContainer_getAssignments,
          removeAssignment: P_ak_wwise_core_switchContainer_removeAssignment
        },
        transport: {
          create: P_ak_wwise_core_transport_create,
          destroy: P_ak_wwise_core_transport_destroy,
          executeAction: P_ak_wwise_core_transport_executeAction,
          getList: P_ak_wwise_core_transport_getList,
          getState: P_ak_wwise_core_transport_getState
        },
        undo: {
          beginGroup: P_ak_wwise_core_undo_beginGroup,
          cancelGroup: P_ak_wwise_core_undo_cancelGroup,
          endGroup: P_ak_wwise_core_undo_endGroup
        }
      },
      debug: {
        enableAsserts: P_ak_wwise_debug_enableAsserts,
        enableAutomationMode: P_ak_wwise_debug_enableAutomationMode,
        testAssert: P_ak_wwise_debug_testAssert,
        testCrash: P_ak_wwise_debug_testCrash
      },
      ui: {
        bringToForeground: P_ak_wwise_ui_bringToForeground,
        captureScreen: P_ak_wwise_ui_captureScreen,
        commands: {
          execute: P_ak_wwise_ui_commands_execute,
          getCommands: P_ak_wwise_ui_commands_getCommands,
          register: P_ak_wwise_ui_commands_register,
          unregister: P_ak_wwise_ui_commands_unregister
        },
        getSelectedObjects: P_ak_wwise_ui_getSelectedObjects,
        project: {
          close: P_ak_wwise_ui_project_close,
          open: P_ak_wwise_ui_project_open
        }
      },
      waapi: {
        getFunctions: P_ak_wwise_waapi_getFunctions,
        getSchema: P_ak_wwise_waapi_getSchema,
        getTopics: P_ak_wwise_waapi_getTopics
      }
    }
  }
};

// SRC/index.ts
SimpleConnect(DEFAULT_URL, HelloWwise);
async function HelloWwise(session, connection) {
  let info = await APIs_Async.ak.wwise.core.getInfo(session);
  Log("Hello Wwise! Version: ", info.kwargs.version.displayName);
  connection.close();
}
