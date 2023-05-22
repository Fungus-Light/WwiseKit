const waapi_topics_names = { 
    ak: {
        wwise: {
            core: {
                audio: {
                    /** Sent at the end of an import operation.*/
                    imported: "ak.wwise.core.audio.imported",
                },
                log: {
                    /** Sent when an item is added to the log. This could be used to retrieve items added to the SoundBank generation log. To retrieve the complete log, refer to ak.wwise.core.log.get.*/
                    itemAdded: "ak.wwise.core.log.itemAdded",
                },
                object: {
                    /** Sent when an attenuation curve is changed.*/
                    attenuationCurveChanged: "ak.wwise.core.object.attenuationCurveChanged",
                    /** Sent when an attenuation curve's link/unlink is changed.*/
                    attenuationCurveLinkChanged: "ak.wwise.core.object.attenuationCurveLinkChanged",
                    /** Sent when an object is added as a child to another object.*/
                    childAdded: "ak.wwise.core.object.childAdded",
                    /** Sent when an object is removed from the children of another object.*/
                    childRemoved: "ak.wwise.core.object.childRemoved",
                    /** Sent when an object is created.*/
                    created: "ak.wwise.core.object.created",
                    /** Sent when one or many curves are changed.*/
                    curveChanged: "ak.wwise.core.object.curveChanged",
                    /** Sent when an object is renamed. Publishes the renamed object.*/
                    nameChanged: "ak.wwise.core.object.nameChanged",
                    /** Sent when the object's notes are changed.*/
                    notesChanged: "ak.wwise.core.object.notesChanged",
                    /** Sent following an object's deletion.*/
                    postDeleted: "ak.wwise.core.object.postDeleted",
                    /** Sent prior to an object's deletion.*/
                    preDeleted: "ak.wwise.core.object.preDeleted",
                    /** Sent when the watched property of an object changes.*/
                    propertyChanged: "ak.wwise.core.object.propertyChanged",
                    /** Sent when an object reference is changed.*/
                    referenceChanged: "ak.wwise.core.object.referenceChanged",
                },
                profiler: {
                    captureLog: {
                        /** Sent when a new entry is added to the capture log. Note that all entries are being sent. No filtering is applied as opposed to the Capture Log view.*/
                        itemAdded: "ak.wwise.core.profiler.captureLog.itemAdded",
                    },
                },
                project: {
                    /** Sent when the project has been successfully loaded.*/
                    loaded: "ak.wwise.core.project.loaded",
                    /** Sent when the after the project is completely closed.*/
                    postClosed: "ak.wwise.core.project.postClosed",
                    /** Sent when the project begins closing.*/
                    preClosed: "ak.wwise.core.project.preClosed",
                    /** Sent when the project has been saved.*/
                    saved: "ak.wwise.core.project.saved",
                },
                soundbank: {
                    /** Sent when a single SoundBank is generated. This could be sent multiple times during SoundBank generation, for every SoundBank generated and for every platform. To generate SoundBanks, refer to ak.wwise.core.soundbank.generate or ak.wwise.ui.commands.execute with one of the SoundBank generation commands. Refer to Wwise Authoring Command Identifiers for the list of commands.*/
                    generated: "ak.wwise.core.soundbank.generated",
                    /** Sent when all soundbanks are generated.*/
                    generationDone: "ak.wwise.core.soundbank.generationDone",
                },
                switchContainer: {
                    /** Sent when an assignment is added to a Switch Container.*/
                    assignmentAdded: "ak.wwise.core.switchContainer.assignmentAdded",
                    /** Sent when an assignment is removed from a Switch Container.*/
                    assignmentRemoved: "ak.wwise.core.switchContainer.assignmentRemoved",
                },
                transport: {
                    /** Sent when the transport's state has changed.*/
                    stateChanged: "ak.wwise.core.transport.stateChanged",
                },
            },
            debug: {
                /** Sent when an assert has failed. This is only available in Debug builds.*/
                assertFailed: "ak.wwise.debug.assertFailed",
            },
            ui: {
                commands: {
                    /** Sent when a command is executed. The objects for which the command is executed are sent in the publication.*/
                    executed: "ak.wwise.ui.commands.executed",
                },
                /** Sent when the selection changes in the project. */
                selectionChanged: "ak.wwise.ui.selectionChanged",
            },
        },
    },

}

export { waapi_topics_names }