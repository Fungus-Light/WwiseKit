import { Session, Result, Error } from "autobahn"
import { CallWaapi , JoinArgs ,SimpleSubOptions } from "./Utils"

export declare interface ak_soundengine_executeActionOnEvent_Args{
	/**
	 * Either the ID (GUID), name or Short ID of the event.
	 */
	event:any
	/**
	 * Action to execute on all the elements that were played using the specified event. Uses values from <tt>AK::SoundEngine::AkActionOnEventType</tt>.
	 * Minimum: 0
	 * Maximum: 4
	 */
	actionType:number
	/**
	 * Associated game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
	/**
	 * Fade duration (ms).\n Integer 32-bit.
	 * Minimum: -2147483648
	 * Maximum: 2147483647
	 */
	transitionDuration:number
	/**
	 * Use values from \ref AkCurveInterpolation .
	 * Minimum: 0
	 * Maximum: 9
	 */
	fadeCurve:number
}

/**
 * Executes an action on all nodes that are referenced in the specified event in a Play action. See AK::SoundEngine::ExecuteActionOnEvent.
 */
export function $ak_soundengine_executeActionOnEvent(session:Session,args?:ak_soundengine_executeActionOnEvent_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.executeActionOnEvent", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_getState_Args{
	/**
	 * Either the ID (GUID), unique qualified name, or path of the State Group.
	 */
	stateGroup:any
}

/**
 * Gets the current state of a State Group. When using setState just prior to getState, allow a brief delay (no more than 10ms) for the information to update in the sound engine.
 */
export function $ak_soundengine_getState(session:Session,args?:ak_soundengine_getState_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.getState", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_getSwitch_Args{
	/**
	 * Either the ID (GUID), unique qualified name, or path of the Switch Group.
	 */
	switchGroup:any
	/**
	 * The unique ID of the game object. \n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Gets the current state of a Switch Group for a given Game Object.
 */
export function $ak_soundengine_getSwitch(session:Session,args?:ak_soundengine_getSwitch_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.getSwitch", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_postEvent_Args{
	/**
	 * Either the ID (GUID), name, or Short ID of the Event.
	 */
	event:any
	/**
	 * The unique ID of the game object. \n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Asynchronously post an Event to the sound engine (by event ID). See AK::SoundEngine::PostEvent.
 */
export function $ak_soundengine_postEvent(session:Session,args?:ak_soundengine_postEvent_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.postEvent", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_postMsgMonitor_Args{
	/**
	 * The message to display.
	 */
	message:string
}

/**
 * Display a message in the Profiler's Capture Log view.
 */
export function $ak_soundengine_postMsgMonitor(session:Session,args?:ak_soundengine_postMsgMonitor_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.postMsgMonitor", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_postTrigger_Args{
	/**
	 * Either the ID (GUID), name, or Short ID of the Trigger.
	 */
	trigger:any
	/**
	 * Associated game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Posts the specified Trigger. See AK::SoundEngine::PostTrigger.
 */
export function $ak_soundengine_postTrigger(session:Session,args?:ak_soundengine_postTrigger_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.postTrigger", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_registerGameObj_Args{
	/**
	 * ID of the game object to be registered.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
	/**
	 * Name of the game object (for monitoring purpose).
	 */
	name:string
}

/**
 * Register a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. See AK::SoundEngine::RegisterGameObj.
 */
export function $ak_soundengine_registerGameObj(session:Session,args?:ak_soundengine_registerGameObj_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.registerGameObj", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_resetRTPCValue_Args{
	/**
	 * Either the ID (GUID), name, or Short ID of the real-time parameter control.
	 */
	rtpc:any
	/**
	 * Associated game object ID\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Resets the value of a real-time parameter control to its default value, as specified in the Wwise project. See AK::SoundEngine::ResetRTPCValue.
 */
export function $ak_soundengine_resetRTPCValue(session:Session,args?:ak_soundengine_resetRTPCValue_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.resetRTPCValue", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_seekOnEvent_Args{
	/**
	 * Either the ID (GUID), name, or Short ID of the Event.
	 */
	event?:any
	/**
	 * Associated game object ID; use <tt>AK_INVALID_GAME_OBJECT</tt> to affect all game objects.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject?:number
	/**
	 * Desired position where playback should restart, in milliseconds.\n Integer 32-bit.
	 * Minimum: -2147483648
	 * Maximum: 2147483647
	 */
	position?:number
	/**
	 * Desired position where playback should restart, expressed in a percentage of the file's total duration, between 0 and 1.f. See note above about infinite looping sounds.
	 */
	percent?:number
	/**
	 * If true, the final seeking position is made equal to the nearest marker.
	 */
	seekToNearestMarker?:boolean
	/**
	 * Specifies the playing ID for which the seek is to be applied. This results in the seek being applied only to active actions of the playing ID. Use \c AK_INVALID_PLAYING_ID or nothing, to seek on all active Actions of this Event ID.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	playingId?:number
}

/**
 * Seeks inside all playing objects that are referenced in Play Actions of the specified Event. See AK::SoundEngine::SeekOnEvent.
 */
export function $ak_soundengine_seekOnEvent(session:Session,args?:ak_soundengine_seekOnEvent_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.seekOnEvent", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setDefaultListeners_Args{
	/**
	 * Array of listener game object IDs. Game objects must have been previously registered.
	 */
	listeners:Array<any>
}

/**
 * Sets the default active listeners for all subsequent game objects that are registered. See AK::SoundEngine::SetDefaultListeners.
 */
export function $ak_soundengine_setDefaultListeners(session:Session,args?:ak_soundengine_setDefaultListeners_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setDefaultListeners", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setGameObjectAuxSendValues_Args{
	/**
	 * Associated game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
	/**
	 * Array of AkAuxSendValue structures.
	 */
	auxSendValues:Array<any>
}

/**
 * Sets the Auxiliary Busses to route the specified game object. See AK::SoundEngine::SetGameObjectAuxSendValues.
 */
export function $ak_soundengine_setGameObjectAuxSendValues(session:Session,args?:ak_soundengine_setGameObjectAuxSendValues_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setGameObjectAuxSendValues", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setGameObjectOutputBusVolume_Args{
	/**
	 * Associated emitter game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	emitter:number
	/**
	 * Associated listener game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	listener:number
	/**
	 * A multiplier where 0 means silence and 1 means no change. Therefore, values between 0 and 1 attenuate the sound, and values greater than 1 amplify it.
	 */
	controlValue:number
}

/**
 * Set the output bus volume (direct) to be used for the specified game object. See AK::SoundEngine::SetGameObjectOutputBusVolume.
 */
export function $ak_soundengine_setGameObjectOutputBusVolume(session:Session,args?:ak_soundengine_setGameObjectOutputBusVolume_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setGameObjectOutputBusVolume", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setListeners_Args{
	/**
	 * Emitter game object.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	emitter:number
	/**
	 * Array of listener game object IDs. Game objects must have been previously registered.
	 */
	listeners:Array<any>
}

/**
 * Sets a single game object's active listeners. By default, all new game objects have no listeners active, but this behavior can be overridden with SetDefaultListeners(). Inactive listeners are not computed. See AK::SoundEngine::SetListeners.
 */
export function $ak_soundengine_setListeners(session:Session,args?:ak_soundengine_setListeners_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setListeners", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setListenerSpatialization_Args{
	/**
	 * Listener game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	listener:number
	/**
	 * Spatialization toggle (true: enable spatialization, false: disable spatialization).
	 */
	spatialized:boolean
	/**
	 * Channel configuration associated with volumeOffsets. Use <tt>AK::AkChannelConfig::Serialize</tt> to serialize the value.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	channelConfig:number
	/**
	 * Array of per-speaker volume offsets, in dB. See AkSpeakerVolumes.h for how to manipulate this array.
	 */
	volumeOffsets:Array<any>
}

/**
 * Sets a listener's spatialization parameters. This lets you define listener-specific volume offsets for each audio channel. See AK::SoundEngine::SetListenerSpatialization.
 */
export function $ak_soundengine_setListenerSpatialization(session:Session,args?:ak_soundengine_setListenerSpatialization_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setListenerSpatialization", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setMultiplePositions_Args{
	/**
	 * Game Object identifier.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
	/**
	 * Array of positions to apply.
	 */
	positions:Array<any>
	/**
	 * Uses values from <tt>AK::SoundEngine::MultiPositionType</tt>.
	 * Minimum: 0
	 * Maximum: 2
	 */
	multiPositionType:number
}

/**
 * Sets multiple positions for a single game object. Setting multiple positions for a single game object is a way to simulate multiple emission sources while using the resources of only one voice. This can be used to simulate wall openings, area sounds, or multiple objects emitting the same sound in the same area. See AK::SoundEngine::SetMultiplePositions.
 */
export function $ak_soundengine_setMultiplePositions(session:Session,args?:ak_soundengine_setMultiplePositions_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setMultiplePositions", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setObjectObstructionAndOcclusion_Args{
	/**
	 * Emitter game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	emitter:number
	/**
	 * Listener game object ID\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	listener:number
	/**
	 * ObstructionLevel: [0.0f..1.0f].
	 */
	obstructionLevel:number
	/**
	 * OcclusionLevel: [0.0f..1.0f].
	 */
	occlusionLevel:number
}

/**
 * Set a game object's obstruction and occlusion levels. This function is used to affect how an object should be heard by a specific listener. See AK::SoundEngine::SetObjectObstructionAndOcclusion.
 */
export function $ak_soundengine_setObjectObstructionAndOcclusion(session:Session,args?:ak_soundengine_setObjectObstructionAndOcclusion_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setObjectObstructionAndOcclusion", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setPosition_Args{
	/**
	 * Game Object identifier.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
	/**
	 * The 3D position to set for the game object.
	 */
	position:object
}

/**
 * Sets the position of a game object. See AK::SoundEngine::SetPosition.
 */
export function $ak_soundengine_setPosition(session:Session,args?:ak_soundengine_setPosition_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setPosition", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setRTPCValue_Args{
	/**
	 * Either the ID (GUID), name, or Short ID of the real-time parameter control.
	 */
	rtpc:any
	/**
	 * Value to set.
	 */
	value:number
	/**
	 * Associated game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Sets the value of a real-time parameter control. See AK::SoundEngine::SetRTPCValue.
 */
export function $ak_soundengine_setRTPCValue(session:Session,args?:ak_soundengine_setRTPCValue_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setRTPCValue", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setScalingFactor_Args{
	/**
	 * The game object identifier.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
	/**
	 * The scaling factor, where 1 means 100%, 0.5 means 50%, 2 means 200%, and so on.
	 */
	attenuationScalingFactor:number
}

/**
 * Sets the scaling factor of a game object. You can modify the attenuation computations on this game object to simulate sounds with a larger or smaller affected areas. See AK::SoundEngine::SetScalingFactor.
 */
export function $ak_soundengine_setScalingFactor(session:Session,args?:ak_soundengine_setScalingFactor_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setScalingFactor", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setState_Args{
	/**
	 * Either the ID (GUID), name, or Short ID of the State Group.
	 */
	stateGroup:any
	/**
	 * Either the ID (GUID), name, or Short ID of the State.
	 */
	state:any
}

/**
 * Sets the State of a State Group. See AK::SoundEngine::SetState.
 */
export function $ak_soundengine_setState(session:Session,args?:ak_soundengine_setState_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setState", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_setSwitch_Args{
	/**
	 * Either the ID (GUID), name, or short ID of the Switch Group.
	 */
	switchGroup:any
	/**
	 * Either the ID (GUID), name, or Short ID of the Switch State.
	 */
	switchState:any
	/**
	 * Associated game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Sets the State of a Switch Group. See AK::SoundEngine::SetSwitch.
 */
export function $ak_soundengine_setSwitch(session:Session,args?:ak_soundengine_setSwitch_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.setSwitch", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_stopAll_Args{
	/**
	 * Specify a game object to stop only playback associated to the provided game object ID.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Stop playing the current content associated to the specified game object ID. If no game object is specified, all sounds are stopped. See AK::SoundEngine::StopAll.
 */
export function $ak_soundengine_stopAll(session:Session,args?:ak_soundengine_stopAll_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.stopAll", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_stopPlayingID_Args{
	/**
	 * Playing ID to be stopped.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	playingId:number
	/**
	 * Fade duration (ms).\n Integer 32-bit.
	 * Minimum: -2147483648
	 * Maximum: 2147483647
	 */
	transitionDuration:number
	/**
	 * Curve type to be used for the transition. Uses values from \ref AkCurveInterpolation .
	 * Minimum: 0
	 * Maximum: 9
	 */
	fadeCurve:number
}

/**
 * Stops the current content, associated to the specified playing ID, from playing. See AK::SoundEngine::StopPlayingID.
 */
export function $ak_soundengine_stopPlayingID(session:Session,args?:ak_soundengine_stopPlayingID_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.stopPlayingID", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_soundengine_unregisterGameObj_Args{
	/**
	 * ID of the game object to be unregistered. Use \c AK_INVALID_GAME_OBJECT to unregister all game objects.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject:number
}

/**
 * Unregisters a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. Unregistering a game object while it is in use is allowed, but the control over the parameters of this game object is lost. For example, say a sound associated with this game object is a 3D moving sound. It stops moving when the game object is unregistered, and there is no way to regain control over the game object. See AK::SoundEngine::UnregisterGameObj.
 */
export function $ak_soundengine_unregisterGameObj(session:Session,args?:ak_soundengine_unregisterGameObj_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.soundengine.unregisterGameObj", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_audio_import_Args{
	/**
	 * Determines how import object creation is performed. For each object created:
- createNew: creates a new object; the object is given the desired name if possible, otherwise a new unique name is used.
- useExisting: uses the object if it exists, updating the specified properties; otherwise it creates a new object. This is the default value.
- replaceExisting: creates a new object; if an existing object has the same name then the existing object is destroyed.
	 */
	importOperation?:string
	/**
	 * Default values for each item in "imports". Use this object to avoid repeating common properties of every imported element.
	 */
	default?:object
	/**
	 * Array of import commands.
	 */
	imports:Array<any>
	/**
	 * Determines if Wwise automatically performs an Add or Checkout operation on the imported files with the source control. Defaults to false.
	 */
	autoAddToSourceControl?:boolean
}

/**
 * Creates Wwise objects and imports audio files. This function uses the same importation processor available through the Tab Delimited import in the Audio File Importer. The function returns an array of all objects created, replaced or re-used. Use the options to specify how the objects are returned. For more information, refer to Importing Audio Files and Creating Structures.
 */
export function $ak_wwise_core_audio_import(session:Session,args?:ak_wwise_core_audio_import_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.audio.import", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_audio_importTabDelimited_Args{
	/**
	 * Object ID (GUID), name, or path used as root relative object paths.
	 */
	importLocation?:any
	/**
	 * Imports language for audio file import (taken from the project's defined languages, found in the WPROJ file LanguageList).
	 */
	importLanguage:string
	/**
	 * Determines how import object creation is performed. For each object created:
- createNew: creates a new object; the object is given the desired name if possible, otherwise a new unique name is used.
- useExisting: uses the object if it exists, updating the specified properties; otherwise it creates a new object. This is the default value.
- replaceExisting: creates a new object. If an existing object has the same name, the existing object is destroyed.
	 */
	importOperation:string
	/**
	 * Location of tab-delimited import file. For using WAAPI on Mac, please refer to \ref waapi_path_on_mac .
	 */
	importFile:string
	/**
	 * Determines if Wwise automatically performs an Add or Checkout operation on the imported files with the source control. Defaults to false.
	 */
	autoAddToSourceControl?:boolean
}

/**
 * Scripted object creation and audio file import from a tab-delimited file.
 */
export function $ak_wwise_core_audio_importTabDelimited(session:Session,args?:ak_wwise_core_audio_importTabDelimited_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.audio.importTabDelimited", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion_Args{
	/**
	 * The ID (GUID), name, or path of the audio source object.
	 */
	object:any
	/**
	 * The start time, in seconds, of the section of the audio source for which peaks are required. This number must be smaller than timeTo.
	 * Minimum: 0
	 */
	timeFrom:number
	/**
	 * The end time, in seconds, of the section of the audio source for which peaks are required. This number must be larger than timeFrom.
	 * Minimum: 0
	 */
	timeTo:number
	/**
	 * The number of peaks that are required (minimum 1).
	 * Minimum: 1
	 * Maximum: 4294967295
	 */
	numPeaks:number
	/**
	 * When true, peaks are calculated globally across channels, instead of per channel.
	 */
	getCrossChannelPeaks?:boolean
}

/**
 * Gets the min/max peak pairs, in the given region of an audio source, as a collection of binary strings (one per channel). The strings are base-64 encoded, 16-bit signed int arrays, with min and max values being interleaved. If getCrossChannelPeaks is true, only one binary string represents the peaks across all channels globally.
 */
export function $ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion(session:Session,args?:ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion_Args{
	/**
	 * The ID (GUID), name, or path of the audio source.
	 */
	object:any
	/**
	 * The number of peaks that are required (minimum 1).
	 * Minimum: 1
	 * Maximum: 4294967295
	 */
	numPeaks:number
	/**
	 * When true, peaks are calculated globally across channels, instead of per channel.
	 */
	getCrossChannelPeaks?:boolean
}

/**
 * Gets the min/max peak pairs in the entire trimmed region of an audio source, for each channel, as an array of binary strings (one per channel). The strings are base-64 encoded, 16-bit signed int arrays, with min and max values being interleaved. If getCrossChannelPeaks is true, there is only one binary string representing peaks across all channels globally.
 */
export function $ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion(session:Session,args?:ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion", args, options, onSuccess, onError, onComplete)
}

/**
 * Retrieve global Wwise information.
 */
export function $ak_wwise_core_getInfo(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.getInfo", null, null, onSuccess, onError, onComplete)
}

/**
 * Retrieve information about the current project opened, including platforms, languages and project directories.
 */
export function $ak_wwise_core_getProjectInfo(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.getProjectInfo", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_log_get_Args{
	/**
	 * The log channel.\n The log channel.
	 */
	channel:string
}

/**
 * Retrieves the latest log for a specific channel. Refer to ak.wwise.core.log.itemAdded to be notified when an item is added to the log. The log is empty when used in WwiseConsole.
 */
export function $ak_wwise_core_log_get(session:Session,args?:ak_wwise_core_log_get_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.log.get", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_copy_Args{
	/**
	 * The ID (GUID), name, or path of the object to be copied.
	 */
	object:any
	/**
	 * The ID (GUID), name, or path of the object's new parent.
	 */
	parent:any
	/**
	 * The action to take if "parent" already has a child with the same name. Default value is "fail".
	 */
	onNameConflict?:string
}

/**
 * Copies an object to the given parent.
 */
export function $ak_wwise_core_object_copy(session:Session,args?:ak_wwise_core_object_copy_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.copy", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_create_Args{
	/**
	 * The ID (GUID), name, or path of the parent of the new object.
	 */
	parent:any
	/**
	 * The name of the list in which to insert the object. If this argument is set, the object gets inserted in a list owned by the parent and not as a child.
	 */
	list?:string
	/**
	 * The action to take if "parent" already has a child with the same name. Default value is "fail". Refer to \ref waapi_create_objects_modes for more information.
	 */
	onNameConflict?:string
	/**
	 * The ID (GUID) or unique name of the platform used when setting properties via this command. Not specifying a platform sets the value for all linked platforms.
	 */
	platform?:any
	/**
	 * Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. Defaults to false.
	 */
	autoAddToSourceControl?:boolean
	/**
	 * The type of the new object. Refer to \ref wobjects_index for possible object types.
	 */
	type:string
	/**
	 * The name of the new object.
	 */
	name:string
	/**
	 * The notes or comments of the new object.
	 */
	notes?:string
	/**
	 * An array of child objects to be created.
	 */
	children?:Array<any>
}

/**
 * Creates an object of type 'type', as a child of 'parent'. Refer to Importing Audio Files and Creating Structures for more information about creating objects. Also refer to ak.wwise.core.audio.import to import audio files to Wwise.
 */
export function $ak_wwise_core_object_create(session:Session,args?:ak_wwise_core_object_create_Args,exArgs?:any,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	args = JoinArgs(args,exArgs)
	CallWaapi(session, "ak.wwise.core.object.create", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_delete_Args{
	/**
	 * The ID (GUID), name, or path of the object to be deleted.
	 */
	object:any
}

/**
 * Deletes the specified object.
 */
export function $ak_wwise_core_object_delete(session:Session,args?:ak_wwise_core_object_delete_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.delete", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_diff_Args{
	/**
	 * The ID (GUID), name, or path of the source object.
	 */
	source:any
	/**
	 * The ID (GUID), name, or path of the target object.
	 */
	target:any
}

/**
 * Compares properties and lists of the source object with those in the target object.
 */
export function $ak_wwise_core_object_diff(session:Session,args?:ak_wwise_core_object_diff_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.diff", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_get_Args{
	/**
	 * Specifies a query in the WAQL language. Refer to \ref waql_introduction for more information.
	 */
	waql?:string
	/**
	 * The query starting point. Note, this is deprecated. The WAQL argument should be used instead.
	 */
	from?:any
	/**
	 * Array of sequential transformations chained on the object list returned by "from".
	 */
	transform?:Array<any>
}

/**
 * Performs a query and returns the data, as specified in the options, for each object in the query result. The query can specify either a 'waql' argument or a 'from' argument with an optional 'transform' argument. Refer to Using the Wwise Authoring Query Language (WAQL) or Querying the Wwise Project for more information. Refer to Return Options to learn about options.
 */
export function $ak_wwise_core_object_get(session:Session,args?:ak_wwise_core_object_get_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.get", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_getAttenuationCurve_Args{
	/**
	 * The ID (GUID), name, or path of attenuation object.
	 */
	object:any
	/**
	 * The ID (GUID) or unique name of the platform to get curves.  Set to null-guid for unlinked reference.
	 */
	platform?:any
	/**
	 * Type of attenuation curve.
	 */
	curveType:string
}

/**
 * Gets the specified attenuation curve for a given attenuation object.
 */
export function $ak_wwise_core_object_getAttenuationCurve(session:Session,args?:ak_wwise_core_object_getAttenuationCurve_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.getAttenuationCurve", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_getPropertyAndReferenceNames_Args{
	/**
	 * The ID (GUID), name, or path of the object to watch.
	 */
	object?:any
	/**
	 * The ID (class ID) of the object to retrieve the property and reference names from.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	classId?:number
}

/**
 * Retrieves the list of property and reference names for an object.
 */
export function $ak_wwise_core_object_getPropertyAndReferenceNames(session:Session,args?:ak_wwise_core_object_getPropertyAndReferenceNames_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.getPropertyAndReferenceNames", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_getPropertyInfo_Args{
	/**
	 * The ID (GUID), name, or path of the object to watch.
	 */
	object?:any
	/**
	 * The ID (class ID) of the object to retrieve the property from.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	classId?:number
	/**
	 * The name of the property to retrieve. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index .\n A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
	 */
	property?:string
}

/**
 * Retrieves information about an object property. Note that this function does not return the value of a property. To retrieve the value of a property, refer to ak.wwise.core.object.get and Return Options.
 */
export function $ak_wwise_core_object_getPropertyInfo(session:Session,args?:ak_wwise_core_object_getPropertyInfo_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.getPropertyInfo", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_isPropertyEnabled_Args{
	/**
	 * The ID (GUID), name, or path of the object to check.
	 */
	object:any
	/**
	 * The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference.
	 */
	platform:any
	/**
	 * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index .\n A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
	 */
	property:string
}

/**
 * Returns true if a property is enabled based on the values of the properties it depends on.
 */
export function $ak_wwise_core_object_isPropertyEnabled(session:Session,args?:ak_wwise_core_object_isPropertyEnabled_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.isPropertyEnabled", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_move_Args{
	/**
	 * The ID (GUID), name, or path of the object to be moved.
	 */
	object:any
	/**
	 * The ID (GUID), name, or path of the object's new parent.
	 */
	parent:any
	/**
	 * The action to take if "parent" already has a child with the same name. Default value is "fail".
	 */
	onNameConflict?:string
}

/**
 * Moves an object to the given parent. Returns the moved object.
 */
export function $ak_wwise_core_object_move(session:Session,args?:ak_wwise_core_object_move_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.move", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_pasteProperties_Args{
	/**
	 * The ID (GUID), name, or path of the source object.
	 */
	source:any
	/**
	 * Array of target objects to paste into.
	 */
	targets:Array<any>
	/**
	 * Paste mode for lists. Default value is "replaceEntire". With "replaceEntire" all elements in the lists of a target object are removed and all selected elements from the source's lists are copied. Conversely, with "addReplace" and "addKeep" elements in a target which are not in the source are not removed. Elements in the source's list which are not in a target's list are added to the target. For elements which are common to the source and a target "addReplace" will copy the one from the source, replacing the target's element, whereas "addKeep" will retain the element in the target.
	 */
	pasteMode?:string
	/**
	 * Array of properties, references and lists to include in the paste operation. When not specified, all properties, references and lists are included, and the exclusion defines which ones to exclude
	 */
	inclusion?:Array<any>
	/**
	 * Array of properties, references and lists to exclude from the paste operation. When not specified, no properties, references and lists are excluded.
	 */
	exclusion?:Array<any>
}

/**
 * Pastes properties, references and lists from one object to any number of target objects. Only those properties, references and lists which differ between source and target are pasted. Refer to Wwise Objects Reference for more information on the properties, references and lists available on each object type.
 */
export function $ak_wwise_core_object_pasteProperties(session:Session,args?:ak_wwise_core_object_pasteProperties_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.pasteProperties", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_set_Args{
	/**
	 * An array of objects on which to set values and create child or list objects.
	 */
	objects:Array<any>
	/**
	 * Unless overriden by an individual "object", the ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms.
	 */
	platform?:any
	/**
	 * Unless overriden by an individual "object", the action to take if "object" already has a child with the same name. Default value is "fail". Refer to \ref waapi_create_objects_modes for more information.
	 */
	onNameConflict?:string
	/**
	 * Unless overriden by an individual "object", the action to take if "object" already has objects in a specified list. Default value is "append". Refer to \ref waapi_set_lists_modes for more information.
	 */
	listMode?:string
	/**
	 * Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. Defaults to false.
	 */
	autoAddToSourceControl?:boolean
}

/**
 * Allows for batch processing of the following operations: Object creation in a child hierarchy, Object creation in a list, Setting name, notes, properties and references. Refer to Importing Audio Files and Creating Structures for more information about creating objects. Also refer to ak.wwise.core.audio.import to import audio files to Wwise.
 */
export function $ak_wwise_core_object_set(session:Session,args?:ak_wwise_core_object_set_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.set", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_setAttenuationCurve_Args{
	/**
	 * The ID (GUID), name, or path of attenuation object.
	 */
	object:any
	/**
	 * The ID (GUID) or unique name of the platform to set curves. Set to null-guid for unlinked curve.
	 */
	platform?:any
	/**
	 * The type of attenuation curve.
	 */
	curveType:string
	/**
	 * Defines if the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve.
	 */
	use:string
	/**
	 * The attenuation curve.\n An array of points defining a curve.
	 */
	points:Array<any>
}

/**
 * Sets the specified attenuation curve for a given attenuation object.
 */
export function $ak_wwise_core_object_setAttenuationCurve(session:Session,args?:ak_wwise_core_object_setAttenuationCurve_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.setAttenuationCurve", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_setName_Args{
	/**
	 * The ID (GUID), name, or path of the object to rename.
	 */
	object:any
	/**
	 * The new name of the object.
	 */
	value:string
}

/**
 * Renames an object.
 */
export function $ak_wwise_core_object_setName(session:Session,args?:ak_wwise_core_object_setName_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.setName", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_setNotes_Args{
	/**
	 * The ID (GUID), name, or path of the object to set value.
	 */
	object:any
	/**
	 * The new notes of the object.
	 */
	value:string
}

/**
 * Sets the object's notes.
 */
export function $ak_wwise_core_object_setNotes(session:Session,args?:ak_wwise_core_object_setNotes_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.setNotes", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_setProperty_Args{
	/**
	 * The ID (GUID), name, or path of the object to set value.
	 */
	object:any
	/**
	 * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index .\n A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
	 */
	property:string
	/**
	 * The ID (GUID) or unique name of the platform. This is used to set values for unlinked properties. This is an optional argument. When not specified, the current platform is used to set the property.
	 */
	platform?:any
	/**
	 * The value of the object.\n The value of a property.
	 */
	value:any
}

/**
 * Sets a property value of an object for a specific platform. Refer to Wwise Objects Reference for more information on the properties available on each object type. Refer to ak.wwise.core.object.setReference to set a reference to an object. Refer to ak.wwise.core.object.get to obtain the value of a property for an object.
 */
export function $ak_wwise_core_object_setProperty(session:Session,args?:ak_wwise_core_object_setProperty_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.setProperty", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_setRandomizer_Args{
	/**
	 * The ID (GUID), name, or path of the object owning the property.
	 */
	object?:any
	/**
	 * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index .\n A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
	 */
	property?:string
	/**
	 * The ID (GUID) or unique name of the platform.
	 */
	platform?:any
	/**
	 * Enabled state of the randomizer.
	 */
	enabled?:boolean
	/**
	 * Minimum value that the randomizer can offset by.
	 * Maximum: 0
	 */
	min?:number
	/**
	 * Maximum value that the randomizer can offset by.
	 * Minimum: 0
	 */
	max?:number
}

/**
 * Sets the randomizer values of a property of an object for a specific platform. Refer to Wwise Objects Reference for more information on the properties available on each object type.
 */
export function $ak_wwise_core_object_setRandomizer(session:Session,args?:ak_wwise_core_object_setRandomizer_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.setRandomizer", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_object_setReference_Args{
	/**
	 * The ID (GUID), name, or path of the object which has the reference.
	 */
	object:any
	/**
	 * The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference.
	 */
	platform?:any
	/**
	 * The name of the reference to set. Refer to \ref wobjects_index for more information on the references available.
	 */
	reference:string
	/**
	 * The ID (GUID), name, path or definition of the object to be referred to.
	 */
	value:any
}

/**
 * Sets an object's reference value. Refer to Wwise Objects Reference for more information on the references available on each object type.
 */
export function $ak_wwise_core_object_setReference(session:Session,args?:ak_wwise_core_object_setReference_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.object.setReference", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getAudioObjects_Args{
	/**
	 * Time in milliseconds to query for Audio Objects, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture.
	 */
	time:any
	/**
	 * The pipeline ID of a Bus instance for which to get Audio Objects.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	busPipelineID?:number
}

/**
 * Retrieves the Audio Objects at a specific profiler capture time.
 */
export function $ak_wwise_core_profiler_getAudioObjects(session:Session,args?:ak_wwise_core_profiler_getAudioObjects_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getAudioObjects", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getBusses_Args{
	/**
	 * Time in milliseconds to query for busses, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture.
	 */
	time:any
	/**
	 * The pipeline ID of a single bus instance to get.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	busPipelineID?:number
}

/**
 * Retrieves the busses at a specific profiler capture time.
 */
export function $ak_wwise_core_profiler_getBusses(session:Session,args?:ak_wwise_core_profiler_getBusses_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getBusses", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getCursorTime_Args{
	/**
	 * Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture.\n Identify one of the global profiler cursors.
	 */
	cursor:string
}

/**
 * Returns the current time of the specified profiler cursor, in milliseconds.
 */
export function $ak_wwise_core_profiler_getCursorTime(session:Session,args?:ak_wwise_core_profiler_getCursorTime_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getCursorTime", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getGameObjects_Args{
	/**
	 * The time in milliseconds to query for game objects.
	 */
	time:any
}

/**
 * Retrieves the game objects at a specific profiler capture time.
 */
export function $ak_wwise_core_profiler_getGameObjects(session:Session,args?:ak_wwise_core_profiler_getGameObjects_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getGameObjects", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getRTPCs_Args{
	/**
	 * Time in milliseconds to query for RTPCs, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture.
	 */
	time:any
}

/**
 * Retrieves active RTPCs at a specific profiler capture time.
 */
export function $ak_wwise_core_profiler_getRTPCs(session:Session,args?:ak_wwise_core_profiler_getRTPCs_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getRTPCs", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getVoiceContributions_Args{
	/**
	 * The pipeline ID of the voice to get contributions from.\n Identifies a playing voice instance ID.
	 * Minimum: 0
	 */
	voicePipelineID:number
	/**
	 * An array of bus pipeline IDs.
	 */
	bussesPipelineID?:Array<any>
	/**
	 * Time in milliseconds to query for voices, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture.
	 */
	time:any
}

/**
 * Retrieves all parameters affecting voice volume, highpass and lowpass for a voice path, resolved from pipeline IDs.
 */
export function $ak_wwise_core_profiler_getVoiceContributions(session:Session,args?:ak_wwise_core_profiler_getVoiceContributions_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getVoiceContributions", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_profiler_getVoices_Args{
	/**
	 * Time in milliseconds to query for voices, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture.
	 */
	time:any
	/**
	 * The pipeline ID of a single voice to get.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	voicePipelineID?:number
}

/**
 * Retrieves the voices at a specific profiler capture time.
 */
export function $ak_wwise_core_profiler_getVoices(session:Session,args?:ak_wwise_core_profiler_getVoices_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.getVoices", args, options, onSuccess, onError, onComplete)
}

/**
 * Starts the profiler capture and returns the time at the beginning of the capture, in milliseconds.
 */
export function $ak_wwise_core_profiler_startCapture(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.startCapture", null, null, onSuccess, onError, onComplete)
}

/**
 * Stops the profiler capture and returns the time at the end of the capture, in milliseconds.
 */
export function $ak_wwise_core_profiler_stopCapture(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.profiler.stopCapture", null, null, onSuccess, onError, onComplete)
}

/**
 * Saves the current project.
 */
export function $ak_wwise_core_project_save(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.core.project.save", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_remote_connect_Args{
	/**
	 * The host to connect to. The host can be a computer name, an IPv4 address, an IP:PORT pair, or a full path to a saved capture (.prof file). Use 127.0.0.1 to connect to localhost.
	 */
	host:string
	/**
	 * The value in the Application Name column from the Remote Connection dialog in Wwise, or from from ak.wwise.core.remote.getAvailableConsoles. If you are running more than one Sound Engine instance, you can specify the name of the application to connect to.
	 */
	appName?:string
	/**
	 * The command port. If you are running two or more Sound Engine instances that use the same application name, you can specify the command port to distinguish between different applications sharing the same name. You don't need to use this if the application name is unique. When using this, you must also provide appName. You can obtain this information from ak.wwise.core.remote.getAvailableConsoles.\n Unsigned Integer 16-bit.
	 * Minimum: 0
	 * Maximum: 65535
	 */
	commandPort?:number
	/**
	 * Unused.\n Unsigned Integer 16-bit.
	 * Minimum: 0
	 * Maximum: 65535
	 */
	notificationPort?:number
}

/**
 * Connects the Wwise Authoring application to a Wwise Sound Engine running executable. The host must be running code with communication enabled. If only "host" is provided, Wwise connects to the first Sound Engine instance found. To distinguish between different instances, you can also provide the name of the application to connect to.
 */
export function $ak_wwise_core_remote_connect(session:Session,args?:ak_wwise_core_remote_connect_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.remote.connect", args, options, onSuccess, onError, onComplete)
}

/**
 * Disconnects the Wwise Authoring application from a connected Wwise Sound Engine running executable.
 */
export function $ak_wwise_core_remote_disconnect(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.core.remote.disconnect", null, null, onSuccess, onError, onComplete)
}

/**
 * Retrieves all consoles available for connecting Wwise Authoring to a Sound Engine instance.
 */
export function $ak_wwise_core_remote_getAvailableConsoles(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.remote.getAvailableConsoles", null, null, onSuccess, onError, onComplete)
}

/**
 * Retrieves the connection status.
 */
export function $ak_wwise_core_remote_getConnectionStatus(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.remote.getConnectionStatus", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_sound_setActiveSource_Args{
	/**
	 * Sound ID (GUID), name, or path.
	 */
	sound:any
	/**
	 * Source ID (GUID), name, or path. The source must be a child of the sound.
	 */
	source:any
	/**
	 * Platform ID (GUID) or name. This is an optional argument. When not specified, the current platform is used.
	 */
	platform?:any
}

/**
 * Sets which version of the source is being used for the specified sound. Use ak.wwise.core.object.get with the 'activeSource' return option to get the active source of a sound.
 */
export function $ak_wwise_core_sound_setActiveSource(session:Session,args?:ak_wwise_core_sound_setActiveSource_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.sound.setActiveSource", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_soundbank_convertExternalSources_Args{
	/**
	 * An array of external sources files and corrisponding arguments.
	 */
	sources:Array<any>
}

/**
 * Converts the external sources files for the project as detailed in the wsources file, and places them into either the default folder, or the folder specified by the output argument. External Sources are a special type of source that you can put in a Sound object in Wwise. It indicates that the real sound data will be provided at run time. While External Source conversion is also triggered by SoundBank generation, this operation can be used to process sources not contained in the Wwise Project. Please refer to Wwise SDK help page "Integrating External Sources".
 */
export function $ak_wwise_core_soundbank_convertExternalSources(session:Session,args?:ak_wwise_core_soundbank_convertExternalSources_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.soundbank.convertExternalSources", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_soundbank_generate_Args{
	/**
	 * List of SoundBank to generate.
	 */
	soundbanks?:Array<any>
	/**
	 * List of platforms to generate. If you don't specify any platforms, all the platforms will be generated
	 */
	platforms?:Array<any>
	/**
	 * List of languages to generate. If you don't specify any languages, all the languages will be generated.
	 */
	languages?:Array<any>
	/**
	 * By default, if you don't specify any languages all languages will be generated. If you set this parameter to true, no localized SoundBank will be generated.
	 */
	skipLanguages?:boolean
	/**
	 * Will rebuild all SoundBanks if true. If you want to clear the converted media as well, use clearAudioFileCache parameter. Default value: false
	 */
	rebuildSoundBanks?:boolean
	/**
	 * Deletes the content of the Wwise audio file cache folder prior to converting source files and generating SoundBanks, which ensures that all source files are reconverted. Note that the whole cache is cleared, for all platforms, regardless of the platforms arguments. Default value: false
	 */
	clearAudioFileCache?:boolean
	/**
	 * Use the normal SoundBank generation process and write the sound bank and info file to disk. Default value: false
	 */
	writeToDisk?:boolean
	/**
	 * If you don't use rebuildSoundBanks, use this option to force a rebuild of the Init bank for each specified platform.
	 */
	rebuildInitBank?:boolean
}

/**
 * Generate a list of SoundBanks with the import definition specified in the WAAPI request. If you do not write the SoundBanks to disk, subscribe to ak.wwise.core.soundbank.generated to receive SoundBank structure info and the bank data as base64. Note: This is a synchronous operation.
 */
export function $ak_wwise_core_soundbank_generate(session:Session,args?:ak_wwise_core_soundbank_generate_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.soundbank.generate", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_soundbank_getInclusions_Args{
	/**
	 * The ID (GUID), name, or path of the SoundBank to add an inclusion to.
	 */
	soundbank:any
}

/**
 * Retrieves a SoundBank's inclusion list.
 */
export function $ak_wwise_core_soundbank_getInclusions(session:Session,args?:ak_wwise_core_soundbank_getInclusions_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.soundbank.getInclusions", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_soundbank_processDefinitionFiles_Args{
	/**
	 * An array of SoundBank definition files.
	 */
	files:Array<any>
}

/**
 * Imports SoundBank definitions from the specified file. Multiple files can be specified. See the WAAPI log for status messages.
 */
export function $ak_wwise_core_soundbank_processDefinitionFiles(session:Session,args?:ak_wwise_core_soundbank_processDefinitionFiles_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.soundbank.processDefinitionFiles", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_soundbank_setInclusions_Args{
	/**
	 * The ID (GUID), name, or path of the SoundBank to add an inclusion to.
	 */
	soundbank:any
	/**
	 * Determines how the 'inclusions' argument is used to modify the SoundBank's inclusion list; 'inclusions' may be used to add to / remove from / replace the SoundBank's inclusion list.
	 */
	operation:string
	/**
	 * An array of SoundBank inclusions.
	 */
	inclusions:Array<any>
}

/**
 * Modifies a SoundBank's inclusion list. The 'operation' argument determines how the 'inclusions' argument modifies the SoundBank's inclusion list; 'inclusions' may be added to / removed from / replace the SoundBank's inclusion list.
 */
export function $ak_wwise_core_soundbank_setInclusions(session:Session,args?:ak_wwise_core_soundbank_setInclusions_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.soundbank.setInclusions", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_switchContainer_addAssignment_Args{
	/**
	 * The ID (GUID), name, or path of the object to assign to a State. This object must be the child of a Switch Container.
	 */
	child:any
	/**
	 * The ID (GUID), name, or path of the State or Switch with which to assign. Must be the child of the Switch Group or State Group that is currently set for the Switch Container.
	 */
	stateOrSwitch:any
}

/**
 * Assigns a Switch Container's child to a Switch. This is the equivalent of doing a drag&drop of the child to a state in the Assigned Objects view. The child is always added at the end for each state.
 */
export function $ak_wwise_core_switchContainer_addAssignment(session:Session,args?:ak_wwise_core_switchContainer_addAssignment_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.switchContainer.addAssignment", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_switchContainer_getAssignments_Args{
	/**
	 * The ID (GUID), name, or path of the Switch Container.
	 */
	id:any
}

/**
 * Returns the list of assignments between a Switch Container's children and states.
 */
export function $ak_wwise_core_switchContainer_getAssignments(session:Session,args?:ak_wwise_core_switchContainer_getAssignments_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.switchContainer.getAssignments", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_switchContainer_removeAssignment_Args{
	/**
	 * The ID (GUID), name, or path of the object assigned to a State. This object must be the child of a Switch Container and must be currently assigned to a State.
	 */
	child:any
	/**
	 * The ID (GUID), name, or path of the State or Switch to which the child is assigned. Must be the child of the Switch Group or State Group that is currently set for the Switch Container.
	 */
	stateOrSwitch:any
}

/**
 * Removes an assignment between a Switch Container's child and a State.
 */
export function $ak_wwise_core_switchContainer_removeAssignment(session:Session,args?:ak_wwise_core_switchContainer_removeAssignment_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.switchContainer.removeAssignment", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_transport_create_Args{
	/**
	 * The ID (GUID), name, or path of the object to control via the transport object.
	 */
	object:any
	/**
	 * The game object to use for playback.\n A game object ID, unsigned integer 64-bit.
	 * Minimum: 0
	 * Maximum: 18446744073709552000
	 */
	gameObject?:number
}

/**
 * Creates a transport object for the given Wwise object. The return transport object can be used to play, stop, pause and resume the Wwise object via the other transport functions.
 */
export function $ak_wwise_core_transport_create(session:Session,args?:ak_wwise_core_transport_create_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.transport.create", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_transport_destroy_Args{
	/**
	 * The transport object ID to be used with all other ak.wwise.core.transport functions.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	transport:number
}

/**
 * Destroys the given transport object.
 */
export function $ak_wwise_core_transport_destroy(session:Session,args?:ak_wwise_core_transport_destroy_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.transport.destroy", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_transport_executeAction_Args{
	/**
	 * The transport object ID to be used with all other ak.wwise.core.transport functions.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	transport?:number
	/**
	 * The action to execute.
	 */
	action:string
}

/**
 * Executes an action on the given transport object, or all transport objects if none is specified.
 */
export function $ak_wwise_core_transport_executeAction(session:Session,args?:ak_wwise_core_transport_executeAction_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.transport.executeAction", args, options, onSuccess, onError, onComplete)
}

/**
 * Returns the list of transport objects.
 */
export function $ak_wwise_core_transport_getList(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.transport.getList", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_transport_getState_Args{
	/**
	 * The transport object ID to be used with all other ak.wwise.core.transport functions.\n Unsigned Integer 32-bit.
	 * Minimum: 0
	 * Maximum: 4294967295
	 */
	transport:number
}

/**
 * Gets the state of the given transport object.
 */
export function $ak_wwise_core_transport_getState(session:Session,args?:ak_wwise_core_transport_getState_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.transport.getState", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_transport_prepare_Args{
	/**
	 * The ID (GUID), name, or path of the object to control via the transport object.
	 */
	object:any
}

/**
 * Prepare the object and its dependencies for playback. Use this function before calling PostEventSync or PostMIDIOnEventSync from IAkGlobalPluginContext.
 */
export function $ak_wwise_core_transport_prepare(session:Session,args?:ak_wwise_core_transport_prepare_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.transport.prepare", args, options, onSuccess, onError, onComplete)
}

/**
 * Begins an undo group. Make sure to call ak.wwise.core.undo.endGroup exactly once for every ak.wwise.core.beginUndoGroup call you make. Calls to ak.wwise.core.undo.beginGroup can be nested. When closing a WAMP session, a check is made to ensure that all undo groups are closed. If not, a cancelGroup is called for each of the groups still open.
 */
export function $ak_wwise_core_undo_beginGroup(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.core.undo.beginGroup", null, null, onSuccess, onError, onComplete)
}

/**
 * Cancels the last undo group. Please note that this does not revert the operations made since the last ak.wwise.core.undo.beginGroup call.
 */
export function $ak_wwise_core_undo_cancelGroup(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.core.undo.cancelGroup", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_core_undo_endGroup_Args{
	/**
	 * The name that is displayed in the history for this undo group.
	 */
	displayName:string
}

/**
 * Ends the last undo group.
 */
export function $ak_wwise_core_undo_endGroup(session:Session,args?:ak_wwise_core_undo_endGroup_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.core.undo.endGroup", args, options, onSuccess, onError, onComplete)
}

/**
 * Undoes the last operation in the Undo stack.
 */
export function $ak_wwise_core_undo_undo(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.core.undo.undo", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_debug_enableAsserts_Args{
	/**
	 * Indicates whether assertions should be enabled or disabled.
	 */
	enable:boolean
}

/**
 * Enables debug assertions. Every call to enableAsserts with 'false' increments the ref count. Calling with true decrements the ref count. This is only available with Debug builds.
 */
export function $ak_wwise_debug_enableAsserts(session:Session,args?:ak_wwise_debug_enableAsserts_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.debug.enableAsserts", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_debug_enableAutomationMode_Args{
	/**
	 * When set to true, the automation mode reduces the blocking of dialogs and popups. When set to false, it reverts to the normal mode.
	 */
	enable:boolean
}

/**
 * Enables or disables the automation mode for Wwise. This reduces the potential interruptions caused by message boxes and dialogs. For instance, enabling the automation mode silently accepts: project migration, project load log, EULA acceptance, project licence display and generic message boxes.
 */
export function $ak_wwise_debug_enableAutomationMode(session:Session,args?:ak_wwise_debug_enableAutomationMode_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.debug.enableAutomationMode", args, options, onSuccess, onError, onComplete)
}

/**
 * Private use only.
 */
export function $ak_wwise_debug_testAssert(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.debug.testAssert", null, null, onSuccess, onError, onComplete)
}

/**
 * Private use only.
 */
export function $ak_wwise_debug_testCrash(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.debug.testCrash", null, null, onSuccess, onError, onComplete)
}

/**
 * Bring Wwise main window to foreground. Refer to SetForegroundWindow and AllowSetForegroundWindow on MSDN for more information on the restrictions. Refer to ak.wwise.core.getInfo to obtain the Wwise process ID for AllowSetForegroundWindow.
 */
export function $ak_wwise_ui_bringToForeground(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){
	CallWaapi(session, "ak.wwise.ui.bringToForeground", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_ui_captureScreen_Args{
	/**
	 * The name of the view as displayed in Wwise UI. By default, the whole UI is captured.
	 */
	viewName?:string
	/**
	 * The selection channel of the view. Can be a value of 1, 2, 3 or 4. By default, the current selection channel of the view is detected automatically.
	 */
	viewSelectionChannel?:number
	/**
	 * The capture region. By default, the whole view is captured.
	 */
	rect?:object
}

/**
 * Captures a part of the Wwise UI relative to a view.
 */
export function $ak_wwise_ui_captureScreen(session:Session,args?:ak_wwise_ui_captureScreen_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.captureScreen", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_ui_commands_execute_Args{
	/**
	 * The ID of the command to execute. Refer to \ref globalcommandsids for the lists of commands.
	 */
	command:string
	/**
	 * An array of objects. Each object is an ID (GUID), name, or path of the object. Some commands can take objects as arguments. Refer to the commands for more information.
	 */
	objects?:Array<any>
	/**
	 * An array of platform. Each platform is an ID (GUID) or a unique name. Some commands can take platforms as arguments. Refer to the commands for more information.
	 */
	platforms?:Array<any>
	/**
	 * A value to pass to the command. Some commands can take a value as an argument. Refer to the commands for more information.\n The value of a property.
	 */
	value?:any
}

/**
 * Executes a command. Some commands can take a list of objects as parameters. Refer to Wwise Authoring Command Identifiers for the available commands.
 */
export function $ak_wwise_ui_commands_execute(session:Session,args?:ak_wwise_ui_commands_execute_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.commands.execute", args, options, onSuccess, onError, onComplete)
}

/**
 * Gets the list of commands.
 */
export function $ak_wwise_ui_commands_getCommands(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.commands.getCommands", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_ui_commands_register_Args{
	/**
	 * Data for the commands to be registered.\n An array of command add-ons.
	 */
	commands:Array<any>
}

/**
 * Registers an array of add-on commands. Registered commands remain until the Wwise process is terminated. Refer to Defining Command Add-ons for more information about registering commands. Also refer to ak.wwise.ui.commands.executed.
 */
export function $ak_wwise_ui_commands_register(session:Session,args?:ak_wwise_ui_commands_register_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.commands.register", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_ui_commands_unregister_Args{
	/**
	 * An array of commands to unregister.
	 */
	commands:Array<any>
}

/**
 * Unregisters an array of add-on UI commands.
 */
export function $ak_wwise_ui_commands_unregister(session:Session,args?:ak_wwise_ui_commands_unregister_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.commands.unregister", args, options, onSuccess, onError, onComplete)
}

/**
 * Retrieves the list of objects currently selected by the user in the active view.
 */
export function $ak_wwise_ui_getSelectedObjects(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.getSelectedObjects", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_ui_project_close_Args{
	/**
	 * Indicates if the user should not be prompted to save the current project.
	 */
	bypassSave?:boolean
}

/**
 * Closes the current project.
 */
export function $ak_wwise_ui_project_close(session:Session,args?:ak_wwise_ui_project_close_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.project.close", args, options, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_ui_project_open_Args{
	/**
	 * The path to the project file. For using WAAPI on Mac, please refer to \ref waapi_path_on_mac .
	 */
	path:string
	/**
	 * The action to be executed when opening a project that needs to be upgraded.
	 */
	onUpgrade?:string
	/**
	 * Indicates if the user should not be prompted to save the current project.
	 */
	bypassSave?:boolean
}

/**
 * Opens a project, specified by path. Please refer to ak.wwise.core.project.loaded for further explanations on how to be notified when the operation has completed.
 */
export function $ak_wwise_ui_project_open(session:Session,args?:ak_wwise_ui_project_open_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.ui.project.open", args, options, onSuccess, onError, onComplete)
}

/**
 * Retrieves the list of functions.
 */
export function $ak_wwise_waapi_getFunctions(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.waapi.getFunctions", null, null, onSuccess, onError, onComplete)
}

export declare interface ak_wwise_waapi_getSchema_Args{
	/**
	 * Waapi URI (see ak.wwise.waapi.getTopics, ak.wwise.waapi.getFunctions).
	 */
	uri:string
}

/**
 * Retrieves the JSON schema of a Waapi URI.
 */
export function $ak_wwise_waapi_getSchema(session:Session,args?:ak_wwise_waapi_getSchema_Args,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.waapi.getSchema", args, options, onSuccess, onError, onComplete)
}

/**
 * Retrieves the list of topics to which a client can subscribe.
 */
export function $ak_wwise_waapi_getTopics(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){
	CallWaapi(session, "ak.wwise.waapi.getTopics", null, null, onSuccess, onError, onComplete)
}



const APIs = { 
    ak: {
        soundengine: {
            /** Executes an action on all nodes that are referenced in the specified event in a Play action. See AK::SoundEngine::ExecuteActionOnEvent.*/
            executeActionOnEvent: $ak_soundengine_executeActionOnEvent,
            /** Gets the current state of a State Group. When using setState just prior to getState, allow a brief delay (no more than 10ms) for the information to update in the sound engine.*/
            getState: $ak_soundengine_getState,
            /** Gets the current state of a Switch Group for a given Game Object.*/
            getSwitch: $ak_soundengine_getSwitch,
            /** Asynchronously post an Event to the sound engine (by event ID). See AK::SoundEngine::PostEvent.*/
            postEvent: $ak_soundengine_postEvent,
            /** Display a message in the Profiler's Capture Log view.*/
            postMsgMonitor: $ak_soundengine_postMsgMonitor,
            /** Posts the specified Trigger. See AK::SoundEngine::PostTrigger.*/
            postTrigger: $ak_soundengine_postTrigger,
            /** Register a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. See AK::SoundEngine::RegisterGameObj.*/
            registerGameObj: $ak_soundengine_registerGameObj,
            /** Resets the value of a real-time parameter control to its default value, as specified in the Wwise project. See AK::SoundEngine::ResetRTPCValue.*/
            resetRTPCValue: $ak_soundengine_resetRTPCValue,
            /** Seeks inside all playing objects that are referenced in Play Actions of the specified Event. See AK::SoundEngine::SeekOnEvent.*/
            seekOnEvent: $ak_soundengine_seekOnEvent,
            /** Sets the default active listeners for all subsequent game objects that are registered. See AK::SoundEngine::SetDefaultListeners.*/
            setDefaultListeners: $ak_soundengine_setDefaultListeners,
            /** Sets the Auxiliary Busses to route the specified game object. See AK::SoundEngine::SetGameObjectAuxSendValues.*/
            setGameObjectAuxSendValues: $ak_soundengine_setGameObjectAuxSendValues,
            /** Set the output bus volume (direct) to be used for the specified game object. See AK::SoundEngine::SetGameObjectOutputBusVolume.*/
            setGameObjectOutputBusVolume: $ak_soundengine_setGameObjectOutputBusVolume,
            /** Sets a single game object's active listeners. By default, all new game objects have no listeners active, but this behavior can be overridden with SetDefaultListeners(). Inactive listeners are not computed. See AK::SoundEngine::SetListeners.*/
            setListeners: $ak_soundengine_setListeners,
            /** Sets a listener's spatialization parameters. This lets you define listener-specific volume offsets for each audio channel. See AK::SoundEngine::SetListenerSpatialization.*/
            setListenerSpatialization: $ak_soundengine_setListenerSpatialization,
            /** Sets multiple positions for a single game object. Setting multiple positions for a single game object is a way to simulate multiple emission sources while using the resources of only one voice. This can be used to simulate wall openings, area sounds, or multiple objects emitting the same sound in the same area. See AK::SoundEngine::SetMultiplePositions.*/
            setMultiplePositions: $ak_soundengine_setMultiplePositions,
            /** Set a game object's obstruction and occlusion levels. This function is used to affect how an object should be heard by a specific listener. See AK::SoundEngine::SetObjectObstructionAndOcclusion.*/
            setObjectObstructionAndOcclusion: $ak_soundengine_setObjectObstructionAndOcclusion,
            /** Sets the position of a game object. See AK::SoundEngine::SetPosition.*/
            setPosition: $ak_soundengine_setPosition,
            /** Sets the value of a real-time parameter control. See AK::SoundEngine::SetRTPCValue.*/
            setRTPCValue: $ak_soundengine_setRTPCValue,
            /** Sets the scaling factor of a game object. You can modify the attenuation computations on this game object to simulate sounds with a larger or smaller affected areas. See AK::SoundEngine::SetScalingFactor.*/
            setScalingFactor: $ak_soundengine_setScalingFactor,
            /** Sets the State of a State Group. See AK::SoundEngine::SetState.*/
            setState: $ak_soundengine_setState,
            /** Sets the State of a Switch Group. See AK::SoundEngine::SetSwitch.*/
            setSwitch: $ak_soundengine_setSwitch,
            /** Stop playing the current content associated to the specified game object ID. If no game object is specified, all sounds are stopped. See AK::SoundEngine::StopAll.*/
            stopAll: $ak_soundengine_stopAll,
            /** Stops the current content, associated to the specified playing ID, from playing. See AK::SoundEngine::StopPlayingID.*/
            stopPlayingID: $ak_soundengine_stopPlayingID,
            /** Unregisters a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. Unregistering a game object while it is in use is allowed, but the control over the parameters of this game object is lost. For example, say a sound associated with this game object is a 3D moving sound. It stops moving when the game object is unregistered, and there is no way to regain control over the game object. See AK::SoundEngine::UnregisterGameObj.*/
            unregisterGameObj: $ak_soundengine_unregisterGameObj,
        },
        wwise: {
            core: {
                audio: {
                    /** Creates Wwise objects and imports audio files. This function uses the same importation processor available through the Tab Delimited import in the Audio File Importer. The function returns an array of all objects created, replaced or re-used. Use the options to specify how the objects are returned. For more information, refer to Importing Audio Files and Creating Structures.*/
                    import: $ak_wwise_core_audio_import,
                    /** Scripted object creation and audio file import from a tab-delimited file.*/
                    importTabDelimited: $ak_wwise_core_audio_importTabDelimited,
                },
                audioSourcePeaks: {
                    /** Gets the min/max peak pairs, in the given region of an audio source, as a collection of binary strings (one per channel). The strings are base-64 encoded, 16-bit signed int arrays, with min and max values being interleaved. If getCrossChannelPeaks is true, only one binary string represents the peaks across all channels globally.*/
                    getMinMaxPeaksInRegion: $ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion,
                    /** Gets the min/max peak pairs in the entire trimmed region of an audio source, for each channel, as an array of binary strings (one per channel). The strings are base-64 encoded, 16-bit signed int arrays, with min and max values being interleaved. If getCrossChannelPeaks is true, there is only one binary string representing peaks across all channels globally.*/
                    getMinMaxPeaksInTrimmedRegion: $ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion,
                },
                /** Retrieve global Wwise information.*/
                getInfo: $ak_wwise_core_getInfo,
                /** Retrieve information about the current project opened, including platforms, languages and project directories.*/
                getProjectInfo: $ak_wwise_core_getProjectInfo,
                log: {
                    /** Retrieves the latest log for a specific channel. Refer to ak.wwise.core.log.itemAdded to be notified when an item is added to the log. The log is empty when used in WwiseConsole.*/
                    get: $ak_wwise_core_log_get,
                },
                object: {
                    /** Copies an object to the given parent.*/
                    copy: $ak_wwise_core_object_copy,
                    /** Creates an object of type 'type', as a child of 'parent'. Refer to Importing Audio Files and Creating Structures for more information about creating objects. Also refer to ak.wwise.core.audio.import to import audio files to Wwise.*/
                    create: $ak_wwise_core_object_create,
                    /** Deletes the specified object.*/
                    delete: $ak_wwise_core_object_delete,
                    /** Compares properties and lists of the source object with those in the target object.*/
                    diff: $ak_wwise_core_object_diff,
                    /** Performs a query and returns the data, as specified in the options, for each object in the query result. The query can specify either a 'waql' argument or a 'from' argument with an optional 'transform' argument. Refer to Using the Wwise Authoring Query Language (WAQL) or Querying the Wwise Project for more information. Refer to Return Options to learn about options.*/
                    get: $ak_wwise_core_object_get,
                    /** Gets the specified attenuation curve for a given attenuation object.*/
                    getAttenuationCurve: $ak_wwise_core_object_getAttenuationCurve,
                    /** Retrieves the list of property and reference names for an object.*/
                    getPropertyAndReferenceNames: $ak_wwise_core_object_getPropertyAndReferenceNames,
                    /** Retrieves information about an object property. Note that this function does not return the value of a property. To retrieve the value of a property, refer to ak.wwise.core.object.get and Return Options.*/
                    getPropertyInfo: $ak_wwise_core_object_getPropertyInfo,
                    getPropertyNames: "This function is deprecated!!!  ak.wwise.core.object.getPropertyNames",
                    /** Returns true if a property is enabled based on the values of the properties it depends on.*/
                    isPropertyEnabled: $ak_wwise_core_object_isPropertyEnabled,
                    /** Moves an object to the given parent. Returns the moved object.*/
                    move: $ak_wwise_core_object_move,
                    /** Pastes properties, references and lists from one object to any number of target objects. Only those properties, references and lists which differ between source and target are pasted. Refer to Wwise Objects Reference for more information on the properties, references and lists available on each object type.*/
                    pasteProperties: $ak_wwise_core_object_pasteProperties,
                    /** Allows for batch processing of the following operations: Object creation in a child hierarchy, Object creation in a list, Setting name, notes, properties and references. Refer to Importing Audio Files and Creating Structures for more information about creating objects. Also refer to ak.wwise.core.audio.import to import audio files to Wwise.*/
                    set: $ak_wwise_core_object_set,
                    /** Sets the specified attenuation curve for a given attenuation object.*/
                    setAttenuationCurve: $ak_wwise_core_object_setAttenuationCurve,
                    /** Renames an object.*/
                    setName: $ak_wwise_core_object_setName,
                    /** Sets the object's notes.*/
                    setNotes: $ak_wwise_core_object_setNotes,
                    /** Sets a property value of an object for a specific platform. Refer to Wwise Objects Reference for more information on the properties available on each object type. Refer to ak.wwise.core.object.setReference to set a reference to an object. Refer to ak.wwise.core.object.get to obtain the value of a property for an object.*/
                    setProperty: $ak_wwise_core_object_setProperty,
                    /** Sets the randomizer values of a property of an object for a specific platform. Refer to Wwise Objects Reference for more information on the properties available on each object type.*/
                    setRandomizer: $ak_wwise_core_object_setRandomizer,
                    /** Sets an object's reference value. Refer to Wwise Objects Reference for more information on the references available on each object type.*/
                    setReference: $ak_wwise_core_object_setReference,
                },
                plugin: {
                    getList: "This function is deprecated!!!  ak.wwise.core.plugin.getList",
                },
                profiler: {
                    /** Retrieves the Audio Objects at a specific profiler capture time.*/
                    getAudioObjects: $ak_wwise_core_profiler_getAudioObjects,
                    /** Retrieves the busses at a specific profiler capture time.*/
                    getBusses: $ak_wwise_core_profiler_getBusses,
                    /** Returns the current time of the specified profiler cursor, in milliseconds.*/
                    getCursorTime: $ak_wwise_core_profiler_getCursorTime,
                    /** Retrieves the game objects at a specific profiler capture time.*/
                    getGameObjects: $ak_wwise_core_profiler_getGameObjects,
                    /** Retrieves active RTPCs at a specific profiler capture time.*/
                    getRTPCs: $ak_wwise_core_profiler_getRTPCs,
                    /** Retrieves all parameters affecting voice volume, highpass and lowpass for a voice path, resolved from pipeline IDs.*/
                    getVoiceContributions: $ak_wwise_core_profiler_getVoiceContributions,
                    /** Retrieves the voices at a specific profiler capture time.*/
                    getVoices: $ak_wwise_core_profiler_getVoices,
                    /** Starts the profiler capture and returns the time at the beginning of the capture, in milliseconds.*/
                    startCapture: $ak_wwise_core_profiler_startCapture,
                    /** Stops the profiler capture and returns the time at the end of the capture, in milliseconds.*/
                    stopCapture: $ak_wwise_core_profiler_stopCapture,
                },
                project: {
                    /** Saves the current project.*/
                    save: $ak_wwise_core_project_save,
                },
                remote: {
                    /** Connects the Wwise Authoring application to a Wwise Sound Engine running executable. The host must be running code with communication enabled. If only "host" is provided, Wwise connects to the first Sound Engine instance found. To distinguish between different instances, you can also provide the name of the application to connect to.*/
                    connect: $ak_wwise_core_remote_connect,
                    /** Disconnects the Wwise Authoring application from a connected Wwise Sound Engine running executable.*/
                    disconnect: $ak_wwise_core_remote_disconnect,
                    /** Retrieves all consoles available for connecting Wwise Authoring to a Sound Engine instance.*/
                    getAvailableConsoles: $ak_wwise_core_remote_getAvailableConsoles,
                    /** Retrieves the connection status.*/
                    getConnectionStatus: $ak_wwise_core_remote_getConnectionStatus,
                },
                sound: {
                    /** Sets which version of the source is being used for the specified sound. Use ak.wwise.core.object.get with the 'activeSource' return option to get the active source of a sound.*/
                    setActiveSource: $ak_wwise_core_sound_setActiveSource,
                },
                soundbank: {
                    /** Converts the external sources files for the project as detailed in the wsources file, and places them into either the default folder, or the folder specified by the output argument. External Sources are a special type of source that you can put in a Sound object in Wwise. It indicates that the real sound data will be provided at run time. While External Source conversion is also triggered by SoundBank generation, this operation can be used to process sources not contained in the Wwise Project. Please refer to Wwise SDK help page "Integrating External Sources".*/
                    convertExternalSources: $ak_wwise_core_soundbank_convertExternalSources,
                    /** Generate a list of SoundBanks with the import definition specified in the WAAPI request. If you do not write the SoundBanks to disk, subscribe to ak.wwise.core.soundbank.generated to receive SoundBank structure info and the bank data as base64. Note: This is a synchronous operation.*/
                    generate: $ak_wwise_core_soundbank_generate,
                    /** Retrieves a SoundBank's inclusion list.*/
                    getInclusions: $ak_wwise_core_soundbank_getInclusions,
                    /** Imports SoundBank definitions from the specified file. Multiple files can be specified. See the WAAPI log for status messages.*/
                    processDefinitionFiles: $ak_wwise_core_soundbank_processDefinitionFiles,
                    /** Modifies a SoundBank's inclusion list. The 'operation' argument determines how the 'inclusions' argument modifies the SoundBank's inclusion list; 'inclusions' may be added to / removed from / replace the SoundBank's inclusion list.*/
                    setInclusions: $ak_wwise_core_soundbank_setInclusions,
                },
                switchContainer: {
                    /** Assigns a Switch Container's child to a Switch. This is the equivalent of doing a drag&drop of the child to a state in the Assigned Objects view. The child is always added at the end for each state.*/
                    addAssignment: $ak_wwise_core_switchContainer_addAssignment,
                    /** Returns the list of assignments between a Switch Container's children and states.*/
                    getAssignments: $ak_wwise_core_switchContainer_getAssignments,
                    /** Removes an assignment between a Switch Container's child and a State.*/
                    removeAssignment: $ak_wwise_core_switchContainer_removeAssignment,
                },
                transport: {
                    /** Creates a transport object for the given Wwise object. The return transport object can be used to play, stop, pause and resume the Wwise object via the other transport functions.*/
                    create: $ak_wwise_core_transport_create,
                    /** Destroys the given transport object.*/
                    destroy: $ak_wwise_core_transport_destroy,
                    /** Executes an action on the given transport object, or all transport objects if none is specified.*/
                    executeAction: $ak_wwise_core_transport_executeAction,
                    /** Returns the list of transport objects.*/
                    getList: $ak_wwise_core_transport_getList,
                    /** Gets the state of the given transport object.*/
                    getState: $ak_wwise_core_transport_getState,
                    /** Prepare the object and its dependencies for playback. Use this function before calling PostEventSync or PostMIDIOnEventSync from IAkGlobalPluginContext.*/
                    prepare: $ak_wwise_core_transport_prepare,
                },
                undo: {
                    /** Begins an undo group. Make sure to call ak.wwise.core.undo.endGroup exactly once for every ak.wwise.core.beginUndoGroup call you make. Calls to ak.wwise.core.undo.beginGroup can be nested. When closing a WAMP session, a check is made to ensure that all undo groups are closed. If not, a cancelGroup is called for each of the groups still open.*/
                    beginGroup: $ak_wwise_core_undo_beginGroup,
                    /** Cancels the last undo group. Please note that this does not revert the operations made since the last ak.wwise.core.undo.beginGroup call.*/
                    cancelGroup: $ak_wwise_core_undo_cancelGroup,
                    /** Ends the last undo group.*/
                    endGroup: $ak_wwise_core_undo_endGroup,
                    /** Undoes the last operation in the Undo stack.*/
                    undo: $ak_wwise_core_undo_undo,
                },
            },
            debug: {
                /** Enables debug assertions. Every call to enableAsserts with 'false' increments the ref count. Calling with true decrements the ref count. This is only available with Debug builds.*/
                enableAsserts: $ak_wwise_debug_enableAsserts,
                /** Enables or disables the automation mode for Wwise. This reduces the potential interruptions caused by message boxes and dialogs. For instance, enabling the automation mode silently accepts: project migration, project load log, EULA acceptance, project licence display and generic message boxes.*/
                enableAutomationMode: $ak_wwise_debug_enableAutomationMode,
                /** Private use only.*/
                testAssert: $ak_wwise_debug_testAssert,
                /** Private use only.*/
                testCrash: $ak_wwise_debug_testCrash,
            },
            ui: {
                /** Bring Wwise main window to foreground. Refer to SetForegroundWindow and AllowSetForegroundWindow on MSDN for more information on the restrictions. Refer to ak.wwise.core.getInfo to obtain the Wwise process ID for AllowSetForegroundWindow.*/
                bringToForeground: $ak_wwise_ui_bringToForeground,
                /** Captures a part of the Wwise UI relative to a view.*/
                captureScreen: $ak_wwise_ui_captureScreen,
                commands: {
                    /** Executes a command. Some commands can take a list of objects as parameters. Refer to Wwise Authoring Command Identifiers for the available commands.*/
                    execute: $ak_wwise_ui_commands_execute,
                    /** Gets the list of commands.*/
                    getCommands: $ak_wwise_ui_commands_getCommands,
                    /** Registers an array of add-on commands. Registered commands remain until the Wwise process is terminated. Refer to Defining Command Add-ons for more information about registering commands. Also refer to ak.wwise.ui.commands.executed.*/
                    register: $ak_wwise_ui_commands_register,
                    /** Unregisters an array of add-on UI commands.*/
                    unregister: $ak_wwise_ui_commands_unregister,
                },
                /** Retrieves the list of objects currently selected by the user in the active view.*/
                getSelectedObjects: $ak_wwise_ui_getSelectedObjects,
                project: {
                    /** Closes the current project.*/
                    close: $ak_wwise_ui_project_close,
                    /** Opens a project, specified by path. Please refer to ak.wwise.core.project.loaded for further explanations on how to be notified when the operation has completed.*/
                    open: $ak_wwise_ui_project_open,
                },
            },
            waapi: {
                /** Retrieves the list of functions.*/
                getFunctions: $ak_wwise_waapi_getFunctions,
                /** Retrieves the JSON schema of a Waapi URI.*/
                getSchema: $ak_wwise_waapi_getSchema,
                /** Retrieves the list of topics to which a client can subscribe. */
                getTopics: $ak_wwise_waapi_getTopics,
            },
        },
    },

}

export { APIs }