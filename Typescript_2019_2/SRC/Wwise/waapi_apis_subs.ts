import { Session, Result, Error } from "autobahn"
import { SimpleSubOptions, Sub } from "./Utils"

/**
 * ak.wwise.core.audio.imported 
Sent at the end of an import operation.
 */
export function T_ak_wwise_core_audio_imported(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.audio.imported', options as any, action, onError);
}

/**
 * ak.wwise.core.log.itemAdded 
Sent when an item is added to the log. This could be used to retrieve items added to the SoundBank generation log. To retrieve the complete log, refer to ak.wwise.core.log.get.
 */
export function T_ak_wwise_core_log_itemAdded(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.log.itemAdded', options as any, action, onError);
}

/**
 * ak.wwise.core.object.attenuationCurveChanged 
Sent when an attenuation curve is changed.
 */
export function T_ak_wwise_core_object_attenuationCurveChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.attenuationCurveChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.object.attenuationCurveLinkChanged 
Sent when an attenuation curve's link/unlink is changed.
 */
export function T_ak_wwise_core_object_attenuationCurveLinkChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.attenuationCurveLinkChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.object.childAdded 
Sent when an object is added as a child to another object.
 */
export function T_ak_wwise_core_object_childAdded(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.childAdded', options as any, action, onError);
}

/**
 * ak.wwise.core.object.childRemoved 
Sent when an object is removed from the children of another object.
 */
export function T_ak_wwise_core_object_childRemoved(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.childRemoved', options as any, action, onError);
}

/**
 * ak.wwise.core.object.created 
Sent when an object is created.
 */
export function T_ak_wwise_core_object_created(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.created', options as any, action, onError);
}

/**
 * ak.wwise.core.object.curveChanged 
Sent when one or many curves are changed.
 */
export function T_ak_wwise_core_object_curveChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.curveChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.object.nameChanged 
Sent when an object is renamed. Publishes the renamed object.
 */
export function T_ak_wwise_core_object_nameChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.nameChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.object.notesChanged 
Sent when the object's notes are changed.
 */
export function T_ak_wwise_core_object_notesChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.notesChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.object.postDeleted 
Sent following an object's deletion.
 */
export function T_ak_wwise_core_object_postDeleted(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.postDeleted', options as any, action, onError);
}

/**
 * ak.wwise.core.object.preDeleted 
Sent prior to an object's deletion.
 */
export function T_ak_wwise_core_object_preDeleted(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.preDeleted', options as any, action, onError);
}

/**
 * ak.wwise.core.object.propertyChanged 
Sent when the watched property of an object changes.
 */
export function T_ak_wwise_core_object_propertyChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.propertyChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.object.referenceChanged 
Sent when an object reference is changed.
 */
export function T_ak_wwise_core_object_referenceChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.object.referenceChanged', options as any, action, onError);
}

/**
 * ak.wwise.core.profiler.captureLog.itemAdded 
Sent when a new entry is added to the capture log. Note that all entries are being sent. No filtering is applied as opposed to the Capture Log view.
 */
export function T_ak_wwise_core_profiler_captureLog_itemAdded(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.profiler.captureLog.itemAdded', options as any, action, onError);
}

/**
 * ak.wwise.core.project.loaded 
Sent when the project has been successfully loaded.
 */
export function T_ak_wwise_core_project_loaded(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.project.loaded', options as any, action, onError);
}

/**
 * ak.wwise.core.project.postClosed 
Sent when the after the project is completely closed.
 */
export function T_ak_wwise_core_project_postClosed(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.project.postClosed', options as any, action, onError);
}

/**
 * ak.wwise.core.project.preClosed 
Sent when the project begins closing.
 */
export function T_ak_wwise_core_project_preClosed(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.project.preClosed', options as any, action, onError);
}

/**
 * ak.wwise.core.project.saved 
Sent when the project has been saved.
 */
export function T_ak_wwise_core_project_saved(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.project.saved', options as any, action, onError);
}

/**
 * ak.wwise.core.soundbank.generated 
Sent when a single SoundBank is generated. This could be sent multiple times during SoundBank generation, for every SoundBank generated and for every platform. To generate SoundBanks, refer to ak.wwise.core.soundbank.generate or ak.wwise.ui.commands.execute with one of the SoundBank generation commands. Refer to Wwise Authoring Command Identifiers for the list of commands.
 */
export function T_ak_wwise_core_soundbank_generated(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.soundbank.generated', options as any, action, onError);
}

/**
 * ak.wwise.core.soundbank.generationDone 
Sent when all soundbanks are generated.
 */
export function T_ak_wwise_core_soundbank_generationDone(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.soundbank.generationDone', options as any, action, onError);
}

/**
 * ak.wwise.core.switchContainer.assignmentAdded 
Sent when an assignment is added to a Switch Container.
 */
export function T_ak_wwise_core_switchContainer_assignmentAdded(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.switchContainer.assignmentAdded', options as any, action, onError);
}

/**
 * ak.wwise.core.switchContainer.assignmentRemoved 
Sent when an assignment is removed from a Switch Container.
 */
export function T_ak_wwise_core_switchContainer_assignmentRemoved(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.switchContainer.assignmentRemoved', options as any, action, onError);
}

/**
 * ak.wwise.core.transport.stateChanged 
Sent when the transport's state has changed.
 */
export function T_ak_wwise_core_transport_stateChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.core.transport.stateChanged', options as any, action, onError);
}

/**
 * ak.wwise.debug.assertFailed 
Sent when an assert has failed. This is only available in Debug builds.
 */
export function T_ak_wwise_debug_assertFailed(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.debug.assertFailed', options as any, action, onError);
}

/**
 * ak.wwise.ui.commands.executed 
Sent when a command is executed. The objects for which the command is executed are sent in the publication.
 */
export function T_ak_wwise_ui_commands_executed(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.ui.commands.executed', options as any, action, onError);
}

/**
 * ak.wwise.ui.selectionChanged 
Sent when the selection changes in the project. 
 */
export function T_ak_wwise_ui_selectionChanged(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){
	Sub(session, 'ak.wwise.ui.selectionChanged', options as any, action, onError);
}

