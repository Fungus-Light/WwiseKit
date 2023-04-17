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

// SRC/Wwise/Utils.ts
var import_autobahn = require("autobahn");
function CallWaapi(session, api, args, onSuccess, onError, onComplete) {
  session.call(api, [], args).then(
    function(res) {
      onSuccess?.call(this, res);
    },
    function(error) {
      onError?.call(this, error);
    }
  ).then(
    function() {
      onComplete?.call(this);
    }
  );
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
function SimpleAction(url, action) {
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

// SRC/Wwise/waapi_apis.ts
function $ak_wwise_core_object_create(session, args, exArgs, onSuccess, onError, onComplete) {
  args = JoinArgs(args, exArgs);
  CallWaapi(session, "ak.wwise.core.object.create", args, onSuccess, onError, onComplete);
}

// SRC/index.ts
console.log("Wwise Tools By Fungus Light!!!!!");
SimpleAction("ws://localhost:8080/waapi", (session, connection) => {
  let extraArgs = {
    Color: 4,
    OverrideColor: true
  };
  $ak_wwise_core_object_create(session, {
    parent: "{918A82F1-910D-4A73-952C-5A1FEC025428}",
    type: WwiseTypes.ActorMixer,
    name: "MyActorMixer20"
  }, extraArgs, null, null, () => {
    connection.close();
  });
});
