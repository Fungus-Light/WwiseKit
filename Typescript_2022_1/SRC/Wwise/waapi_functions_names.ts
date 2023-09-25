const waapi_functions_names = { 
    ak: {
        soundengine: {
            /** Executes an action on all nodes that are referenced in the specified event in a Play action. See AK::SoundEngine::ExecuteActionOnEvent.*/
            executeActionOnEvent: "ak.soundengine.executeActionOnEvent",
            /** Gets the current state of a State Group. When using setState just prior to getState, allow a brief delay (no more than 10ms) for the information to update in the sound engine.*/
            getState: "ak.soundengine.getState",
            /** Gets the current state of a Switch Group for a given Game Object.*/
            getSwitch: "ak.soundengine.getSwitch",
            /** Asynchronously post an Event to the sound engine (by event ID). See AK::SoundEngine::PostEvent.*/
            postEvent: "ak.soundengine.postEvent",
            /** Display a message in the Profiler's Capture Log view.*/
            postMsgMonitor: "ak.soundengine.postMsgMonitor",
            /** Posts the specified Trigger. See AK::SoundEngine::PostTrigger.*/
            postTrigger: "ak.soundengine.postTrigger",
            /** Register a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. See AK::SoundEngine::RegisterGameObj.*/
            registerGameObj: "ak.soundengine.registerGameObj",
            /** Resets the value of a real-time parameter control to its default value, as specified in the Wwise project. See AK::SoundEngine::ResetRTPCValue.*/
            resetRTPCValue: "ak.soundengine.resetRTPCValue",
            /** Seeks inside all playing objects that are referenced in Play Actions of the specified Event. See AK::SoundEngine::SeekOnEvent.*/
            seekOnEvent: "ak.soundengine.seekOnEvent",
            /** Sets the default active listeners for all subsequent game objects that are registered. See AK::SoundEngine::SetDefaultListeners.*/
            setDefaultListeners: "ak.soundengine.setDefaultListeners",
            /** Sets the Auxiliary Busses to route the specified game object. See AK::SoundEngine::SetGameObjectAuxSendValues.*/
            setGameObjectAuxSendValues: "ak.soundengine.setGameObjectAuxSendValues",
            /** Set the output bus volume (direct) to be used for the specified game object. See AK::SoundEngine::SetGameObjectOutputBusVolume.*/
            setGameObjectOutputBusVolume: "ak.soundengine.setGameObjectOutputBusVolume",
            /** Sets a single game object's active listeners. By default, all new game objects have no listeners active, but this behavior can be overridden with SetDefaultListeners(). Inactive listeners are not computed. See AK::SoundEngine::SetListeners.*/
            setListeners: "ak.soundengine.setListeners",
            /** Sets a listener's spatialization parameters. This lets you define listener-specific volume offsets for each audio channel. See AK::SoundEngine::SetListenerSpatialization.*/
            setListenerSpatialization: "ak.soundengine.setListenerSpatialization",
            /** Sets multiple positions for a single game object. Setting multiple positions for a single game object is a way to simulate multiple emission sources while using the resources of only one voice. This can be used to simulate wall openings, area sounds, or multiple objects emitting the same sound in the same area. See AK::SoundEngine::SetMultiplePositions.*/
            setMultiplePositions: "ak.soundengine.setMultiplePositions",
            /** Set a game object's obstruction and occlusion levels. This function is used to affect how an object should be heard by a specific listener. See AK::SoundEngine::SetObjectObstructionAndOcclusion.*/
            setObjectObstructionAndOcclusion: "ak.soundengine.setObjectObstructionAndOcclusion",
            /** Sets the position of a game object. See AK::SoundEngine::SetPosition.*/
            setPosition: "ak.soundengine.setPosition",
            /** Sets the value of a real-time parameter control. See AK::SoundEngine::SetRTPCValue.*/
            setRTPCValue: "ak.soundengine.setRTPCValue",
            /** Sets the scaling factor of a game object. You can modify the attenuation computations on this game object to simulate sounds with a larger or smaller affected areas. See AK::SoundEngine::SetScalingFactor.*/
            setScalingFactor: "ak.soundengine.setScalingFactor",
            /** Sets the State of a State Group. See AK::SoundEngine::SetState.*/
            setState: "ak.soundengine.setState",
            /** Sets the State of a Switch Group. See AK::SoundEngine::SetSwitch.*/
            setSwitch: "ak.soundengine.setSwitch",
            /** Stop playing the current content associated to the specified game object ID. If no game object is specified, all sounds are stopped. See AK::SoundEngine::StopAll.*/
            stopAll: "ak.soundengine.stopAll",
            /** Stops the current content, associated to the specified playing ID, from playing. See AK::SoundEngine::StopPlayingID.*/
            stopPlayingID: "ak.soundengine.stopPlayingID",
            /** Unregisters a game object. Registering a game object twice does nothing. Unregistering it once unregisters it no matter how many times it has been registered. Unregistering a game object while it is in use is allowed, but the control over the parameters of this game object is lost. For example, say a sound associated with this game object is a 3D moving sound. It stops moving when the game object is unregistered, and there is no way to regain control over the game object. See AK::SoundEngine::UnregisterGameObj.*/
            unregisterGameObj: "ak.soundengine.unregisterGameObj",
        },
        wwise: {
            core: {
                audio: {
                    /** Creates Wwise objects and imports audio files. This function uses the same importation processor available through the Tab Delimited import in the Audio File Importer. The function returns an array of all objects created, replaced or re-used. Use the options to specify how the objects are returned. For more information, refer to Importing Audio Files and Creating Structures.*/
                    import: "ak.wwise.core.audio.import",
                    /** Scripted object creation and audio file import from a tab-delimited file.*/
                    importTabDelimited: "ak.wwise.core.audio.importTabDelimited",
                },
                audioSourcePeaks: {
                    /** Gets the min/max peak pairs, in the given region of an audio source, as a collection of binary strings (one per channel). The strings are base-64 encoded, 16-bit signed int arrays, with min and max values being interleaved. If getCrossChannelPeaks is true, only one binary string represents the peaks across all channels globally.*/
                    getMinMaxPeaksInRegion: "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion",
                    /** Gets the min/max peak pairs in the entire trimmed region of an audio source, for each channel, as an array of binary strings (one per channel). The strings are base-64 encoded, 16-bit signed int arrays, with min and max values being interleaved. If getCrossChannelPeaks is true, there is only one binary string representing peaks across all channels globally.*/
                    getMinMaxPeaksInTrimmedRegion: "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion",
                },
                /** Retrieve global Wwise information.*/
                getInfo: "ak.wwise.core.getInfo",
                /** Retrieve information about the current project opened, including platforms, languages and project directories.*/
                getProjectInfo: "ak.wwise.core.getProjectInfo",
                log: {
                    /** Retrieves the latest log for a specific channel. Refer to ak.wwise.core.log.itemAdded to be notified when an item is added to the log. The log is empty when used in WwiseConsole.*/
                    get: "ak.wwise.core.log.get",
                },
                object: {
                    /** Copies an object to the given parent.*/
                    copy: "ak.wwise.core.object.copy",
                    /** Creates an object of type 'type', as a child of 'parent'. Refer to Importing Audio Files and Creating Structures for more information about creating objects. Also refer to ak.wwise.core.audio.import to import audio files to Wwise.*/
                    create: "ak.wwise.core.object.create",
                    /** Deletes the specified object.*/
                    delete: "ak.wwise.core.object.delete",
                    /** Compares properties and lists of the source object with those in the target object.*/
                    diff: "ak.wwise.core.object.diff",
                    /** Performs a query and returns the data, as specified in the options, for each object in the query result. The query can specify either a 'waql' argument or a 'from' argument with an optional 'transform' argument. Refer to Using the Wwise Authoring Query Language (WAQL) or Querying the Wwise Project for more information. Refer to Return Options to learn about options.*/
                    get: "ak.wwise.core.object.get",
                    /** Gets the specified attenuation curve for a given attenuation object.*/
                    getAttenuationCurve: "ak.wwise.core.object.getAttenuationCurve",
                    /** Retrieves the list of property and reference names for an object.*/
                    getPropertyAndReferenceNames: "ak.wwise.core.object.getPropertyAndReferenceNames",
                    /** Retrieves information about an object property. Note that this function does not return the value of a property. To retrieve the value of a property, refer to ak.wwise.core.object.get and Return Options.*/
                    getPropertyInfo: "ak.wwise.core.object.getPropertyInfo",
                    getPropertyNames: "This function is deprecated!!!  ak.wwise.core.object.getPropertyNames",
                    /** Returns true if a property is enabled based on the values of the properties it depends on.*/
                    isPropertyEnabled: "ak.wwise.core.object.isPropertyEnabled",
                    /** Moves an object to the given parent. Returns the moved object.*/
                    move: "ak.wwise.core.object.move",
                    /** Pastes properties, references and lists from one object to any number of target objects. Only those properties, references and lists which differ between source and target are pasted. Refer to Wwise Objects Reference for more information on the properties, references and lists available on each object type.*/
                    pasteProperties: "ak.wwise.core.object.pasteProperties",
                    /** Allows for batch processing of the following operations: Object creation in a child hierarchy, Object creation in a list, Setting name, notes, properties and references. Refer to Importing Audio Files and Creating Structures for more information about creating objects. Also refer to ak.wwise.core.audio.import to import audio files to Wwise.*/
                    set: "ak.wwise.core.object.set",
                    /** Sets the specified attenuation curve for a given attenuation object.*/
                    setAttenuationCurve: "ak.wwise.core.object.setAttenuationCurve",
                    /** Renames an object.*/
                    setName: "ak.wwise.core.object.setName",
                    /** Sets the object's notes.*/
                    setNotes: "ak.wwise.core.object.setNotes",
                    /** Sets a property value of an object for a specific platform. Refer to Wwise Objects Reference for more information on the properties available on each object type. Refer to ak.wwise.core.object.setReference to set a reference to an object. Refer to ak.wwise.core.object.get to obtain the value of a property for an object.*/
                    setProperty: "ak.wwise.core.object.setProperty",
                    /** Sets the randomizer values of a property of an object for a specific platform. Refer to Wwise Objects Reference for more information on the properties available on each object type.*/
                    setRandomizer: "ak.wwise.core.object.setRandomizer",
                    /** Sets an object's reference value. Refer to Wwise Objects Reference for more information on the references available on each object type.*/
                    setReference: "ak.wwise.core.object.setReference",
                },
                plugin: {
                    getList: "This function is deprecated!!!  ak.wwise.core.plugin.getList",
                },
                profiler: {
                    /** Retrieves the Audio Objects at a specific profiler capture time.*/
                    getAudioObjects: "ak.wwise.core.profiler.getAudioObjects",
                    /** Retrieves the busses at a specific profiler capture time.*/
                    getBusses: "ak.wwise.core.profiler.getBusses",
                    /** Returns the current time of the specified profiler cursor, in milliseconds.*/
                    getCursorTime: "ak.wwise.core.profiler.getCursorTime",
                    /** Retrieves the game objects at a specific profiler capture time.*/
                    getGameObjects: "ak.wwise.core.profiler.getGameObjects",
                    /** Retrieves active RTPCs at a specific profiler capture time.*/
                    getRTPCs: "ak.wwise.core.profiler.getRTPCs",
                    /** Retrieves all parameters affecting voice volume, highpass and lowpass for a voice path, resolved from pipeline IDs.*/
                    getVoiceContributions: "ak.wwise.core.profiler.getVoiceContributions",
                    /** Retrieves the voices at a specific profiler capture time.*/
                    getVoices: "ak.wwise.core.profiler.getVoices",
                    /** Starts the profiler capture and returns the time at the beginning of the capture, in milliseconds.*/
                    startCapture: "ak.wwise.core.profiler.startCapture",
                    /** Stops the profiler capture and returns the time at the end of the capture, in milliseconds.*/
                    stopCapture: "ak.wwise.core.profiler.stopCapture",
                },
                project: {
                    /** Saves the current project.*/
                    save: "ak.wwise.core.project.save",
                },
                remote: {
                    /** Connects the Wwise Authoring application to a Wwise Sound Engine running executable. The host must be running code with communication enabled. If only "host" is provided, Wwise connects to the first Sound Engine instance found. To distinguish between different instances, you can also provide the name of the application to connect to.*/
                    connect: "ak.wwise.core.remote.connect",
                    /** Disconnects the Wwise Authoring application from a connected Wwise Sound Engine running executable.*/
                    disconnect: "ak.wwise.core.remote.disconnect",
                    /** Retrieves all consoles available for connecting Wwise Authoring to a Sound Engine instance.*/
                    getAvailableConsoles: "ak.wwise.core.remote.getAvailableConsoles",
                    /** Retrieves the connection status.*/
                    getConnectionStatus: "ak.wwise.core.remote.getConnectionStatus",
                },
                sound: {
                    /** Sets which version of the source is being used for the specified sound. Use ak.wwise.core.object.get with the 'activeSource' return option to get the active source of a sound.*/
                    setActiveSource: "ak.wwise.core.sound.setActiveSource",
                },
                soundbank: {
                    /** Converts the external sources files for the project as detailed in the wsources file, and places them into either the default folder, or the folder specified by the output argument. External Sources are a special type of source that you can put in a Sound object in Wwise. It indicates that the real sound data will be provided at run time. While External Source conversion is also triggered by SoundBank generation, this operation can be used to process sources not contained in the Wwise Project. Please refer to Wwise SDK help page "Integrating External Sources".*/
                    convertExternalSources: "ak.wwise.core.soundbank.convertExternalSources",
                    /** Generate a list of SoundBanks with the import definition specified in the WAAPI request. If you do not write the SoundBanks to disk, subscribe to ak.wwise.core.soundbank.generated to receive SoundBank structure info and the bank data as base64. Note: This is a synchronous operation.*/
                    generate: "ak.wwise.core.soundbank.generate",
                    /** Retrieves a SoundBank's inclusion list.*/
                    getInclusions: "ak.wwise.core.soundbank.getInclusions",
                    /** Imports SoundBank definitions from the specified file. Multiple files can be specified. See the WAAPI log for status messages.*/
                    processDefinitionFiles: "ak.wwise.core.soundbank.processDefinitionFiles",
                    /** Modifies a SoundBank's inclusion list. The 'operation' argument determines how the 'inclusions' argument modifies the SoundBank's inclusion list; 'inclusions' may be added to / removed from / replace the SoundBank's inclusion list.*/
                    setInclusions: "ak.wwise.core.soundbank.setInclusions",
                },
                switchContainer: {
                    /** Assigns a Switch Container's child to a Switch. This is the equivalent of doing a drag&drop of the child to a state in the Assigned Objects view. The child is always added at the end for each state.*/
                    addAssignment: "ak.wwise.core.switchContainer.addAssignment",
                    /** Returns the list of assignments between a Switch Container's children and states.*/
                    getAssignments: "ak.wwise.core.switchContainer.getAssignments",
                    /** Removes an assignment between a Switch Container's child and a State.*/
                    removeAssignment: "ak.wwise.core.switchContainer.removeAssignment",
                },
                transport: {
                    /** Creates a transport object for the given Wwise object. The return transport object can be used to play, stop, pause and resume the Wwise object via the other transport functions.*/
                    create: "ak.wwise.core.transport.create",
                    /** Destroys the given transport object.*/
                    destroy: "ak.wwise.core.transport.destroy",
                    /** Executes an action on the given transport object, or all transport objects if none is specified.*/
                    executeAction: "ak.wwise.core.transport.executeAction",
                    /** Returns the list of transport objects.*/
                    getList: "ak.wwise.core.transport.getList",
                    /** Gets the state of the given transport object.*/
                    getState: "ak.wwise.core.transport.getState",
                    /** Prepare the object and its dependencies for playback. Use this function before calling PostEventSync or PostMIDIOnEventSync from IAkGlobalPluginContext.*/
                    prepare: "ak.wwise.core.transport.prepare",
                },
                undo: {
                    /** Begins an undo group. Make sure to call ak.wwise.core.undo.endGroup exactly once for every ak.wwise.core.beginUndoGroup call you make. Calls to ak.wwise.core.undo.beginGroup can be nested. When closing a WAMP session, a check is made to ensure that all undo groups are closed. If not, a cancelGroup is called for each of the groups still open.*/
                    beginGroup: "ak.wwise.core.undo.beginGroup",
                    /** Cancels the last undo group. Please note that this does not revert the operations made since the last ak.wwise.core.undo.beginGroup call.*/
                    cancelGroup: "ak.wwise.core.undo.cancelGroup",
                    /** Ends the last undo group.*/
                    endGroup: "ak.wwise.core.undo.endGroup",
                    /** Undoes the last operation in the Undo stack.*/
                    undo: "ak.wwise.core.undo.undo",
                },
            },
            debug: {
                /** Enables debug assertions. Every call to enableAsserts with 'false' increments the ref count. Calling with true decrements the ref count. This is only available with Debug builds.*/
                enableAsserts: "ak.wwise.debug.enableAsserts",
                /** Enables or disables the automation mode for Wwise. This reduces the potential interruptions caused by message boxes and dialogs. For instance, enabling the automation mode silently accepts: project migration, project load log, EULA acceptance, project licence display and generic message boxes.*/
                enableAutomationMode: "ak.wwise.debug.enableAutomationMode",
                /** Private use only.*/
                testAssert: "ak.wwise.debug.testAssert",
                /** Private use only.*/
                testCrash: "ak.wwise.debug.testCrash",
            },
            ui: {
                /** Bring Wwise main window to foreground. Refer to SetForegroundWindow and AllowSetForegroundWindow on MSDN for more information on the restrictions. Refer to ak.wwise.core.getInfo to obtain the Wwise process ID for AllowSetForegroundWindow.*/
                bringToForeground: "ak.wwise.ui.bringToForeground",
                /** Captures a part of the Wwise UI relative to a view.*/
                captureScreen: "ak.wwise.ui.captureScreen",
                commands: {
                    /** Executes a command. Some commands can take a list of objects as parameters. Refer to Wwise Authoring Command Identifiers for the available commands.*/
                    execute: "ak.wwise.ui.commands.execute",
                    /** Gets the list of commands.*/
                    getCommands: "ak.wwise.ui.commands.getCommands",
                    /** Registers an array of add-on commands. Registered commands remain until the Wwise process is terminated. Refer to Defining Command Add-ons for more information about registering commands. Also refer to ak.wwise.ui.commands.executed.*/
                    register: "ak.wwise.ui.commands.register",
                    /** Unregisters an array of add-on UI commands.*/
                    unregister: "ak.wwise.ui.commands.unregister",
                },
                /** Retrieves the list of objects currently selected by the user in the active view.*/
                getSelectedObjects: "ak.wwise.ui.getSelectedObjects",
                project: {
                    /** Closes the current project.*/
                    close: "ak.wwise.ui.project.close",
                    /** Opens a project, specified by path. Please refer to ak.wwise.core.project.loaded for further explanations on how to be notified when the operation has completed.*/
                    open: "ak.wwise.ui.project.open",
                },
            },
            waapi: {
                /** Retrieves the list of functions.*/
                getFunctions: "ak.wwise.waapi.getFunctions",
                /** Retrieves the JSON schema of a Waapi URI.*/
                getSchema: "ak.wwise.waapi.getSchema",
                /** Retrieves the list of topics to which a client can subscribe. */
                getTopics: "ak.wwise.waapi.getTopics",
            },
        },
    },

}

export { waapi_functions_names }