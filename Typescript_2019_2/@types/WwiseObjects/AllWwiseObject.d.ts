/**
 * (Plugin ID : 72)
(Class ID : 4718608)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface AcousticTexture extends WwiseObject{
    AbsorptionHigh?:number;
    AbsorptionLow?:number;
    AbsorptionMidHigh?:number;
    AbsorptionMidLow?:number;
    AbsorptionOffset?:number;
    Color?:number;
    OverrideColor?:boolean;
    Scattering?:number;
}

/**
 * (Plugin ID : 5)
(Class ID : 327696)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Action extends WwiseObject{
    AbsoluteOrRelative?:number;
    ActionType?:number;
    ApplyToDynamicSequence?:boolean;
    ApplyToStateTransition?:boolean;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    BypassGameParameterInternalTransition?:boolean;
    Delay?:number;
    FadeInCurve?:number;
    FadeOutCurve?:number;
    FadeTime?:number;
    GameParameterValue?:number;
    Highpass?:number;
    Inclusion?:boolean;
    Lowpass?:number;
    MasterResume?:boolean;
    PauseDelayedResumeAction?:boolean;
    Pitch?:number;
    Probability?:number;
    ResumeStateTransition?:boolean;
    Scope?:number;
    SeekPercent?:number;
    SeekTime?:number;
    SeekToMarker?:boolean;
    SeekType?:number;
    Target?:any;
    Volume?:number;
}

/**
 * (Plugin ID : 76)
(Class ID : 4980752)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ActionException extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
    Target?:any;
}

/**
 * (Plugin ID : 8)
(Class ID : 524304)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ActorMixer extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    EnableMidiNoteTracking?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    MidiChannelFilter?:number;
    MidiKeyFilterMax?:number;
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    MidiTrackingRootNote?:number;
    MidiTransposition?:number;
    MidiVelocityFilterMax?:number;
    MidiVelocityFilterMin?:number;
    MidiVelocityOffset?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiEventsBehavior?:boolean;
    OverrideMidiNoteTracking?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    Pitch?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 41)
(Class ID : 2686992)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Attenuation extends WwiseObject{
    Color?:number;
    ConeAttenuation?:number;
    ConeHighPassFilterValue?:number;
    ConeInnerAngle?:number;
    ConeLowPassFilterValue?:number;
    ConeOuterAngle?:number;
    ConeUse?:boolean;
    OverrideColor?:boolean;
    RadiusMax?:number;
}

/**
 * (Plugin ID : 71)
(Class ID : 4653072)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface AudioDevice extends WwiseObject{
    Color?:number;
    Inclusion?:boolean;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 0)
(Class ID : 16)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface AudioSource extends WwiseObject{
    ChannelConfigOverride?:number;
    Conversion?:any;
    CrossfadeDuration?:number;
    CrossfadeShape?:number;
    FadeInDuration?:number;
    FadeInShape?:number;
    FadeOutDuration?:number;
    FadeOutShape?:number;
    HdrEnvelope?:number;
    LoopBegin?:number;
    LoopEnd?:number;
    MarkerDetectionSensitivity?:number;
    MarkerInputMode?:number;
    OverrideConversion?:boolean;
    OverrideWavLoop?:boolean;
    TrimBegin?:number;
    TrimEnd?:number;
    VolumeOffset?:number;
}

/**
 * (Plugin ID : 61)
(Class ID : 3997712)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface AuxBus extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BusChannelConfig?:number;
    BusVolume?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverrideColor?:boolean;
    Pitch?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 29)
(Class ID : 1900560)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface BlendContainer extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BlendBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    EnableMidiNoteTracking?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    InitialDelay?:number;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    MidiChannelFilter?:number;
    MidiKeyFilterMax?:number;
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    MidiTrackingRootNote?:number;
    MidiTransposition?:number;
    MidiVelocityFilterMax?:number;
    MidiVelocityFilterMin?:number;
    MidiVelocityOffset?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiEventsBehavior?:boolean;
    OverrideMidiNoteTracking?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    Pitch?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
    Weight?:number;
}

/**
 * (Plugin ID : 30)
(Class ID : 1966096)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface BlendTrack extends WwiseObject{
    EnableCrossFading?:boolean;
    Highpass?:number;
    LayerCrossFadeControlInput?:any;
    Lowpass?:number;
    MakeUpGain?:number;
    Pitch?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 21)
(Class ID : 1376272)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Bus extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    AudioDevice?:any;
    BusChannelConfig?:number;
    BusVolume?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    HdrEnable?:boolean;
    HdrOutputGameParameterMax?:number;
    HdrOutputGameParameterMin?:number;
    HdrPeakOutputGameParameter?:any;
    HdrRatio?:number;
    HdrReleaseTime?:number;
    HdrReleaseTimeMode?:number;
    HdrThreshold?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxDuckVolume?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    Mixer?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideColor?:boolean;
    Pitch?:number;
    RecoveryTime?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UsedForBackgroundMusic?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 67)
(Class ID : 4390928)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ControlSurfaceBinding extends WwiseObject{
    Color?:number;
    HardwareControllerKey?:string;
    ObjectIndexInView?:number;
    OverrideColor?:boolean;
    TargetClassID?:number;
    TargetName?:string;
    TargetObject?:any;
    TargetType?:number;
}

/**
 * (Plugin ID : 68)
(Class ID : 4456464)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ControlSurfaceBindingGroup extends WwiseObject{
    Color?:number;
    GroupType?:number;
    HardwareControllerKey?:string;
    ObjectIndexInView?:number;
    OverrideColor?:boolean;
    TargetClassID?:number;
    TargetName?:string;
    TargetType?:number;
}

/**
 * (Plugin ID : 66)
(Class ID : 4325392)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ControlSurfaceSession extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 55)
(Class ID : 3604496)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Conversion extends WwiseObject{
    AllowChannelUpmix?:boolean;
    Channels?:number;
    Color?:number;
    LRMix?:number;
    MaxSampleRate?:number;
    MinSampleRate?:number;
    OverrideColor?:boolean;
    RemoveDCOffset?:boolean;
    SRConversionQuality?:number;
    SampleRate?:number;
    UseDither?:boolean;
    UseFilenameMarker?:boolean;
}

/**
 * (Plugin ID : 14)
(Class ID : 917520)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Curve extends WwiseObject{
    Flags?:number;
}

/**
 * (Plugin ID : 79)
(Class ID : 5177360)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface CustomState extends WwiseObject{
}

/**
 * (Plugin ID : 46)
(Class ID : 3014672)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface DialogueEvent extends WwiseObject{
    Color?:number;
    Mode?:number;
    OverrideColor?:boolean;
    Probability?:number;
}

/**
 * (Plugin ID : 17)
(Class ID : 1114128)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Effect extends WwiseObject{
    Color?:number;
    Inclusion?:boolean;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 186)
(Class ID : 12189699)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MasteringSuite extends WwiseObject{
    compressorBand1Attack?:number;
    compressorBand1Enabled?:boolean;
    compressorBand1Knee?:number;
    compressorBand1MakeupGain?:number;
    compressorBand1Ratio?:number;
    compressorBand1Release?:number;
    compressorBand1Threshold?:number;
    compressorBand2Attack?:number;
    compressorBand2Enabled?:boolean;
    compressorBand2Knee?:number;
    compressorBand2MakeupGain?:number;
    compressorBand2Ratio?:number;
    compressorBand2Release?:number;
    compressorBand2Threshold?:number;
    compressorBand3Attack?:number;
    compressorBand3Enabled?:boolean;
    compressorBand3Knee?:number;
    compressorBand3MakeupGain?:number;
    compressorBand3Ratio?:number;
    compressorBand3Release?:number;
    compressorBand3Threshold?:number;
    compressorBand4Attack?:number;
    compressorBand4Enabled?:boolean;
    compressorBand4Knee?:number;
    compressorBand4MakeupGain?:number;
    compressorBand4Ratio?:number;
    compressorBand4Release?:number;
    compressorBand4Threshold?:number;
    compressorCrossoverFrequency1?:number;
    compressorCrossoverFrequency2?:number;
    compressorCrossoverFrequency3?:number;
    compressorLinkMode?:number;
    compressorLinkStereoPairs?:boolean;
    compressorLinkStrength?:number;
    compressorNumBands?:number;
    limiterAttack?:number;
    limiterLinkChannels?:boolean;
    limiterMode?:number;
    limiterOutputGain?:number;
    limiterRelease?:number;
    limiterThreshold?:number;
    masterVolumeChannel1?:number;
    masterVolumeChannel10?:number;
    masterVolumeChannel11?:number;
    masterVolumeChannel12?:number;
    masterVolumeChannel2?:number;
    masterVolumeChannel3?:number;
    masterVolumeChannel4?:number;
    masterVolumeChannel5?:number;
    masterVolumeChannel6?:number;
    masterVolumeChannel7?:number;
    masterVolumeChannel8?:number;
    masterVolumeChannel9?:number;
    moduleEnableCompressor?:boolean;
    moduleEnableLimiter?:boolean;
    moduleEnableMasterVolume?:boolean;
    moduleEnableParamEQ?:boolean;
    paramBand1Enabled?:boolean;
    paramBand1FilterMode?:number;
    paramBand1Frequency?:number;
    paramBand1Gain?:number;
    paramBand1Resonance?:number;
    paramBand2Enabled?:boolean;
    paramBand2FilterMode?:number;
    paramBand2Frequency?:number;
    paramBand2Gain?:number;
    paramBand2Resonance?:number;
    paramBand3Enabled?:boolean;
    paramBand3FilterMode?:number;
    paramBand3Frequency?:number;
    paramBand3Gain?:number;
    paramBand3Resonance?:number;
    paramBand4Enabled?:boolean;
    paramBand4FilterMode?:number;
    paramBand4Frequency?:number;
    paramBand4Gain?:number;
    paramBand4Resonance?:number;
    paramBand5Enabled?:boolean;
    paramBand5FilterMode?:number;
    paramBand5Frequency?:number;
    paramBand5Gain?:number;
    paramBand5Resonance?:number;
    paramBand6Enabled?:boolean;
    paramBand6FilterMode?:number;
    paramBand6Frequency?:number;
    paramBand6Gain?:number;
    paramBand6Resonance?:number;
    paramEqNumBands?:number;
}

/**
 * (Plugin ID : 116)
(Class ID : 7602179)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedImpact extends WwiseObject{
    BWAmt?:number;
    BWVar?:number;
    BandwidthStretchEnable?:boolean;
    FreqAmt?:number;
    FreqVar?:number;
    FrequencyStretchEnable?:boolean;
    MagVar?:number;
    MagnitudeScalingEnable?:boolean;
    ModelQuality?:number;
    OutputLevel?:number;
    ResidualLevel?:number;
}

/**
 * (Plugin ID : 108)
(Class ID : 7077891)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseCompressor extends WwiseObject{
    AttackTime?:number;
    ChannelLink?:boolean;
    OutputGain?:number;
    ProcessLFE?:boolean;
    Ratio?:number;
    ReleaseTime?:number;
    Threshold?:number;
}

/**
 * (Plugin ID : 127)
(Class ID : 8323075)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseConvolutionReverb extends WwiseObject{
    AlgoTypeSelect?:number;
    CenterLevel?:number;
    ChannelConfigOverride?:number;
    DryLevel?:number;
    FrontLevel?:number;
    FrontRearDelay?:number;
    HardwareAcceleration?:boolean;
    IRChannelSelect?:number;
    IRConvolutionSmooth?:number;
    IRConvolutionSmoothMax?:number;
    IRConvolutionStart?:number;
    IRConvolutionStop?:number;
    IRConvolutionThreshold?:number;
    IRGraphicEQAutomate?:boolean;
    IRLPFAutomate?:boolean;
    IRLPFSlope?:number;
    IRLRMix?:number;
    IRLevel?:number;
    IRLevelAutomate?:boolean;
    IRStretch?:number;
    InputCenterLevel?:number;
    InputLFELevel?:number;
    InputStereoWidth?:number;
    InputThreshold?:number;
    LFELevel?:number;
    PreDelay?:number;
    RearLevel?:number;
    SoundEngineBlockSizeDefault?:number;
    SoundEngineSampleRateDefault?:number;
    SoundEngineSampleRateMac?:number;
    SoundEngineSampleRateiOS?:number;
    StereoWidth?:number;
    WetLevel?:number;
}

/**
 * (Plugin ID : 109)
(Class ID : 7143427)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseExpander extends WwiseObject{
    AttackTime?:number;
    ChannelLink?:boolean;
    OutputGain?:number;
    ProcessLFE?:boolean;
    Ratio?:number;
    ReleaseTime?:number;
    Threshold?:number;
}

/**
 * (Plugin ID : 125)
(Class ID : 8192003)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseFlanger extends WwiseObject{
    DelayTime?:number;
    DryLevel?:number;
    EnableLFO?:boolean;
    FeedBackLevel?:number;
    FeedForwardLevel?:number;
    ModDepth?:number;
    ModFrequency?:number;
    ModPWM?:number;
    ModPhaseMode?:number;
    ModPhaseOffset?:number;
    ModPhaseSpread?:number;
    ModSmoothing?:number;
    ModWaveform?:number;
    OutputLevel?:number;
    ProcessCenter?:boolean;
    ProcessLFE?:boolean;
    WetDryMix?:number;
}

/**
 * (Plugin ID : 139)
(Class ID : 9109507)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseGain extends WwiseObject{
    FullBandGain?:number;
    LFEGain?:number;
}

/**
 * (Plugin ID : 126)
(Class ID : 8257539)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseGuitarDistortion extends WwiseObject{
    DistortionDrive?:number;
    DistortionTone?:number;
    DistortionType?:number;
    OutputLevel?:number;
    PostEQBand1Enable?:boolean;
    PostEQBand1FilterType?:number;
    PostEQBand1Frequency?:number;
    PostEQBand1Gain?:number;
    PostEQBand1QFactor?:number;
    PostEQBand2Enable?:boolean;
    PostEQBand2FilterType?:number;
    PostEQBand2Frequency?:number;
    PostEQBand2Gain?:number;
    PostEQBand2QFactor?:number;
    PostEQBand3Enable?:boolean;
    PostEQBand3FilterType?:number;
    PostEQBand3Frequency?:number;
    PostEQBand3Gain?:number;
    PostEQBand3QFactor?:number;
    PreEQBand1Enable?:boolean;
    PreEQBand1FilterType?:number;
    PreEQBand1Frequency?:number;
    PreEQBand1Gain?:number;
    PreEQBand1QFactor?:number;
    PreEQBand2Enable?:boolean;
    PreEQBand2FilterType?:number;
    PreEQBand2Frequency?:number;
    PreEQBand2Gain?:number;
    PreEQBand2QFactor?:number;
    PreEQBand3Enable?:boolean;
    PreEQBand3FilterType?:number;
    PreEQBand3Frequency?:number;
    PreEQBand3Gain?:number;
    PreEQBand3QFactor?:number;
    Rectification?:number;
    WetDryMix?:number;
}

/**
 * (Plugin ID : 138)
(Class ID : 9043971)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseHarmonizer extends WwiseObject{
    DryLevel?:number;
    Input?:number;
    ProcessLFE?:boolean;
    SyncDry?:boolean;
    Voice1Enable?:boolean;
    Voice1FilterFrequency?:number;
    Voice1FilterGain?:number;
    Voice1FilterQFactor?:number;
    Voice1FilterType?:number;
    Voice1Gain?:number;
    Voice1Pitch?:number;
    Voice2Enable?:boolean;
    Voice2FilterFrequency?:number;
    Voice2FilterGain?:number;
    Voice2FilterQFactor?:number;
    Voice2FilterType?:number;
    Voice2Gain?:number;
    Voice2Pitch?:number;
    WetLevel?:number;
    WindowSize?:number;
}

/**
 * (Plugin ID : 115)
(Class ID : 7536643)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseMatrixReverb extends WwiseObject{
    DelayLengthsMode?:number;
    DelayTime1?:number;
    DelayTime10?:number;
    DelayTime11?:number;
    DelayTime12?:number;
    DelayTime13?:number;
    DelayTime14?:number;
    DelayTime15?:number;
    DelayTime16?:number;
    DelayTime2?:number;
    DelayTime3?:number;
    DelayTime4?:number;
    DelayTime5?:number;
    DelayTime6?:number;
    DelayTime7?:number;
    DelayTime8?:number;
    DelayTime9?:number;
    DryLevel?:number;
    HFRatio?:number;
    NumberOfDelays?:number;
    PreDelay?:number;
    ProcessLFE?:boolean;
    ReverbTime?:number;
    WetLevel?:number;
}

/**
 * (Plugin ID : 129)
(Class ID : 8454147)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseMeter extends WwiseObject{
    ApplyDownstreamVolume?:boolean;
    AttackTime?:number;
    Hold?:number;
    Max?:number;
    MeterMode?:number;
    MeterScope?:number;
    Min?:number;
    ReleaseTime?:number;
}

/**
 * (Plugin ID : 105)
(Class ID : 6881283)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseParametricEQ extends WwiseObject{
    FilterTypeBand1?:number;
    FilterTypeBand2?:number;
    FilterTypeBand3?:number;
    FrequencyBand1?:number;
    FrequencyBand2?:number;
    FrequencyBand3?:number;
    GainBand1?:number;
    GainBand2?:number;
    GainBand3?:number;
    OnOffBand1?:boolean;
    OnOffBand2?:boolean;
    OnOffBand3?:boolean;
    OutputLevel?:number;
    ProcessLFE?:boolean;
    QFactorBand1?:number;
    QFactorBand2?:number;
    QFactorBand3?:number;
}

/**
 * (Plugin ID : 110)
(Class ID : 7208963)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwisePeakLimiter extends WwiseObject{
    ChannelLink?:boolean;
    LookAhead?:number;
    OutputGain?:number;
    ProcessLFE?:boolean;
    Ratio?:number;
    ReleaseTime?:number;
    Threshold?:number;
}

/**
 * (Plugin ID : 136)
(Class ID : 8912899)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwisePitchShifter extends WwiseObject{
    DelayTime?:number;
    DryLevel?:number;
    FilterFrequency?:number;
    FilterGain?:number;
    FilterQFactor?:number;
    FilterType?:number;
    Input?:number;
    Pitch?:number;
    ProcessLFE?:boolean;
    SyncDry?:boolean;
    WetLevel?:number;
}

/**
 * (Plugin ID : 132)
(Class ID : 8650755)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseRecorder extends WwiseObject{
    AmbisonicsChannelOrdering?:number;
    ApplyDownstreamVolume?:boolean;
    AuthoringFilename?:string;
    Center?:number;
    DownmixToStereo?:boolean;
    Format?:number;
    Front?:number;
    GameFilename?:string;
    LFE?:number;
    Rear?:number;
    Surround?:number;
}

/**
 * (Plugin ID : 171)
(Class ID : 11206659)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseReflect extends WwiseObject{
    BaseTextureFrequency?:number;
    CenterPerc?:number;
    CursorNameCategory?:number;
    DistanceThreshold?:number;
    Dry?:number;
    FadeOutNbFrames?:number;
    MaxDistance?:number;
    MaxReflections?:number;
    OutputChannelConfig?:number;
    ParamFilterCutoff?:number;
    ParamFilterType?:number;
    PitchThreshold?:number;
    SpeedOfSound?:number;
    ThresholdMode?:number;
    Wet?:number;
}

/**
 * (Plugin ID : 118)
(Class ID : 7733251)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseRoomVerb extends WwiseObject{
    CenterLevel?:number;
    DCFilterCutFreq?:number;
    DecayTime?:number;
    Density?:number;
    DensityDelayMax?:number;
    DensityDelayMin?:number;
    DensityDelayRdmPerc?:number;
    Diffusion?:number;
    DiffusionDelayMax?:number;
    DiffusionDelayRdmPerc?:number;
    DiffusionDelayScalePerc?:number;
    DryLevel?:number;
    ERFrontBackDelay?:number;
    ERLevel?:number;
    ERPattern?:number;
    EnableEarlyReflections?:boolean;
    EnableToneControls?:boolean;
    Filter1Curve?:number;
    Filter1Freq?:number;
    Filter1Gain?:number;
    Filter1InsertPos?:number;
    Filter1Q?:number;
    Filter2Curve?:number;
    Filter2Freq?:number;
    Filter2Gain?:number;
    Filter2InsertPos?:number;
    Filter2Q?:number;
    Filter3Curve?:number;
    Filter3Freq?:number;
    Filter3Gain?:number;
    Filter3InsertPos?:number;
    Filter3Q?:number;
    FrontLevel?:number;
    HFDamping?:number;
    InputCenterLevel?:number;
    InputLFELevel?:number;
    LFELevel?:number;
    PreDelay?:number;
    Quality?:number;
    RearLevel?:number;
    ReverbLevel?:number;
    ReverbUnitInputDelay?:number;
    ReverbUnitInputDelayRmdPerc?:number;
    RoomShape?:number;
    RoomShapeMax?:number;
    RoomShapeMin?:number;
    RoomSize?:number;
    StereoWidth?:number;
}

/**
 * (Plugin ID : 135)
(Class ID : 8847363)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseStereoDelay extends WwiseObject{
    DryLevel?:number;
    EnableCrossFeed?:boolean;
    EnableFeedback?:boolean;
    FilterFrequency?:number;
    FilterGain?:number;
    FilterQFactor?:number;
    FilterType?:number;
    FrontRearBalance?:number;
    LeftCrossfeed?:number;
    LeftDelayTime?:number;
    LeftFeedback?:number;
    LeftInputType?:number;
    RightCrossfeed?:number;
    RightDelayTime?:number;
    RightFeedback?:number;
    RightInputType?:number;
    WetLevel?:number;
}

/**
 * (Plugin ID : 130)
(Class ID : 8519683)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseTimeStretch extends WwiseObject{
    OutputGain?:number;
    TimeStretch?:number;
    TimeStretchRandom?:number;
    WindowSize?:number;
}

/**
 * (Plugin ID : 131)
(Class ID : 8585219)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseTremolo extends WwiseObject{
    ModDepth?:number;
    ModFrequency?:number;
    ModPWM?:number;
    ModPhaseMode?:number;
    ModPhaseOffset?:number;
    ModPhaseSpread?:number;
    ModSmoothing?:number;
    ModWaveform?:number;
    OutputGain?:number;
    ProcessCenter?:boolean;
    ProcessLFE?:boolean;
}

/**
 * (Plugin ID : 4)
(Class ID : 262160)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Event extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 57)
(Class ID : 3735568)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ExternalSource extends WwiseObject{
}

/**
 * (Plugin ID : 56)
(Class ID : 3670032)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ExternalSourceFile extends WwiseObject{
    AnalysisType?:number;
    Conversion?:any;
    OverrideConversion?:boolean;
}

/**
 * (Plugin ID : 2)
(Class ID : 131088)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Folder extends WwiseObject{
    Color?:number;
    Inclusion?:boolean;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 23)
(Class ID : 1507344)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface GameParameter extends WwiseObject{
    BindToBuiltInParam?:number;
    Color?:number;
    FilterTimeDown?:number;
    FilterTimeUp?:number;
    InitialValue?:number;
    Max?:number;
    Min?:number;
    OverrideColor?:boolean;
    RTPCRamping?:number;
    SimulationValue?:number;
    SlewRateDown?:number;
    SlewRateUp?:number;
}

/**
 * (Plugin ID : 75)
(Class ID : 4915216)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Language extends WwiseObject{
    VolumeOffset?:number;
}

/**
 * (Plugin ID : 63)
(Class ID : 4128784)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MidiParameter extends WwiseObject{
    SimulationValue?:number;
}

/**
 * (Plugin ID : 53)
(Class ID : 3473424)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MixingSession extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 15)
(Class ID : 983056)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Modifier extends WwiseObject{
    Enabled?:boolean;
    Max?:number;
    Min?:number;
}

/**
 * (Plugin ID : 65)
(Class ID : 4259856)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ModulatorEnvelope extends WwiseObject{
    Color?:number;
    EnvelopeAttackCurve?:number;
    EnvelopeAttackTime?:number;
    EnvelopeAutoRelease?:boolean;
    EnvelopeDecayTime?:number;
    EnvelopeReleaseTime?:number;
    EnvelopeStopPlayback?:boolean;
    EnvelopeSustainLevel?:number;
    EnvelopeSustainTime?:number;
    EnvelopeTriggerOn?:number;
    ModulatorScope?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 64)
(Class ID : 4194320)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ModulatorLfo extends WwiseObject{
    Color?:number;
    LfoAttack?:number;
    LfoDepth?:number;
    LfoFrequency?:number;
    LfoInitialPhase?:number;
    LfoPWM?:number;
    LfoSmoothing?:number;
    LfoWaveform?:number;
    ModulatorScope?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 78)
(Class ID : 5111824)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ModulatorTime extends WwiseObject{
    Color?:number;
    EnvelopeStopPlayback?:boolean;
    EnvelopeTriggerOn?:number;
    ModulatorScope?:number;
    OverrideColor?:boolean;
    TimeModDuration?:number;
    TimeModInitialDelay?:number;
    TimeModLoops?:number;
    TimeModPlaybackRate?:number;
}

/**
 * (Plugin ID : 10000)
(Class ID : 655360016)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MultiSwitchEntry extends WwiseObject{
    Probability?:number;
    Weight?:number;
}

/**
 * (Plugin ID : 60)
(Class ID : 3932176)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicClip extends WwiseObject{
    BeginTrimOffset?:number;
    Color?:number;
    EndTrimOffset?:number;
    FadeInDuration?:number;
    FadeInMode?:number;
    FadeInShape?:number;
    FadeOutDuration?:number;
    FadeOutMode?:number;
    FadeOutShape?:number;
    Highpass?:number;
    Lowpass?:number;
    OverrideColor?:boolean;
    PlayAt?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 62)
(Class ID : 4063248)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicClipMidi extends WwiseObject{
    BeginTrimOffset?:number;
    Color?:number;
    EndTrimOffset?:number;
    OverrideColor?:boolean;
    PlayAt?:number;
}

/**
 * (Plugin ID : 59)
(Class ID : 3866640)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicCue extends WwiseObject{
    Color?:number;
    CueType?:number;
    OverrideColor?:boolean;
    TimeMs?:number;
}

/**
 * (Plugin ID : 77)
(Class ID : 5046288)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicEventCue extends WwiseObject{
    PlayAt?:number;
    PostEventTarget?:any;
}

/**
 * (Plugin ID : 39)
(Class ID : 2555920)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicFade extends WwiseObject{
    FadeCurve?:number;
    FadeOffset?:number;
    FadeTime?:number;
    FadeType?:number;
}

/**
 * (Plugin ID : 34)
(Class ID : 2228240)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicPlaylistContainer extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    GridFrequencyPreset?:number;
    GridOffsetCustom?:number;
    GridOffsetPreset?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideClockSettings?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiTarget?:boolean;
    OverrideMidiTempo?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    PlaybackSpeed?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    Tempo?:number;
    TimeSignatureLower?:number;
    TimeSignatureUpper?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 36)
(Class ID : 2359312)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicPlaylistItem extends WwiseObject{
    Color?:number;
    LoopCount?:number;
    NormalOrShuffle?:number;
    OverrideColor?:boolean;
    PlayMode?:number;
    PlaylistItemType?:number;
    RandomAvoidRepeatingCount?:number;
    Weight?:number;
}

/**
 * (Plugin ID : 27)
(Class ID : 1769488)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicSegment extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    EndPosition?:number;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    GridFrequencyPreset?:number;
    GridOffsetCustom?:number;
    GridOffsetPreset?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideClockSettings?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiTarget?:boolean;
    OverrideMidiTempo?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    PlaybackSpeed?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    Tempo?:number;
    TimeSignatureLower?:number;
    TimeSignatureUpper?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 38)
(Class ID : 2490384)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicStinger extends WwiseObject{
    Color?:number;
    CustomCueMatchName?:string;
    DontPlayAgainTime?:number;
    NumSegmentAdvance?:number;
    OverrideColor?:boolean;
    PlaySegmentAt?:number;
}

/**
 * (Plugin ID : 35)
(Class ID : 2293776)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicSwitchContainer extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    ContinuePlay?:boolean;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    GridFrequencyPreset?:number;
    GridOffsetCustom?:number;
    GridOffsetPreset?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    Mode?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideClockSettings?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiTarget?:boolean;
    OverrideMidiTempo?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    PlaybackSpeed?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    Tempo?:number;
    TimeSignatureLower?:number;
    TimeSignatureUpper?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 28)
(Class ID : 1835024)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicTrack extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    DefaultSwitchOrState?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    IsNonCachable?:boolean;
    IsStreamingEnabled?:boolean;
    IsZeroLantency?:boolean;
    ListenerRelativeRouting?:boolean;
    LookAheadTime?:number;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    MusicTrackType?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiTarget?:boolean;
    OverrideMidiTempo?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    PreFetchLength?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    SwitchGroupOrStateGroup?:any;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
}

/**
 * (Plugin ID : 58)
(Class ID : 3801104)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicTrackSequence extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
    TrackSequenceSwitch?:any;
}

/**
 * (Plugin ID : 37)
(Class ID : 2424848)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicTransition extends WwiseObject{
    Color?:number;
    DestinationContextObject?:any;
    DestinationContextType?:number;
    DestinationJumpPositionPreset?:number;
    DestinationPlaylistJumpTo?:number;
    EnableDestinationFadeIn?:boolean;
    EnableSourceFadeOut?:boolean;
    EnableTransitionFadeIn?:boolean;
    EnableTransitionFadeOut?:boolean;
    ExitSourceAt?:number;
    ExitSourceCustomCueMatchName?:string;
    IsFolder?:boolean;
    JumpToCustomCueMatchMode?:number;
    JumpToCustomCueMatchName?:string;
    OverrideColor?:boolean;
    PlayDestinationPreEntry?:boolean;
    PlaySourcePostExit?:boolean;
    PlayTransitionPostExit?:boolean;
    PlayTransitionPreEntry?:boolean;
    SourceContextObject?:any;
    SourceContextType?:number;
    UseTransitionObject?:boolean;
}

/**
 * (Plugin ID : 24)
(Class ID : 1572880)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ObjectSettingAssoc extends WwiseObject{
    ContinuePlay?:boolean;
    FadeInTime?:number;
    FadeOutTime?:number;
    FirstOccurenceOnly?:boolean;
    OnSwitchChange?:number;
}

/**
 * (Plugin ID : 42)
(Class ID : 2752528)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Panner extends WwiseObject{
    PanX?:number;
    PanY?:number;
}

/**
 * (Plugin ID : 22)
(Class ID : 1441808)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ParamControl extends WwiseObject{
    Color?:number;
    ControlInput?:any;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 11)
(Class ID : 720912)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Path extends WwiseObject{
    AppendOffset?:number;
    Duration?:number;
    Flags?:number;
    LinearTime?:boolean;
    RandomX?:number;
    RandomY?:number;
    RandomZ?:number;
}

/**
 * (Plugin ID : 69)
(Class ID : 4522000)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Platform extends WwiseObject{
}

/**
 * (Plugin ID : 54)
(Class ID : 3538960)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface PluginDataSource extends WwiseObject{
    DataFileName?:string;
}

/**
 * (Plugin ID : 12)
(Class ID : 786448)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Position extends WwiseObject{
    NewPathForEachSound?:boolean;
    PanX?:number;
    PanY?:number;
    PanZ?:number;
    PlayMechanismLoop?:boolean;
    PlayMechanismRandomOrSequence?:number;
    PlayMechanismStepOrContinuous?:number;
    PlayMechanismTransitionTime?:number;
    PlayMechanismTransitionUse?:boolean;
}

/**
 * (Plugin ID : 3)
(Class ID : 196624)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Project extends WwiseObject{
    AlwaysSaveMediaIDsFile?:boolean;
    AutoDetectFFTWindowSize?:number;
    AutoDetectThresholdHigh?:number;
    AutoDetectThresholdLow?:number;
    AutoDetectThresholdMedium?:number;
    Color?:number;
    CommPortDiscoveryBroadcast?:number;
    CommPortDiscoveryResponse?:number;
    CommSerialPortBase?:number;
    DefaultLanguage?:string;
    EventActionNamePosition?:number;
    EventNameCaseType?:number;
    EventNameModifyCase?:boolean;
    ExternalSourcesInputPath?:string;
    ExternalSourcesOutputPath?:string;
    FrequencyWeighting?:number;
    GenerateMainSoundBank?:boolean;
    GenerateMultipleBanks?:boolean;
    GenerateSoundBankJSON?:boolean;
    GenerateSoundBankXML?:boolean;
    GlobalVoiceInstancesLimit?:number;
    LicenseKey?:string;
    MaxDangerousVirtualVoices?:number;
    MaxMessagesPerMessageId?:number;
    MediaIDsInSingleFile?:boolean;
    OverrideColor?:boolean;
    SoundBankAllowExceedingSB?:boolean;
    SoundBankDefinitionFileFormat?:number;
    SoundBankGenerateDefinitionFile?:boolean;
    SoundBankGenerateEstimatedDuration?:boolean;
    SoundBankGenerateHeaderFile?:boolean;
    SoundBankGenerateMaxAttenuationInfo?:boolean;
    SoundBankGeneratePrintGUID?:boolean;
    SoundBankHeaderFilePath?:string;
    SoundBankIncludeSoundbankNamesStrings?:boolean;
    SoundBankPaths?:string;
    SoundBankPostGenerateCustomCmdDescription?:string;
    SoundBankPostGenerateCustomCmdLines?:string;
    SoundBankPreGenerateCustomCmdDescription?:string;
    SoundBankPreGenerateCustomCmdLines?:string;
    SoundBankUpdateAudioFiles?:boolean;
    UseActionNameForEvent?:boolean;
    UseDefaultLanguage?:boolean;
    UseMaxDangerousVirtualVoices?:boolean;
    UseMaxMessagesPerMessageId?:boolean;
    VolumeThreshold?:number;
    WwiseVersionWhenCreated?:string;
}

/**
 * (Plugin ID : 32)
(Class ID : 2097168)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Query extends WwiseObject{
    Color?:number;
    LogicalOperator?:number;
    ObjectType?:number;
    OverrideColor?:boolean;
    Platform?:number;
    StartObject?:any;
}

/**
 * (Plugin ID : 9)
(Class ID : 589840)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface RandomSequenceContainer extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    EnableMidiNoteTracking?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    GlobalOrPerObject?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    InitialDelay?:number;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    MidiChannelFilter?:number;
    MidiKeyFilterMax?:number;
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    MidiTrackingRootNote?:number;
    MidiTransposition?:number;
    MidiVelocityFilterMax?:number;
    MidiVelocityFilterMin?:number;
    MidiVelocityOffset?:number;
    NormalOrShuffle?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiEventsBehavior?:boolean;
    OverrideMidiNoteTracking?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    Pitch?:number;
    PlayMechanismInfiniteOrNumberOfLoops?:number;
    PlayMechanismLoop?:boolean;
    PlayMechanismLoopCount?:number;
    PlayMechanismResetPlaylistEachPlay?:boolean;
    PlayMechanismSpecialTransitions?:boolean;
    PlayMechanismSpecialTransitionsType?:number;
    PlayMechanismSpecialTransitionsValue?:number;
    PlayMechanismStepOrContinuous?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    RandomAvoidRepeating?:boolean;
    RandomAvoidRepeatingCount?:number;
    RandomOrSequence?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    RestartBeginningOrBackward?:number;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
    Weight?:number;
}

/**
 * (Plugin ID : 33)
(Class ID : 2162704)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SearchCriteria extends WwiseObject{
    Attenuation?:string;
    ConditionalOperator?:number;
    Conversion?:string;
    CurveType?:number;
    CurveUsage?:number;
    DefaultSwitchState?:string;
    Effect?:string;
    EffectClassID?:string;
    EventsReferencedInOperator?:number;
    GameParameter?:string;
    HasEmptyAssignation?:boolean;
    Inclusion?:boolean;
    IsChecked?:boolean;
    IsLinked?:boolean;
    IsSourceOfOverride?:boolean;
    IsSpecialSearch?:boolean;
    IsUsed?:boolean;
    LeftValue?:number;
    LogicalOperator?:number;
    Mode?:number;
    MusicSegment?:string;
    NumericOperator?:number;
    ObjectReferenced?:string;
    OutputBus?:string;
    PropertyName?:string;
    RTPCOperator?:number;
    RightValue?:number;
    RndSeqContainerType?:number;
    SRConversionQuality?:number;
    SampleRateConversionType?:number;
    SoundType?:number;
    SourceAudioFormat?:string;
    SourceChannelsLFEOption?:number;
    SourceChannelsOthersCount?:number;
    SourceChannelsOthersOption?:number;
    SourceLanguage?:string;
    SourceType?:string;
    State?:string;
    StateGroup?:string;
    StatePropertyUsage?:number;
    SwitchGroup?:string;
    SwitchingOperator?:number;
    Trigger?:string;
    UIntValue?:number;
    UserString?:string;
    UsingOperator?:number;
}

/**
 * (Plugin ID : 1)
(Class ID : 65552)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Sound extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    EnableMidiNoteTracking?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    InitialDelay?:number;
    IsGlobalLimit?:number;
    IsLoopingEnabled?:boolean;
    IsLoopingInfinite?:boolean;
    IsNonCachable?:boolean;
    IsStreamingEnabled?:boolean;
    IsVoice?:boolean;
    IsZeroLantency?:boolean;
    ListenerRelativeRouting?:boolean;
    LoopCount?:number;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    MidiChannelFilter?:number;
    MidiKeyFilterMax?:number;
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    MidiTrackingRootNote?:number;
    MidiTransposition?:number;
    MidiVelocityFilterMax?:number;
    MidiVelocityFilterMin?:number;
    MidiVelocityOffset?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiEventsBehavior?:boolean;
    OverrideMidiNoteTracking?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    Pitch?:number;
    PreFetchLength?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
    Weight?:number;
}

/**
 * (Plugin ID : 18)
(Class ID : 1179664)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundBank extends WwiseObject{
    Color?:number;
    Fill?:boolean;
    Maximum?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 26)
(Class ID : 1703952)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundcasterSession extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 119)
(Class ID : 7798786)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedAirWind extends WwiseObject{
    AttenuationRollOff?:number;
    AverageVelocity?:number;
    AverageVelocityAutomate?:boolean;
    AverageVelocityRandom?:number;
    ChannelMask?:number;
    Direction?:number;
    DirectionAutomate?:boolean;
    DirectionRandom?:number;
    Duration?:number;
    DurationRandom?:number;
    FrequencyScale?:number;
    FrequencyScaleAutomate?:boolean;
    FrequencyScaleRandom?:number;
    GainOffset?:number;
    GainOffsetAutomate?:boolean;
    GainOffsetRandom?:number;
    Gustiness?:number;
    GustinessAutomate?:boolean;
    GustinessRandom?:number;
    MaxDistance?:number;
    MinDistance?:number;
    PlaybackRate?:number;
    QFactorScale?:number;
    QFactorScaleAutomate?:boolean;
    QFactorScaleRandom?:number;
    Variability?:number;
    VariabilityAutomate?:boolean;
    VariabilityRandom?:number;
    VelocityDynamicRange?:number;
}

/**
 * (Plugin ID : 120)
(Class ID : 7864322)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedAirWoosh extends WwiseObject{
    AttenuationRollOff?:number;
    ChannelMask?:number;
    DistanceAttenuation?:boolean;
    Duration?:number;
    DurationRandom?:number;
    FrequencyScale?:number;
    FrequencyScaleAutomate?:boolean;
    FrequencyScaleRandom?:number;
    GainOffset?:number;
    GainOffsetAutomate?:boolean;
    GainOffsetRandom?:number;
    MinDistance?:number;
    NoiseColor?:number;
    Oversampling?:number;
    PlaybackRate?:number;
    QFactorScale?:number;
    QFactorScaleAutomate?:boolean;
    QFactorScaleRandom?:number;
    Speed?:number;
    SpeedAutomate?:boolean;
    SpeedPointSpeedRandom?:number;
    SpeedPointTimeRandom?:number;
    SpeedRandom?:number;
    VelocityDynamicRange?:number;
}

/**
 * (Plugin ID : 183)
(Class ID : 11993090)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedGrain extends WwiseObject{
    Amplitude?:number;
    AmplitudeMod1Depth?:number;
    AmplitudeMod1Quantization?:number;
    AmplitudeMod2Depth?:number;
    AmplitudeMod2Quantization?:number;
    AmplitudeMod3Depth?:number;
    AmplitudeMod3Quantization?:number;
    AmplitudeMod4Depth?:number;
    AmplitudeMod4Quantization?:number;
    Attack?:number;
    AttackMod1Depth?:number;
    AttackMod1Quantization?:number;
    AttackMod2Depth?:number;
    AttackMod2Quantization?:number;
    AttackMod3Depth?:number;
    AttackMod3Quantization?:number;
    AttackMod4Depth?:number;
    AttackMod4Quantization?:number;
    Azimuth?:number;
    AzimuthMod1Depth?:number;
    AzimuthMod1Quantization?:number;
    AzimuthMod2Depth?:number;
    AzimuthMod2Quantization?:number;
    AzimuthMod3Depth?:number;
    AzimuthMod3Quantization?:number;
    AzimuthMod4Depth?:number;
    AzimuthMod4Quantization?:number;
    Duration?:number;
    DurationLink?:number;
    DurationMod1Depth?:number;
    DurationMod1Quantization?:number;
    DurationMod2Depth?:number;
    DurationMod2Quantization?:number;
    DurationMod3Depth?:number;
    DurationMod3Quantization?:number;
    DurationMod4Depth?:number;
    DurationMod4Quantization?:number;
    DurationMultiplier?:number;
    DurationMultiplierMod1Depth?:number;
    DurationMultiplierMod1Quantization?:number;
    DurationMultiplierMod2Depth?:number;
    DurationMultiplierMod2Quantization?:number;
    DurationMultiplierMod3Depth?:number;
    DurationMultiplierMod3Quantization?:number;
    DurationMultiplierMod4Depth?:number;
    DurationMultiplierMod4Quantization?:number;
    Elevation?:number;
    ElevationMod1Depth?:number;
    ElevationMod1Quantization?:number;
    ElevationMod2Depth?:number;
    ElevationMod2Quantization?:number;
    ElevationMod3Depth?:number;
    ElevationMod3Quantization?:number;
    ElevationMod4Depth?:number;
    ElevationMod4Quantization?:number;
    EnvelopeType?:number;
    FilterFreq?:number;
    FilterFreqMod1Depth?:number;
    FilterFreqMod1Quantization?:number;
    FilterFreqMod2Depth?:number;
    FilterFreqMod2Quantization?:number;
    FilterFreqMod3Depth?:number;
    FilterFreqMod3Quantization?:number;
    FilterFreqMod4Depth?:number;
    FilterFreqMod4Quantization?:number;
    FilterQ?:number;
    FilterQMod1Depth?:number;
    FilterQMod1Quantization?:number;
    FilterQMod2Depth?:number;
    FilterQMod2Quantization?:number;
    FilterQMod3Depth?:number;
    FilterQMod3Quantization?:number;
    FilterQMod4Depth?:number;
    FilterQMod4Quantization?:number;
    FilterType?:number;
    GrainRate?:number;
    GrainRateMod1Depth?:number;
    GrainRateMod1Quantization?:number;
    GrainRateMod2Depth?:number;
    GrainRateMod2Quantization?:number;
    GrainRateMod3Depth?:number;
    GrainRateMod3Quantization?:number;
    GrainRateMod4Depth?:number;
    GrainRateMod4Quantization?:number;
    GrainTime?:number;
    GrainTimeMod1Depth?:number;
    GrainTimeMod1Quantization?:number;
    GrainTimeMod2Depth?:number;
    GrainTimeMod2Quantization?:number;
    GrainTimeMod3Depth?:number;
    GrainTimeMod3Quantization?:number;
    GrainTimeMod4Depth?:number;
    GrainTimeMod4Quantization?:number;
    MarkerSelect?:number;
    MarkerSelectMod1Depth?:number;
    MarkerSelectMod1Quantization?:number;
    MarkerSelectMod2Depth?:number;
    MarkerSelectMod2Quantization?:number;
    MarkerSelectMod3Depth?:number;
    MarkerSelectMod3Quantization?:number;
    MarkerSelectMod4Depth?:number;
    MarkerSelectMod4Quantization?:number;
    MaxNumGrains?:number;
    MidiMapTranspose?:boolean;
    ModAmount1?:number;
    ModAmount2?:number;
    ModAmount3?:number;
    ModAmount4?:number;
    ModPeriod1?:number;
    ModPeriod2?:number;
    ModPeriod3?:number;
    ModPeriod4?:number;
    ModRate1?:number;
    ModRate2?:number;
    ModRate3?:number;
    ModRate4?:number;
    ModSelect1?:number;
    ModSelect2?:number;
    ModSelect3?:number;
    ModSelect4?:number;
    ModWaveform1?:number;
    ModWaveform2?:number;
    ModWaveform3?:number;
    ModWaveform4?:number;
    Offset?:number;
    OffsetMod1Depth?:number;
    OffsetMod1Quantization?:number;
    OffsetMod2Depth?:number;
    OffsetMod2Quantization?:number;
    OffsetMod3Depth?:number;
    OffsetMod3Quantization?:number;
    OffsetMod4Depth?:number;
    OffsetMod4Quantization?:number;
    OutputChannelConfig?:number;
    OutputLevel?:number;
    PositioningSelect?:number;
    QuantizeToMarkers?:boolean;
    Release?:number;
    ReleaseMod1Depth?:number;
    ReleaseMod1Quantization?:number;
    ReleaseMod2Depth?:number;
    ReleaseMod2Quantization?:number;
    ReleaseMod3Depth?:number;
    ReleaseMod3Quantization?:number;
    ReleaseMod4Depth?:number;
    ReleaseMod4Quantization?:number;
    SelectFreqTimeGrain?:number;
    Speed?:number;
    SpeedMod1Depth?:number;
    SpeedMod1Quantization?:number;
    SpeedMod2Depth?:number;
    SpeedMod2Quantization?:number;
    SpeedMod3Depth?:number;
    SpeedMod3Quantization?:number;
    SpeedMod4Depth?:number;
    SpeedMod4Quantization?:number;
    Spread?:number;
    SpreadMod1Depth?:number;
    SpreadMod1Quantization?:number;
    SpreadMod2Depth?:number;
    SpreadMod2Quantization?:number;
    SpreadMod3Depth?:number;
    SpreadMod3Quantization?:number;
    SpreadMod4Depth?:number;
    SpreadMod4Quantization?:number;
    Transpose?:number;
    TransposeMod1Depth?:number;
    TransposeMod1Quantization?:number;
    TransposeMod2Depth?:number;
    TransposeMod2Quantization?:number;
    TransposeMod3Depth?:number;
    TransposeMod3Quantization?:number;
    TransposeMod4Depth?:number;
    TransposeMod4Quantization?:number;
    TransposeRoot?:number;
    WindowMode?:number;
}

/**
 * (Plugin ID : 409)
(Class ID : 26804226)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseMotionSource extends WwiseObject{
    Channel1?:number;
    Channel2?:number;
    Channel3?:number;
    Channel4?:number;
    ChannelConfig?:number;
    DriverA?:number;
    DriverB?:number;
    DriverC?:number;
    DriverD?:number;
    DriverE?:number;
    DriverF?:number;
    DriverG?:number;
    DriverH?:number;
    High1?:number;
    High2?:number;
    LeftTrigger?:number;
    Low1?:number;
    Low2?:number;
    RightTrigger?:number;
}

/**
 * (Plugin ID : 101)
(Class ID : 6619138)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseSilence extends WwiseObject{
    Length?:number;
    LengthMax?:number;
    LengthMin?:number;
}

/**
 * (Plugin ID : 148)
(Class ID : 9699330)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseSynthOne extends WwiseObject{
    BaseFrequency?:number;
    FmAmount?:number;
    FrequencyMode?:number;
    NoiseLevel?:number;
    NoiseShape?:number;
    OperationMode?:number;
    Osc1Invert?:boolean;
    Osc1Level?:number;
    Osc1Pwm?:number;
    Osc1Transpose?:number;
    Osc1Waveform?:number;
    Osc2Invert?:boolean;
    Osc2Level?:number;
    Osc2Pwm?:number;
    Osc2Transpose?:number;
    Osc2Waveform?:number;
    OutputLevel?:number;
    OverSampling?:boolean;
}

/**
 * (Plugin ID : 6)
(Class ID : 393232)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface State extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 7)
(Class ID : 458768)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface StateGroup extends WwiseObject{
    Color?:number;
    DefaultTransitionTime?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 20)
(Class ID : 1310736)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Switch extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 10)
(Class ID : 655376)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SwitchContainer extends WwiseObject{
    _3DPosition?:number;
    _3DSpatialization?:number;
    AttachableMixerInput?:any;
    Attenuation?:any;
    BelowThresholdBehavior?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    CenterPercentage?:number;
    Color?:number;
    Conversion?:any;
    DefaultSwitchOrState?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    EnableMidiNoteTracking?:boolean;
    GameAuxSendHPF?:number;
    GameAuxSendLPF?:number;
    GameAuxSendVolume?:number;
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    HdrEnvelopeSensitivity?:number;
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    InitialDelay?:number;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    Lowpass?:number;
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    MidiChannelFilter?:number;
    MidiKeyFilterMax?:number;
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    MidiTrackingRootNote?:number;
    MidiTransposition?:number;
    MidiVelocityFilterMax?:number;
    MidiVelocityFilterMin?:number;
    MidiVelocityOffset?:number;
    OutputBus?:any;
    OutputBusHighpass?:number;
    OutputBusLowpass?:number;
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideAnalysis?:boolean;
    OverrideAttachableMixerInput?:boolean;
    OverrideColor?:boolean;
    OverrideConversion?:boolean;
    OverrideEarlyReflections?:boolean;
    OverrideEffect?:boolean;
    OverrideGameAuxSends?:boolean;
    OverrideHdrEnvelope?:boolean;
    OverrideMidiEventsBehavior?:boolean;
    OverrideMidiNoteTracking?:boolean;
    OverrideOutput?:boolean;
    OverridePositioning?:boolean;
    OverridePriority?:boolean;
    OverrideUserAuxSends?:boolean;
    OverrideVirtualVoice?:boolean;
    Pitch?:number;
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    SpeakerPanning3DSpatializationMix?:number;
    SwitchBehavior?:number;
    SwitchGroupOrStateGroup?:any;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    UserAuxSendHPF0?:number;
    UserAuxSendHPF1?:number;
    UserAuxSendHPF2?:number;
    UserAuxSendHPF3?:number;
    UserAuxSendLPF0?:number;
    UserAuxSendLPF1?:number;
    UserAuxSendLPF2?:number;
    UserAuxSendLPF3?:number;
    UserAuxSendVolume0?:number;
    UserAuxSendVolume1?:number;
    UserAuxSendVolume2?:number;
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    Volume?:number;
    Weight?:number;
}

/**
 * (Plugin ID : 19)
(Class ID : 1245200)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SwitchGroup extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
    UseGameParameter?:boolean;
}

/**
 * (Plugin ID : 40)
(Class ID : 2621456)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Trigger extends WwiseObject{
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 51)
(Class ID : 3342352)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface UserProjectSettings extends WwiseObject{
    Conversion?:any;
    ConvertExternalSources?:boolean;
    DefaultSoundVolume?:number;
    EventActionNamePosition?:number;
    EventCreationSettingsOverride?:boolean;
    EventNameCaseType?:number;
    EventNameModifyCase?:boolean;
    ExternalSourcesInputPath?:string;
    ExternalSourcesOutputPath?:string;
    ExternalSourcesOverrideInputPath?:boolean;
    ExternalSourcesOverrideOutputPath?:boolean;
    GenerateMainSoundBank?:boolean;
    GenerateMultipleBanks?:boolean;
    GenerateSoundBankJSON?:boolean;
    GenerateSoundBankXML?:boolean;
    OverrideConversion?:boolean;
    PostGenerateStepUserOverride?:boolean;
    PreGenerateStepUserOverride?:boolean;
    SettingsUserOverride?:boolean;
    SoundBankAllowExceedingSB?:boolean;
    SoundBankDefinitionFileFormat?:number;
    SoundBankGenerateDefinitionFile?:boolean;
    SoundBankGenerateEstimatedDuration?:boolean;
    SoundBankGenerateHeaderFile?:boolean;
    SoundBankGenerateMaxAttenuationInfo?:boolean;
    SoundBankGeneratePrintGUID?:boolean;
    SoundBankHeaderFilePath?:string;
    SoundBankIncludeSoundbankNamesStrings?:boolean;
    SoundBankPathUserOverride?:boolean;
    SoundBankPaths?:string;
    SoundBankPostGenerateCustomCmdDescription?:string;
    SoundBankPostGenerateCustomCmdLines?:string;
    SoundBankPreGenerateCustomCmdDescription?:string;
    SoundBankPreGenerateCustomCmdLines?:string;
    SoundBankUpdateAudioFiles?:boolean;
    UseActionNameForEvent?:boolean;
}

/**
 * (Plugin ID : 25)
(Class ID : 1638416)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WorkUnit extends WwiseObject{
    Color?:number;
    Inclusion?:boolean;
    OverrideColor?:boolean;
}

