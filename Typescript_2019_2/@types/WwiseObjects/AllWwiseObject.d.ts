import { WwiseObject } from "./WwiseObject";

/**
 * (Plugin ID : 72)
(Class ID : 4718608)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface AcousticTexture extends WwiseObject{
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AbsorptionHigh?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AbsorptionLow?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AbsorptionMidHigh?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AbsorptionMidLow?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    AbsorptionOffset?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    OverrideColor?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
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
    /**
     * [ 0 , 600 ]
     * @default 0
     */
    Delay?:number;
    FadeInCurve?:number;
    FadeOutCurve?:number;
    /**
     * [ 0 , 60 ]
     * @default 0
     */
    FadeTime?:number;
    GameParameterValue?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    Highpass?:number;
    Inclusion?:boolean;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    MasterResume?:boolean;
    PauseDelayedResumeAction?:boolean;
    /**
     * [ -4800 , 4800 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    Probability?:number;
    ResumeStateTransition?:boolean;
    Scope?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    SeekPercent?:number;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    SeekTime?:number;
    SeekToMarker?:boolean;
    SeekType?:number;
    Target?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 76)
(Class ID : 4980752)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ActionException extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    /**
     * [ 0 , 65535 ]
     * @default 65535
     */
    MidiChannelFilter?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiKeyFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    /**
     * [ 0 , 127 ]
     * @default 60
     */
    MidiTrackingRootNote?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiTransposition?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiVelocityFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiVelocityFilterMin?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiVelocityOffset?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 41)
(Class ID : 2686992)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Attenuation extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ -200 , 0 ]
     * @default -6.0
     */
    ConeAttenuation?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    ConeHighPassFilterValue?:number;
    /**
     * [ 0 , 360 ]
     * @default 90
     */
    ConeInnerAngle?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    ConeLowPassFilterValue?:number;
    /**
     * [ 0 , 360 ]
     * @default 245
     */
    ConeOuterAngle?:number;
    ConeUse?:boolean;
    OverrideColor?:boolean;
    /**
     * [ 1 , 100000000 ]
     * @default 100.0
     */
    RadiusMax?:number;
}

/**
 * (Plugin ID : 71)
(Class ID : 4653072)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface AudioDevice extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 60000 ]
     * @default 0
     */
    CrossfadeDuration?:number;
    CrossfadeShape?:number;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    FadeInDuration?:number;
    FadeInShape?:number;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    FadeOutDuration?:number;
    FadeOutShape?:number;
    /**
     * [ 0 , 1 ]
     * @default 0
     */
    HdrEnvelope?:number;
    LoopBegin?:number;
    LoopEnd?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    MarkerDetectionSensitivity?:number;
    MarkerInputMode?:number;
    OverrideConversion?:boolean;
    OverrideWavLoop?:boolean;
    TrimBegin?:number;
    TrimEnd?:number;
    /**
     * [ -24 , +24 ]
     * @default 0
     */
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
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    BusVolume?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    OutputBusVolume?:number;
    OverrideColor?:boolean;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    InitialDelay?:number;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    /**
     * [ 0 , 65535 ]
     * @default 65535
     */
    MidiChannelFilter?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiKeyFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    /**
     * [ 0 , 127 ]
     * @default 60
     */
    MidiTrackingRootNote?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiTransposition?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiVelocityFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiVelocityFilterMin?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiVelocityOffset?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
    /**
     * [ 0.001 , 100 ]
     * @default 50
     */
    Weight?:number;
}

/**
 * (Plugin ID : 30)
(Class ID : 1966096)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface BlendTrack extends WwiseObject{
    EnableCrossFading?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    LayerCrossFadeControlInput?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    MakeUpGain?:number;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    BusVolume?:number;
    BypassEffect?:boolean;
    BypassEffect0?:boolean;
    BypassEffect1?:boolean;
    BypassEffect2?:boolean;
    BypassEffect3?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    HdrEnable?:boolean;
    /**
     * [ -100 , 100 ]
     * @default 100
     */
    HdrOutputGameParameterMax?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    HdrOutputGameParameterMin?:number;
    HdrPeakOutputGameParameter?:any;
    /**
     * [ 1 , 100 ]
     * @default 100
     */
    HdrRatio?:number;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    HdrReleaseTime?:number;
    HdrReleaseTimeMode?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    HdrThreshold?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    MakeUpGain?:number;
    /**
     * [ -200 , 0 ]
     * @default -96
     */
    MaxDuckVolume?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    Mixer?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    OutputBusVolume?:number;
    OverLimitBehavior?:number;
    OverrideColor?:boolean;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ 0 , 10 ]
     * @default 1
     */
    RecoveryTime?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UsedForBackgroundMusic?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 67)
(Class ID : 4390928)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ControlSurfaceBinding extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    HardwareControllerKey?:string;
    /**
     * [ 1 , 128 ]
     * @default 1
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    GroupType?:number;
    HardwareControllerKey?:string;
    /**
     * [ 1 , 128 ]
     * @default 1
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Mode?:number;
    OverrideColor?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    Probability?:number;
}

/**
 * (Plugin ID : 17)
(Class ID : 1114128)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Effect extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 0.5 ]
     * @default 0.01
     */
    compressorBand1Attack?:number;
    compressorBand1Enabled?:boolean;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    compressorBand1Knee?:number;
    /**
     * [ -18 , 18 ]
     * @default 0
     */
    compressorBand1MakeupGain?:number;
    /**
     * [ 1 , 30 ]
     * @default 1
     */
    compressorBand1Ratio?:number;
    /**
     * [ 0 , 5 ]
     * @default 0.1
     */
    compressorBand1Release?:number;
    /**
     * [ -60 , 0 ]
     * @default 0
     */
    compressorBand1Threshold?:number;
    /**
     * [ 0 , 0.5 ]
     * @default 0.01
     */
    compressorBand2Attack?:number;
    compressorBand2Enabled?:boolean;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    compressorBand2Knee?:number;
    /**
     * [ -18 , 18 ]
     * @default 0
     */
    compressorBand2MakeupGain?:number;
    /**
     * [ 1 , 30 ]
     * @default 1
     */
    compressorBand2Ratio?:number;
    /**
     * [ 0 , 5 ]
     * @default 0.1
     */
    compressorBand2Release?:number;
    /**
     * [ -60 , 0 ]
     * @default 0
     */
    compressorBand2Threshold?:number;
    /**
     * [ 0 , 0.5 ]
     * @default 0.01
     */
    compressorBand3Attack?:number;
    compressorBand3Enabled?:boolean;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    compressorBand3Knee?:number;
    /**
     * [ -18 , 18 ]
     * @default 0
     */
    compressorBand3MakeupGain?:number;
    /**
     * [ 1 , 30 ]
     * @default 1
     */
    compressorBand3Ratio?:number;
    /**
     * [ 0 , 5 ]
     * @default 0.1
     */
    compressorBand3Release?:number;
    /**
     * [ -60 , 0 ]
     * @default 0
     */
    compressorBand3Threshold?:number;
    /**
     * [ 0 , 0.5 ]
     * @default 0.01
     */
    compressorBand4Attack?:number;
    compressorBand4Enabled?:boolean;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    compressorBand4Knee?:number;
    /**
     * [ -18 , 18 ]
     * @default 0
     */
    compressorBand4MakeupGain?:number;
    /**
     * [ 1 , 30 ]
     * @default 1
     */
    compressorBand4Ratio?:number;
    /**
     * [ 0 , 5 ]
     * @default 0.1
     */
    compressorBand4Release?:number;
    /**
     * [ -60 , 0 ]
     * @default 0
     */
    compressorBand4Threshold?:number;
    /**
     * [ 10 , 24000 ]
     * @default 150
     */
    compressorCrossoverFrequency1?:number;
    /**
     * [ 10 , 24000 ]
     * @default 1000
     */
    compressorCrossoverFrequency2?:number;
    /**
     * [ 10 , 24000 ]
     * @default 6000
     */
    compressorCrossoverFrequency3?:number;
    compressorLinkMode?:number;
    compressorLinkStereoPairs?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    compressorLinkStrength?:number;
    /**
     * [ 1 , 4 ]
     * @default 4
     */
    compressorNumBands?:number;
    /**
     * [ 0 , 2.6 ]
     * @default 0
     */
    limiterAttack?:number;
    limiterLinkChannels?:boolean;
    limiterMode?:number;
    /**
     * [ 0 , 30 ]
     * @default 0
     */
    limiterOutputGain?:number;
    /**
     * [ 0 , 5 ]
     * @default 0
     */
    limiterRelease?:number;
    /**
     * [ -30 , 0 ]
     * @default 0
     */
    limiterThreshold?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel1?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel10?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel11?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel12?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel2?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel3?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel4?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel5?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel6?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel7?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel8?:number;
    /**
     * [ -100 , 12 ]
     * @default 0
     */
    masterVolumeChannel9?:number;
    moduleEnableCompressor?:boolean;
    moduleEnableLimiter?:boolean;
    moduleEnableMasterVolume?:boolean;
    moduleEnableParamEQ?:boolean;
    paramBand1Enabled?:boolean;
    paramBand1FilterMode?:number;
    /**
     * [ 10 , 24000 ]
     * @default 100
     */
    paramBand1Frequency?:number;
    /**
     * [ -20 , 20 ]
     * @default 0
     */
    paramBand1Gain?:number;
    /**
     * [ 0.1 , 12 ]
     * @default 1
     */
    paramBand1Resonance?:number;
    paramBand2Enabled?:boolean;
    paramBand2FilterMode?:number;
    /**
     * [ 10 , 24000 ]
     * @default 200
     */
    paramBand2Frequency?:number;
    /**
     * [ -20 , 20 ]
     * @default 0
     */
    paramBand2Gain?:number;
    /**
     * [ 0.1 , 12 ]
     * @default 1
     */
    paramBand2Resonance?:number;
    paramBand3Enabled?:boolean;
    paramBand3FilterMode?:number;
    /**
     * [ 10 , 24000 ]
     * @default 500
     */
    paramBand3Frequency?:number;
    /**
     * [ -20 , 20 ]
     * @default 0
     */
    paramBand3Gain?:number;
    /**
     * [ 0.1 , 12 ]
     * @default 1
     */
    paramBand3Resonance?:number;
    paramBand4Enabled?:boolean;
    paramBand4FilterMode?:number;
    /**
     * [ 10 , 24000 ]
     * @default 1000
     */
    paramBand4Frequency?:number;
    /**
     * [ -20 , 20 ]
     * @default 0
     */
    paramBand4Gain?:number;
    /**
     * [ 0.1 , 12 ]
     * @default 1
     */
    paramBand4Resonance?:number;
    paramBand5Enabled?:boolean;
    paramBand5FilterMode?:number;
    /**
     * [ 10 , 24000 ]
     * @default 3000
     */
    paramBand5Frequency?:number;
    /**
     * [ -20 , 20 ]
     * @default 0
     */
    paramBand5Gain?:number;
    /**
     * [ 0.1 , 12 ]
     * @default 1
     */
    paramBand5Resonance?:number;
    paramBand6Enabled?:boolean;
    paramBand6FilterMode?:number;
    /**
     * [ 10 , 24000 ]
     * @default 6000
     */
    paramBand6Frequency?:number;
    /**
     * [ -20 , 20 ]
     * @default 0
     */
    paramBand6Gain?:number;
    /**
     * [ 0.1 , 12 ]
     * @default 1
     */
    paramBand6Resonance?:number;
    /**
     * [ 1 , 6 ]
     * @default 4
     */
    paramEqNumBands?:number;
}

/**
 * (Plugin ID : 116)
(Class ID : 7602179)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedImpact extends WwiseObject{
    /**
     * [ -800 , 800 ]
     * @default 0
     */
    BWAmt?:number;
    /**
     * [ 0 , 800 ]
     * @default 0
     */
    BWVar?:number;
    BandwidthStretchEnable?:boolean;
    /**
     * [ -800 , 800 ]
     * @default 0
     */
    FreqAmt?:number;
    /**
     * [ 0 , 800 ]
     * @default 0
     */
    FreqVar?:number;
    FrequencyStretchEnable?:boolean;
    /**
     * [ 0 , 96 ]
     * @default 0
     */
    MagVar?:number;
    MagnitudeScalingEnable?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    ModelQuality?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputLevel?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    ResidualLevel?:number;
}

/**
 * (Plugin ID : 108)
(Class ID : 7077891)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseCompressor extends WwiseObject{
    /**
     * [ 0 , 2 ]
     * @default 0.1
     */
    AttackTime?:number;
    ChannelLink?:boolean;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputGain?:number;
    ProcessLFE?:boolean;
    /**
     * [ 1 , 50 ]
     * @default 1.5
     */
    Ratio?:number;
    /**
     * [ 0 , 2 ]
     * @default 0.1
     */
    ReleaseTime?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    Threshold?:number;
}

/**
 * (Plugin ID : 127)
(Class ID : 8323075)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseConvolutionReverb extends WwiseObject{
    AlgoTypeSelect?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    CenterLevel?:number;
    ChannelConfigOverride?:number;
    /**
     * [ -96.3 , 24 ]
     * @default -96.3
     */
    DryLevel?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    FrontLevel?:number;
    /**
     * [ 0 , 200 ]
     * @default 0
     */
    FrontRearDelay?:number;
    HardwareAcceleration?:boolean;
    IRChannelSelect?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    IRConvolutionSmooth?:number;
    IRConvolutionSmoothMax?:number;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    IRConvolutionStart?:number;
    /**
     * [ 0 , 20 ]
     * @default 0
     */
    IRConvolutionStop?:number;
    /**
     * [ -144 , -30 ]
     * @default -75
     */
    IRConvolutionThreshold?:number;
    IRGraphicEQAutomate?:boolean;
    IRLPFAutomate?:boolean;
    IRLPFSlope?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    IRLRMix?:number;
    /**
     * [ -96.3 , 24 ]
     * @default 0
     */
    IRLevel?:number;
    IRLevelAutomate?:boolean;
    /**
     * [ 50 , 200 ]
     * @default 100
     */
    IRStretch?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    InputCenterLevel?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    InputLFELevel?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    InputStereoWidth?:number;
    /**
     * [ -96.3 , 30.0 ]
     * @default -60
     */
    InputThreshold?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    LFELevel?:number;
    /**
     * [ 0 , 1000 ]
     * @default 0
     */
    PreDelay?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    RearLevel?:number;
    /**
     * [ 128 , 4096 ]
     * @default 1024
     */
    SoundEngineBlockSizeDefault?:number;
    /**
     * [ 24000 , 48000 ]
     * @default 48000
     */
    SoundEngineSampleRateDefault?:number;
    /**
     * [ 24000 , 48000 ]
     * @default 48000
     */
    SoundEngineSampleRateMac?:number;
    /**
     * [ 24000 , 48000 ]
     * @default 48000
     */
    SoundEngineSampleRateiOS?:number;
    /**
     * [ 0 , 180 ]
     * @default 180
     */
    StereoWidth?:number;
    /**
     * [ -96.3 , 24 ]
     * @default 0
     */
    WetLevel?:number;
}

/**
 * (Plugin ID : 109)
(Class ID : 7143427)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseExpander extends WwiseObject{
    /**
     * [ 0 , 2 ]
     * @default 0.1
     */
    AttackTime?:number;
    ChannelLink?:boolean;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputGain?:number;
    ProcessLFE?:boolean;
    /**
     * [ 1 , 50 ]
     * @default 3
     */
    Ratio?:number;
    /**
     * [ 0 , 2 ]
     * @default 0.01
     */
    ReleaseTime?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -40
     */
    Threshold?:number;
}

/**
 * (Plugin ID : 125)
(Class ID : 8192003)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseFlanger extends WwiseObject{
    /**
     * [ 0.2 , 100 ]
     * @default 5
     */
    DelayTime?:number;
    /**
     * [ 0 , 1 ]
     * @default 1.0
     */
    DryLevel?:number;
    EnableLFO?:boolean;
    /**
     * [ -1 , 1 ]
     * @default 0
     */
    FeedBackLevel?:number;
    /**
     * [ -1 , 1 ]
     * @default 1
     */
    FeedForwardLevel?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    ModDepth?:number;
    /**
     * [ 0.002 , 20 ]
     * @default 1
     */
    ModFrequency?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    ModPWM?:number;
    ModPhaseMode?:number;
    /**
     * [ -180 , 180 ]
     * @default 0
     */
    ModPhaseOffset?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    ModPhaseSpread?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    ModSmoothing?:number;
    ModWaveform?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputLevel?:number;
    ProcessCenter?:boolean;
    ProcessLFE?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    WetDryMix?:number;
}

/**
 * (Plugin ID : 139)
(Class ID : 9109507)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseGain extends WwiseObject{
    /**
     * [ -96.3 , 24 ]
     * @default 0
     */
    FullBandGain?:number;
    /**
     * [ -96.3 , 24 ]
     * @default 0
     */
    LFEGain?:number;
}

/**
 * (Plugin ID : 126)
(Class ID : 8257539)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseGuitarDistortion extends WwiseObject{
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    DistortionDrive?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    DistortionTone?:number;
    DistortionType?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputLevel?:number;
    PostEQBand1Enable?:boolean;
    PostEQBand1FilterType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    PostEQBand1Frequency?:number;
    /**
     * [ -48 , 48 ]
     * @default 0
     */
    PostEQBand1Gain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    PostEQBand1QFactor?:number;
    PostEQBand2Enable?:boolean;
    PostEQBand2FilterType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    PostEQBand2Frequency?:number;
    /**
     * [ -48 , 48 ]
     * @default 0
     */
    PostEQBand2Gain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    PostEQBand2QFactor?:number;
    PostEQBand3Enable?:boolean;
    PostEQBand3FilterType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    PostEQBand3Frequency?:number;
    /**
     * [ -48 , 48 ]
     * @default 0
     */
    PostEQBand3Gain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    PostEQBand3QFactor?:number;
    PreEQBand1Enable?:boolean;
    PreEQBand1FilterType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    PreEQBand1Frequency?:number;
    /**
     * [ -48 , 48 ]
     * @default 0
     */
    PreEQBand1Gain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    PreEQBand1QFactor?:number;
    PreEQBand2Enable?:boolean;
    PreEQBand2FilterType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    PreEQBand2Frequency?:number;
    /**
     * [ -48 , 48 ]
     * @default 0
     */
    PreEQBand2Gain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    PreEQBand2QFactor?:number;
    PreEQBand3Enable?:boolean;
    PreEQBand3FilterType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    PreEQBand3Frequency?:number;
    /**
     * [ -48 , 48 ]
     * @default 0
     */
    PreEQBand3Gain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    PreEQBand3QFactor?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Rectification?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    WetDryMix?:number;
}

/**
 * (Plugin ID : 138)
(Class ID : 9043971)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseHarmonizer extends WwiseObject{
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    DryLevel?:number;
    Input?:number;
    ProcessLFE?:boolean;
    SyncDry?:boolean;
    Voice1Enable?:boolean;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    Voice1FilterFrequency?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    Voice1FilterGain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    Voice1FilterQFactor?:number;
    Voice1FilterType?:number;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    Voice1Gain?:number;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Voice1Pitch?:number;
    Voice2Enable?:boolean;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    Voice2FilterFrequency?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    Voice2FilterGain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    Voice2FilterQFactor?:number;
    Voice2FilterType?:number;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    Voice2Gain?:number;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Voice2Pitch?:number;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    WetLevel?:number;
    /**
     * [ 256 , 4096 ]
     * @default 1024
     */
    WindowSize?:number;
}

/**
 * (Plugin ID : 115)
(Class ID : 7536643)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseMatrixReverb extends WwiseObject{
    DelayLengthsMode?:number;
    /**
     * [ 1 , 35 ]
     * @default 13.62
     */
    DelayTime1?:number;
    /**
     * [ 1 , 35 ]
     * @default 26.09
     */
    DelayTime10?:number;
    /**
     * [ 1 , 35 ]
     * @default 26.55
     */
    DelayTime11?:number;
    /**
     * [ 1 , 35 ]
     * @default 26.91
     */
    DelayTime12?:number;
    /**
     * [ 1 , 35 ]
     * @default 28.04
     */
    DelayTime13?:number;
    /**
     * [ 1 , 35 ]
     * @default 29.09
     */
    DelayTime14?:number;
    /**
     * [ 1 , 35 ]
     * @default 29.90
     */
    DelayTime15?:number;
    /**
     * [ 1 , 35 ]
     * @default 30.86
     */
    DelayTime16?:number;
    /**
     * [ 1 , 35 ]
     * @default 15.66
     */
    DelayTime2?:number;
    /**
     * [ 1 , 35 ]
     * @default 17.52
     */
    DelayTime3?:number;
    /**
     * [ 1 , 35 ]
     * @default 19.02
     */
    DelayTime4?:number;
    /**
     * [ 1 , 35 ]
     * @default 20.83
     */
    DelayTime5?:number;
    /**
     * [ 1 , 35 ]
     * @default 22.60
     */
    DelayTime6?:number;
    /**
     * [ 1 , 35 ]
     * @default 24.05
     */
    DelayTime7?:number;
    /**
     * [ 1 , 35 ]
     * @default 24.78
     */
    DelayTime8?:number;
    /**
     * [ 1 , 35 ]
     * @default 25.60
     */
    DelayTime9?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    DryLevel?:number;
    /**
     * [ 0.5 , 10 ]
     * @default 2
     */
    HFRatio?:number;
    NumberOfDelays?:number;
    /**
     * [ 0 , 1 ]
     * @default 0
     */
    PreDelay?:number;
    ProcessLFE?:boolean;
    /**
     * [ 0.1 , 10 ]
     * @default 4
     */
    ReverbTime?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -35
     */
    WetLevel?:number;
}

/**
 * (Plugin ID : 129)
(Class ID : 8454147)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseMeter extends WwiseObject{
    ApplyDownstreamVolume?:boolean;
    /**
     * [ 0 , 10 ]
     * @default 0.0
     */
    AttackTime?:number;
    /**
     * [ 0 , 10 ]
     * @default 0
     */
    Hold?:number;
    /**
     * [ -96.3 , 12 ]
     * @default 0
     */
    Max?:number;
    MeterMode?:number;
    MeterScope?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -48
     */
    Min?:number;
    /**
     * [ 0 , 10 ]
     * @default 0.1
     */
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
    /**
     * [ 20 , 20000 ]
     * @default 100
     */
    FrequencyBand1?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    FrequencyBand2?:number;
    /**
     * [ 20 , 20000 ]
     * @default 12000
     */
    FrequencyBand3?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    GainBand1?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    GainBand2?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    GainBand3?:number;
    OnOffBand1?:boolean;
    OnOffBand2?:boolean;
    OnOffBand3?:boolean;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputLevel?:number;
    ProcessLFE?:boolean;
    /**
     * [ 0.5 , 100 ]
     * @default 1
     */
    QFactorBand1?:number;
    /**
     * [ 0.5 , 100 ]
     * @default 1
     */
    QFactorBand2?:number;
    /**
     * [ 0.5 , 100 ]
     * @default 1
     */
    QFactorBand3?:number;
}

/**
 * (Plugin ID : 110)
(Class ID : 7208963)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwisePeakLimiter extends WwiseObject{
    ChannelLink?:boolean;
    /**
     * [ 0.001 , 0.02 ]
     * @default 0.01
     */
    LookAhead?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputGain?:number;
    ProcessLFE?:boolean;
    /**
     * [ 1 , 50 ]
     * @default 10
     */
    Ratio?:number;
    /**
     * [ 0.001 , 0.5 ]
     * @default 0.1
     */
    ReleaseTime?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    Threshold?:number;
}

/**
 * (Plugin ID : 136)
(Class ID : 8912899)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwisePitchShifter extends WwiseObject{
    /**
     * [ 10 , 400 ]
     * @default 50
     */
    DelayTime?:number;
    /**
     * [ -96 , 24 ]
     * @default -96
     */
    DryLevel?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    FilterFrequency?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    FilterGain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    FilterQFactor?:number;
    FilterType?:number;
    Input?:number;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    ProcessLFE?:boolean;
    SyncDry?:boolean;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
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
    /**
     * [ -96.3 , 0 ]
     * @default -3.0
     */
    Center?:number;
    DownmixToStereo?:boolean;
    Format?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0.0
     */
    Front?:number;
    GameFilename?:string;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    LFE?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -3.0
     */
    Rear?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -3.0
     */
    Surround?:number;
}

/**
 * (Plugin ID : 171)
(Class ID : 11206659)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseReflect extends WwiseObject{
    /**
     * [ 20 , 1000 ]
     * @default 250
     */
    BaseTextureFrequency?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    CenterPerc?:number;
    CursorNameCategory?:number;
    /**
     * [ 0 , 2147483648 ]
     * @default 0
     */
    DistanceThreshold?:number;
    /**
     * [ -96 , 24 ]
     * @default -96
     */
    Dry?:number;
    /**
     * [ 1 , 100 ]
     * @default 3
     */
    FadeOutNbFrames?:number;
    /**
     * [ 1 , 2147483648 ]
     * @default 1000
     */
    MaxDistance?:number;
    /**
     * [ 0 , 1024 ]
     * @default 0
     */
    MaxReflections?:number;
    OutputChannelConfig?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.5
     */
    ParamFilterCutoff?:number;
    ParamFilterType?:number;
    /**
     * [ 0 , 9600 ]
     * @default 2400
     */
    PitchThreshold?:number;
    /**
     * [ 0.001 , 2147483648 ]
     * @default 345
     */
    SpeedOfSound?:number;
    ThresholdMode?:number;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    Wet?:number;
}

/**
 * (Plugin ID : 118)
(Class ID : 7733251)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseRoomVerb extends WwiseObject{
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    CenterLevel?:number;
    DCFilterCutFreq?:number;
    /**
     * [ 0.2 , 10 ]
     * @default 1.2
     */
    DecayTime?:number;
    /**
     * [ 0 , 100 ]
     * @default 80
     */
    Density?:number;
    DensityDelayMax?:number;
    DensityDelayMin?:number;
    DensityDelayRdmPerc?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    Diffusion?:number;
    DiffusionDelayMax?:number;
    DiffusionDelayRdmPerc?:number;
    DiffusionDelayScalePerc?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    DryLevel?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    ERFrontBackDelay?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -20
     */
    ERLevel?:number;
    /**
     * [ 0 , 30 ]
     * @default 23
     */
    ERPattern?:number;
    EnableEarlyReflections?:boolean;
    EnableToneControls?:boolean;
    Filter1Curve?:number;
    /**
     * [ 20 , 20000 ]
     * @default 100
     */
    Filter1Freq?:number;
    /**
     * [ -32 , 32 ]
     * @default 0
     */
    Filter1Gain?:number;
    Filter1InsertPos?:number;
    /**
     * [ 0.1 , 10 ]
     * @default 1
     */
    Filter1Q?:number;
    Filter2Curve?:number;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    Filter2Freq?:number;
    /**
     * [ -32 , 32 ]
     * @default 0
     */
    Filter2Gain?:number;
    Filter2InsertPos?:number;
    /**
     * [ 0.1 , 10 ]
     * @default 1
     */
    Filter2Q?:number;
    Filter3Curve?:number;
    /**
     * [ 20 , 20000 ]
     * @default 10000
     */
    Filter3Freq?:number;
    /**
     * [ -32 , 32 ]
     * @default 0
     */
    Filter3Gain?:number;
    Filter3InsertPos?:number;
    /**
     * [ 0.1 , 10 ]
     * @default 1
     */
    Filter3Q?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    FrontLevel?:number;
    /**
     * [ 0.5 , 10 ]
     * @default 2.25
     */
    HFDamping?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    InputCenterLevel?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    InputLFELevel?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -96.3
     */
    LFELevel?:number;
    /**
     * [ 0 , 1000 ]
     * @default 25
     */
    PreDelay?:number;
    /**
     * [ 2 , 16 ]
     * @default 8
     */
    Quality?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    RearLevel?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -20
     */
    ReverbLevel?:number;
    ReverbUnitInputDelay?:number;
    ReverbUnitInputDelayRmdPerc?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    RoomShape?:number;
    RoomShapeMax?:number;
    RoomShapeMin?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    RoomSize?:number;
    /**
     * [ 0 , 180 ]
     * @default 180
     */
    StereoWidth?:number;
}

/**
 * (Plugin ID : 135)
(Class ID : 8847363)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseStereoDelay extends WwiseObject{
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    DryLevel?:number;
    EnableCrossFeed?:boolean;
    EnableFeedback?:boolean;
    /**
     * [ 20 , 20000 ]
     * @default 1000
     */
    FilterFrequency?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    FilterGain?:number;
    /**
     * [ 0.1 , 20 ]
     * @default 1
     */
    FilterQFactor?:number;
    FilterType?:number;
    /**
     * [ -100 , 100 ]
     * @default -100
     */
    FrontRearBalance?:number;
    /**
     * [ -48 , 0 ]
     * @default -12
     */
    LeftCrossfeed?:number;
    /**
     * [ 0.03 , 2 ]
     * @default 0.1
     */
    LeftDelayTime?:number;
    /**
     * [ -48 , 0 ]
     * @default -12
     */
    LeftFeedback?:number;
    LeftInputType?:number;
    /**
     * [ -48 , 0 ]
     * @default -12
     */
    RightCrossfeed?:number;
    /**
     * [ 0.03 , 2 ]
     * @default 0.1
     */
    RightDelayTime?:number;
    /**
     * [ -48 , 0 ]
     * @default -12
     */
    RightFeedback?:number;
    RightInputType?:number;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    WetLevel?:number;
}

/**
 * (Plugin ID : 130)
(Class ID : 8519683)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseTimeStretch extends WwiseObject{
    /**
     * [ -24 , 24 ]
     * @default 0
     */
    OutputGain?:number;
    /**
     * [ 25 , 1600 ]
     * @default 100
     */
    TimeStretch?:number;
    /**
     * [ 0 , 200 ]
     * @default 0
     */
    TimeStretchRandom?:number;
    /**
     * [ 256 , 4096 ]
     * @default 2048
     */
    WindowSize?:number;
}

/**
 * (Plugin ID : 131)
(Class ID : 8585219)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseTremolo extends WwiseObject{
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    ModDepth?:number;
    /**
     * [ 0.02 , 20000 ]
     * @default 1
     */
    ModFrequency?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    ModPWM?:number;
    ModPhaseMode?:number;
    /**
     * [ -180 , 180 ]
     * @default 0
     */
    ModPhaseOffset?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    ModPhaseSpread?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    ModSmoothing?:number;
    ModWaveform?:number;
    /**
     * [ -24 , 24 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 2 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ 0 , 100000 ]
     * @default 0
     */
    FilterTimeDown?:number;
    /**
     * [ 0 , 100000 ]
     * @default 0
     */
    FilterTimeUp?:number;
    InitialValue?:number;
    Max?:number;
    Min?:number;
    OverrideColor?:boolean;
    RTPCRamping?:number;
    SimulationValue?:number;
    /**
     * [ 0 , 1000000 ]
     * @default 50
     */
    SlewRateDown?:number;
    /**
     * [ 0 , 1000000 ]
     * @default 50
     */
    SlewRateUp?:number;
}

/**
 * (Plugin ID : 75)
(Class ID : 4915216)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Language extends WwiseObject{
    /**
     * [ -24 , +24 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    EnvelopeAttackCurve?:number;
    /**
     * [ 0 , 10000 ]
     * @default 0.2
     */
    EnvelopeAttackTime?:number;
    EnvelopeAutoRelease?:boolean;
    /**
     * [ 0 , 10000 ]
     * @default 0.2
     */
    EnvelopeDecayTime?:number;
    /**
     * [ 0 , 10000 ]
     * @default 0.5
     */
    EnvelopeReleaseTime?:number;
    EnvelopeStopPlayback?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    EnvelopeSustainLevel?:number;
    /**
     * [ 0 , 10000 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ 0 , 100000 ]
     * @default 0
     */
    LfoAttack?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    LfoDepth?:number;
    /**
     * [ 0 , 20000 ]
     * @default 1
     */
    LfoFrequency?:number;
    /**
     * [ -180 , 180 ]
     * @default 0
     */
    LfoInitialPhase?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    LfoPWM?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    EnvelopeStopPlayback?:boolean;
    EnvelopeTriggerOn?:number;
    ModulatorScope?:number;
    OverrideColor?:boolean;
    /**
     * [ 0.1 , 100 ]
     * @default 1
     */
    TimeModDuration?:number;
    /**
     * [ 0 , 4 ]
     * @default 0
     */
    TimeModInitialDelay?:number;
    /**
     * [ 0 , 100 ]
     * @default 1
     */
    TimeModLoops?:number;
    /**
     * [ 0.25 , 4 ]
     * @default 1
     */
    TimeModPlaybackRate?:number;
}

/**
 * (Plugin ID : 10000)
(Class ID : 655360016)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MultiSwitchEntry extends WwiseObject{
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    Probability?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Weight?:number;
}

/**
 * (Plugin ID : 60)
(Class ID : 3932176)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicClip extends WwiseObject{
    BeginTrimOffset?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    EndTrimOffset?:number;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    FadeInDuration?:number;
    FadeInMode?:number;
    FadeInShape?:number;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    FadeOutDuration?:number;
    FadeOutMode?:number;
    FadeOutShape?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    OverrideColor?:boolean;
    /**
     * [ 0 , 10000000000 ]
     * @default 0
     */
    PlayAt?:number;
    /**
     * [ -96.3 , 0 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 62)
(Class ID : 4063248)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicClipMidi extends WwiseObject{
    BeginTrimOffset?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    EndTrimOffset?:number;
    OverrideColor?:boolean;
    /**
     * [ 0 , 10000000000 ]
     * @default 0
     */
    PlayAt?:number;
}

/**
 * (Plugin ID : 59)
(Class ID : 3866640)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicCue extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 10000000000 ]
     * @default 0
     */
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
    /**
     * [ -60 , 60 ]
     * @default 0
     */
    FadeOffset?:number;
    /**
     * [ 0 , 60 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    GridFrequencyPreset?:number;
    /**
     * [ 0 , 99999 ]
     * @default 0
     */
    GridOffsetCustom?:number;
    GridOffsetPreset?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0.25 , 4 ]
     * @default 1
     */
    PlaybackSpeed?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    /**
     * [ 1 , 400 ]
     * @default 120
     */
    Tempo?:number;
    TimeSignatureLower?:number;
    /**
     * [ 1 , 64 ]
     * @default 4
     */
    TimeSignatureUpper?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 36)
(Class ID : 2359312)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicPlaylistItem extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ -1 , 32767 ]
     * @default 1
     */
    LoopCount?:number;
    NormalOrShuffle?:number;
    OverrideColor?:boolean;
    PlayMode?:number;
    PlaylistItemType?:number;
    /**
     * [ 1 , 999 ]
     * @default 1
     */
    RandomAvoidRepeatingCount?:number;
    /**
     * [ 0.001 , 100 ]
     * @default 50
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Conversion?:any;
    Effect0?:any;
    Effect1?:any;
    Effect2?:any;
    Effect3?:any;
    EnableAttenuation?:boolean;
    EnableDiffraction?:boolean;
    EnableLoudnessNormalization?:boolean;
    /**
     * [ 0 , 10000000000 ]
     * @default 4000
     */
    EndPosition?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    GridFrequencyPreset?:number;
    /**
     * [ 0 , 99999 ]
     * @default 0
     */
    GridOffsetCustom?:number;
    GridOffsetPreset?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0.25 , 4 ]
     * @default 1
     */
    PlaybackSpeed?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    /**
     * [ 1 , 400 ]
     * @default 120
     */
    Tempo?:number;
    TimeSignatureLower?:number;
    /**
     * [ 1 , 64 ]
     * @default 4
     */
    TimeSignatureUpper?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 38)
(Class ID : 2490384)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicStinger extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    CustomCueMatchName?:string;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    GridFrequencyPreset?:number;
    /**
     * [ 0 , 99999 ]
     * @default 0
     */
    GridOffsetCustom?:number;
    GridOffsetPreset?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    Mode?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0.25 , 4 ]
     * @default 1
     */
    PlaybackSpeed?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    /**
     * [ 1 , 400 ]
     * @default 120
     */
    Tempo?:number;
    TimeSignatureLower?:number;
    /**
     * [ 1 , 64 ]
     * @default 4
     */
    TimeSignatureUpper?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
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
    /**
     * [ 0 , 10000 ]
     * @default 100
     */
    LookAheadTime?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiTarget?:any;
    MidiTempoSource?:number;
    MusicTrackType?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0 , 10000 ]
     * @default 100
     */
    PreFetchLength?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    SwitchGroupOrStateGroup?:any;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
}

/**
 * (Plugin ID : 58)
(Class ID : 3801104)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface MusicTrackSequence extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 60 ]
     * @default 0
     */
    FadeInTime?:number;
    /**
     * [ 0 , 60 ]
     * @default 0
     */
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
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    PanX?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    PanY?:number;
}

/**
 * (Plugin ID : 22)
(Class ID : 1441808)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface ParamControl extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    RandomX?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    RandomY?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
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
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    PanX?:number;
    /**
     * [ -100 , 100 ]
     * @default 35
     */
    PanY?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
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
    /**
     * [ -96.3 , 0 ]
     * @default -50
     */
    AutoDetectThresholdHigh?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -30
     */
    AutoDetectThresholdLow?:number;
    /**
     * [ -96.3 , 0 ]
     * @default -40
     */
    AutoDetectThresholdMedium?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ 1 , 65535 ]
     * @default 24024
     */
    CommPortDiscoveryBroadcast?:number;
    /**
     * [ 0 , 65535 ]
     * @default 0
     */
    CommPortDiscoveryResponse?:number;
    /**
     * [ 0 , 12 ]
     * @default 8
     */
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
    /**
     * [ 1 , 10000 ]
     * @default 256
     */
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
    /**
     * [ -96 , 0 ]
     * @default -80
     */
    VolumeThreshold?:number;
    WwiseVersionWhenCreated?:string;
}

/**
 * (Plugin ID : 32)
(Class ID : 2097168)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Query extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    GlobalOrPerObject?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    InitialDelay?:number;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    /**
     * [ 0 , 65535 ]
     * @default 65535
     */
    MidiChannelFilter?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiKeyFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    /**
     * [ 0 , 127 ]
     * @default 60
     */
    MidiTrackingRootNote?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiTransposition?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiVelocityFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiVelocityFilterMin?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiVelocityOffset?:number;
    NormalOrShuffle?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    PlayMechanismInfiniteOrNumberOfLoops?:number;
    PlayMechanismLoop?:boolean;
    /**
     * [ 1 , 32767 ]
     * @default 2
     */
    PlayMechanismLoopCount?:number;
    PlayMechanismResetPlaylistEachPlay?:boolean;
    PlayMechanismSpecialTransitions?:boolean;
    PlayMechanismSpecialTransitionsType?:number;
    /**
     * [ 0 , 3600 ]
     * @default 1
     */
    PlayMechanismSpecialTransitionsValue?:number;
    PlayMechanismStepOrContinuous?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    RandomAvoidRepeating?:boolean;
    /**
     * [ 1 , 999 ]
     * @default 1
     */
    RandomAvoidRepeatingCount?:number;
    RandomOrSequence?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    RestartBeginningOrBackward?:number;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
    /**
     * [ 0.001 , 100 ]
     * @default 50
     */
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
    /**
     * [ 0 , 4294967295 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    InitialDelay?:number;
    IsGlobalLimit?:number;
    IsLoopingEnabled?:boolean;
    IsLoopingInfinite?:boolean;
    IsNonCachable?:boolean;
    IsStreamingEnabled?:boolean;
    IsVoice?:boolean;
    IsZeroLantency?:boolean;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 1 , 32767 ]
     * @default 2
     */
    LoopCount?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    /**
     * [ 0 , 65535 ]
     * @default 65535
     */
    MidiChannelFilter?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiKeyFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    /**
     * [ 0 , 127 ]
     * @default 60
     */
    MidiTrackingRootNote?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiTransposition?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiVelocityFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiVelocityFilterMin?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiVelocityOffset?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ 0 , 10000 ]
     * @default 100
     */
    PreFetchLength?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
    /**
     * [ 0.001 , 100 ]
     * @default 50
     */
    Weight?:number;
}

/**
 * (Plugin ID : 18)
(Class ID : 1179664)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundBank extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Fill?:boolean;
    /**
     * [ 0 , 2147483647 ]
     * @default 0
     */
    Maximum?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 26)
(Class ID : 1703952)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundcasterSession extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 119)
(Class ID : 7798786)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedAirWind extends WwiseObject{
    /**
     * [ 0.0 , 4 ]
     * @default 1
     */
    AttenuationRollOff?:number;
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    AverageVelocity?:number;
    AverageVelocityAutomate?:boolean;
    /**
     * [ 0 , 2400 ]
     * @default 0.0
     */
    AverageVelocityRandom?:number;
    ChannelMask?:number;
    /**
     * [ -180 , 180 ]
     * @default 0
     */
    Direction?:number;
    DirectionAutomate?:boolean;
    /**
     * [ 0 , 180 ]
     * @default 0.0
     */
    DirectionRandom?:number;
    /**
     * [ 0.1 , 3600.0 ]
     * @default 10.0
     */
    Duration?:number;
    /**
     * [ 0.0 , 3600.0 ]
     * @default 0.0
     */
    DurationRandom?:number;
    /**
     * [ -4.0 , 4.0 ]
     * @default 0.0
     */
    FrequencyScale?:number;
    FrequencyScaleAutomate?:boolean;
    /**
     * [ 0.0 , 4.0 ]
     * @default 0.0
     */
    FrequencyScaleRandom?:number;
    /**
     * [ -96.3 , 24.0 ]
     * @default 0.0
     */
    GainOffset?:number;
    GainOffsetAutomate?:boolean;
    /**
     * [ 0 , 48.0 ]
     * @default 0.0
     */
    GainOffsetRandom?:number;
    /**
     * [ 0.0 , 1.0 ]
     * @default 0.5
     */
    Gustiness?:number;
    GustinessAutomate?:boolean;
    /**
     * [ 0.0 , 0.5 ]
     * @default 0.0
     */
    GustinessRandom?:number;
    /**
     * [ 1.0 , 100.0 ]
     * @default 10.0
     */
    MaxDistance?:number;
    /**
     * [ 0.1 , 50 ]
     * @default 5.0
     */
    MinDistance?:number;
    /**
     * [ 0.1 , 10.0 ]
     * @default 1.0
     */
    PlaybackRate?:number;
    /**
     * [ -4.0 , 4.0 ]
     * @default 0.0
     */
    QFactorScale?:number;
    QFactorScaleAutomate?:boolean;
    /**
     * [ 0.0 , 4.0 ]
     * @default 0.0
     */
    QFactorScaleRandom?:number;
    /**
     * [ 0.0 , 1.0 ]
     * @default 0.25
     */
    Variability?:number;
    VariabilityAutomate?:boolean;
    /**
     * [ 0.0 , 0.5 ]
     * @default 0.0
     */
    VariabilityRandom?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.5
     */
    VelocityDynamicRange?:number;
}

/**
 * (Plugin ID : 120)
(Class ID : 7864322)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedAirWoosh extends WwiseObject{
    /**
     * [ 0.1 , 4 ]
     * @default 1
     */
    AttenuationRollOff?:number;
    ChannelMask?:number;
    DistanceAttenuation?:boolean;
    /**
     * [ 0.1 , 3600.0 ]
     * @default 0.5
     */
    Duration?:number;
    /**
     * [ 0.0 , 3600.0 ]
     * @default 0.0
     */
    DurationRandom?:number;
    /**
     * [ -4.0 , 4.0 ]
     * @default 0.0
     */
    FrequencyScale?:number;
    FrequencyScaleAutomate?:boolean;
    /**
     * [ 0.0 , 4.0 ]
     * @default 0.0
     */
    FrequencyScaleRandom?:number;
    /**
     * [ -96.3 , 24.0 ]
     * @default 0.0
     */
    GainOffset?:number;
    GainOffsetAutomate?:boolean;
    /**
     * [ 0 , 48.0 ]
     * @default 0.0
     */
    GainOffsetRandom?:number;
    /**
     * [ 1 , 100 ]
     * @default 10
     */
    MinDistance?:number;
    NoiseColor?:number;
    /**
     * [ 1 , 8 ]
     * @default 1
     */
    Oversampling?:number;
    /**
     * [ 0.1 , 10.0 ]
     * @default 1.0
     */
    PlaybackRate?:number;
    /**
     * [ -4.0 , 4.0 ]
     * @default 0.0
     */
    QFactorScale?:number;
    QFactorScaleAutomate?:boolean;
    /**
     * [ 0.0 , 4.0 ]
     * @default 0.0
     */
    QFactorScaleRandom?:number;
    /**
     * [ -50.0 , 50.0 ]
     * @default 0
     */
    Speed?:number;
    SpeedAutomate?:boolean;
    /**
     * [ 0 , 50 ]
     * @default 10
     */
    SpeedPointSpeedRandom?:number;
    /**
     * [ 0 , 1 ]
     * @default .5
     */
    SpeedPointTimeRandom?:number;
    /**
     * [ 0 , 50 ]
     * @default 0.0
     */
    SpeedRandom?:number;
    /**
     * [ 0 , 1 ]
     * @default 1
     */
    VelocityDynamicRange?:number;
}

/**
 * (Plugin ID : 183)
(Class ID : 11993090)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SoundSeedGrain extends WwiseObject{
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    Amplitude?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AmplitudeMod1Depth?:number;
    AmplitudeMod1Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AmplitudeMod2Depth?:number;
    AmplitudeMod2Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AmplitudeMod3Depth?:number;
    AmplitudeMod3Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    AmplitudeMod4Depth?:number;
    AmplitudeMod4Quantization?:number;
    /**
     * [ 0 , 5000 ]
     * @default 10
     */
    Attack?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    AttackMod1Depth?:number;
    AttackMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    AttackMod2Depth?:number;
    AttackMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    AttackMod3Depth?:number;
    AttackMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    AttackMod4Depth?:number;
    AttackMod4Quantization?:number;
    /**
     * [ -180 , 180 ]
     * @default 0
     */
    Azimuth?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    AzimuthMod1Depth?:number;
    AzimuthMod1Quantization?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    AzimuthMod2Depth?:number;
    AzimuthMod2Quantization?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    AzimuthMod3Depth?:number;
    AzimuthMod3Quantization?:number;
    /**
     * [ 0 , 180 ]
     * @default 0
     */
    AzimuthMod4Depth?:number;
    AzimuthMod4Quantization?:number;
    /**
     * [ 0.02 , 10000.0 ]
     * @default 1000
     */
    Duration?:number;
    DurationLink?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMod1Depth?:number;
    DurationMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMod2Depth?:number;
    DurationMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMod3Depth?:number;
    DurationMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMod4Depth?:number;
    DurationMod4Quantization?:number;
    /**
     * [ 0.001 , 1000 ]
     * @default 1
     */
    DurationMultiplier?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMultiplierMod1Depth?:number;
    DurationMultiplierMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMultiplierMod2Depth?:number;
    DurationMultiplierMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMultiplierMod3Depth?:number;
    DurationMultiplierMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    DurationMultiplierMod4Depth?:number;
    DurationMultiplierMod4Quantization?:number;
    /**
     * [ -90 , 90 ]
     * @default 0
     */
    Elevation?:number;
    /**
     * [ 0 , 90.0 ]
     * @default 0
     */
    ElevationMod1Depth?:number;
    ElevationMod1Quantization?:number;
    /**
     * [ 0 , 90.0 ]
     * @default 0
     */
    ElevationMod2Depth?:number;
    ElevationMod2Quantization?:number;
    /**
     * [ 0 , 90.0 ]
     * @default 0
     */
    ElevationMod3Depth?:number;
    ElevationMod3Quantization?:number;
    /**
     * [ 0 , 90.0 ]
     * @default 0
     */
    ElevationMod4Depth?:number;
    ElevationMod4Quantization?:number;
    EnvelopeType?:number;
    /**
     * [ 20 , 20000 ]
     * @default 20000
     */
    FilterFreq?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    FilterFreqMod1Depth?:number;
    FilterFreqMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    FilterFreqMod2Depth?:number;
    FilterFreqMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    FilterFreqMod3Depth?:number;
    FilterFreqMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    FilterFreqMod4Depth?:number;
    FilterFreqMod4Quantization?:number;
    /**
     * [ 0.1 , 100 ]
     * @default 0.707
     */
    FilterQ?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    FilterQMod1Depth?:number;
    FilterQMod1Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    FilterQMod2Depth?:number;
    FilterQMod2Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    FilterQMod3Depth?:number;
    FilterQMod3Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    FilterQMod4Depth?:number;
    FilterQMod4Quantization?:number;
    FilterType?:number;
    /**
     * [ 0.02 , 20000 ]
     * @default 1
     */
    GrainRate?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainRateMod1Depth?:number;
    GrainRateMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainRateMod2Depth?:number;
    GrainRateMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainRateMod3Depth?:number;
    GrainRateMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainRateMod4Depth?:number;
    GrainRateMod4Quantization?:number;
    /**
     * [ 0.05 , 50000 ]
     * @default 1000
     */
    GrainTime?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainTimeMod1Depth?:number;
    GrainTimeMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainTimeMod2Depth?:number;
    GrainTimeMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainTimeMod3Depth?:number;
    GrainTimeMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    GrainTimeMod4Depth?:number;
    GrainTimeMod4Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    MarkerSelect?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    MarkerSelectMod1Depth?:number;
    MarkerSelectMod1Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    MarkerSelectMod2Depth?:number;
    MarkerSelectMod2Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    MarkerSelectMod3Depth?:number;
    MarkerSelectMod3Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    MarkerSelectMod4Depth?:number;
    MarkerSelectMod4Quantization?:number;
    /**
     * [ 1 , 2048 ]
     * @default 256
     */
    MaxNumGrains?:number;
    MidiMapTranspose?:boolean;
    /**
     * [ -100 , 100 ]
     * @default 100
     */
    ModAmount1?:number;
    /**
     * [ -100 , 100 ]
     * @default 100
     */
    ModAmount2?:number;
    /**
     * [ -100 , 100 ]
     * @default 100
     */
    ModAmount3?:number;
    /**
     * [ -100 , 100 ]
     * @default 100
     */
    ModAmount4?:number;
    /**
     * [ 0.05 , 120000 ]
     * @default 1000
     */
    ModPeriod1?:number;
    /**
     * [ 0.05 , 120000 ]
     * @default 1000
     */
    ModPeriod2?:number;
    /**
     * [ 0.05 , 120000 ]
     * @default 1000
     */
    ModPeriod3?:number;
    /**
     * [ 0.05 , 120000 ]
     * @default 1000
     */
    ModPeriod4?:number;
    /**
     * [ 0.008 , 20000 ]
     * @default 20000
     */
    ModRate1?:number;
    /**
     * [ 0.008 , 20000 ]
     * @default 20000
     */
    ModRate2?:number;
    /**
     * [ 0.008 , 20000 ]
     * @default 20000
     */
    ModRate3?:number;
    /**
     * [ 0.008 , 20000 ]
     * @default 20000
     */
    ModRate4?:number;
    ModSelect1?:number;
    ModSelect2?:number;
    ModSelect3?:number;
    ModSelect4?:number;
    ModWaveform1?:number;
    ModWaveform2?:number;
    ModWaveform3?:number;
    ModWaveform4?:number;
    /**
     * [ -100 , 100 ]
     * @default 0
     */
    Offset?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OffsetMod1Depth?:number;
    OffsetMod1Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OffsetMod2Depth?:number;
    OffsetMod2Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OffsetMod3Depth?:number;
    OffsetMod3Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OffsetMod4Depth?:number;
    OffsetMod4Quantization?:number;
    OutputChannelConfig?:number;
    /**
     * [ -96 , 24 ]
     * @default 0
     */
    OutputLevel?:number;
    PositioningSelect?:number;
    QuantizeToMarkers?:boolean;
    /**
     * [ 0 , 5000 ]
     * @default 10
     */
    Release?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    ReleaseMod1Depth?:number;
    ReleaseMod1Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    ReleaseMod2Depth?:number;
    ReleaseMod2Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    ReleaseMod3Depth?:number;
    ReleaseMod3Quantization?:number;
    /**
     * [ -10 , 10 ]
     * @default 0
     */
    ReleaseMod4Depth?:number;
    ReleaseMod4Quantization?:number;
    SelectFreqTimeGrain?:number;
    /**
     * [ -4 , 4 ]
     * @default 1
     */
    Speed?:number;
    /**
     * [ 0 , 4 ]
     * @default 0
     */
    SpeedMod1Depth?:number;
    SpeedMod1Quantization?:number;
    /**
     * [ 0 , 4 ]
     * @default 0
     */
    SpeedMod2Depth?:number;
    SpeedMod2Quantization?:number;
    /**
     * [ 0 , 4 ]
     * @default 0
     */
    SpeedMod3Depth?:number;
    SpeedMod3Quantization?:number;
    /**
     * [ 0 , 4 ]
     * @default 0
     */
    SpeedMod4Depth?:number;
    SpeedMod4Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Spread?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    SpreadMod1Depth?:number;
    SpreadMod1Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    SpreadMod2Depth?:number;
    SpreadMod2Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    SpreadMod3Depth?:number;
    SpreadMod3Quantization?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    SpreadMod4Depth?:number;
    SpreadMod4Quantization?:number;
    /**
     * [ -4800 , 4800 ]
     * @default 0
     */
    Transpose?:number;
    /**
     * [ 0 , 4800 ]
     * @default 0
     */
    TransposeMod1Depth?:number;
    TransposeMod1Quantization?:number;
    /**
     * [ 0 , 4800 ]
     * @default 0
     */
    TransposeMod2Depth?:number;
    TransposeMod2Quantization?:number;
    /**
     * [ 0 , 4800 ]
     * @default 0
     */
    TransposeMod3Depth?:number;
    TransposeMod3Quantization?:number;
    /**
     * [ 0 , 4800 ]
     * @default 0
     */
    TransposeMod4Depth?:number;
    TransposeMod4Quantization?:number;
    /**
     * [ 0 , 127 ]
     * @default 60
     */
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
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverA?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverB?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverC?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverD?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverE?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverF?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
    DriverG?:number;
    /**
     * [ 0 , 1 ]
     * @default 0.0
     */
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
    /**
     * [ 0.001 , 3600 ]
     * @default 1.0
     */
    Length?:number;
    /**
     * [ 0 , 3600 ]
     * @default 0.0
     */
    LengthMax?:number;
    /**
     * [ -3600 , 0 ]
     * @default 0.0
     */
    LengthMin?:number;
}

/**
 * (Plugin ID : 148)
(Class ID : 9699330)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface WwiseSynthOne extends WwiseObject{
    /**
     * [ 20 , 20000 ]
     * @default 1000.0
     */
    BaseFrequency?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    FmAmount?:number;
    FrequencyMode?:number;
    /**
     * [ -96.0 , 24.0 ]
     * @default -96.0
     */
    NoiseLevel?:number;
    NoiseShape?:number;
    OperationMode?:number;
    Osc1Invert?:boolean;
    /**
     * [ -96.0 , 24.0 ]
     * @default -6.0
     */
    Osc1Level?:number;
    /**
     * [ 0.0 , 100.0 ]
     * @default 50.0
     */
    Osc1Pwm?:number;
    /**
     * [ -3600 , 3600 ]
     * @default 0
     */
    Osc1Transpose?:number;
    Osc1Waveform?:number;
    Osc2Invert?:boolean;
    /**
     * [ -96.0 , 24.0 ]
     * @default -6.0
     */
    Osc2Level?:number;
    /**
     * [ 0.0 , 100.0 ]
     * @default 50
     */
    Osc2Pwm?:number;
    /**
     * [ -3600 , 3600 ]
     * @default 0
     */
    Osc2Transpose?:number;
    Osc2Waveform?:number;
    /**
     * [ -96.0 , 24.0 ]
     * @default 0.0
     */
    OutputLevel?:number;
    OverSampling?:boolean;
}

/**
 * (Plugin ID : 6)
(Class ID : 393232)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface State extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 7)
(Class ID : 458768)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface StateGroup extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    /**
     * [ 0 , 60 ]
     * @default 1
     */
    DefaultTransitionTime?:number;
    OverrideColor?:boolean;
}

/**
 * (Plugin ID : 20)
(Class ID : 1310736)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface Switch extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    CenterPercentage?:number;
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendHPF?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    GameAuxSendLPF?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    GameAuxSendVolume?:number;
    /**
     * [ 0 , 96 ]
     * @default 12
     */
    HdrActiveRange?:number;
    HdrEnableEnvelope?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 20
     */
    HdrEnvelopeSensitivity?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Highpass?:number;
    HoldEmitterPositionOrientation?:boolean;
    HoldListenerOrientation?:boolean;
    IgnoreParentMaxSoundInstance?:boolean;
    Inclusion?:boolean;
    /**
     * [ 0 , 3600 ]
     * @default 0
     */
    InitialDelay?:number;
    IsGlobalLimit?:number;
    ListenerRelativeRouting?:boolean;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    Lowpass?:number;
    /**
     * [ -96 , 96 ]
     * @default 0
     */
    MakeUpGain?:number;
    MaxReachedBehavior?:number;
    /**
     * [ 1 , 1000 ]
     * @default 50
     */
    MaxSoundPerInstance?:number;
    MidiBreakOnNoteOff?:boolean;
    /**
     * [ 0 , 65535 ]
     * @default 65535
     */
    MidiChannelFilter?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiKeyFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiKeyFilterMin?:number;
    MidiPlayOnNoteType?:number;
    /**
     * [ 0 , 127 ]
     * @default 60
     */
    MidiTrackingRootNote?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiTransposition?:number;
    /**
     * [ 0 , 127 ]
     * @default 127
     */
    MidiVelocityFilterMax?:number;
    /**
     * [ 0 , 127 ]
     * @default 0
     */
    MidiVelocityFilterMin?:number;
    /**
     * [ -127 , 127 ]
     * @default 0
     */
    MidiVelocityOffset?:number;
    OutputBus?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusHighpass?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    OutputBusLowpass?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ -2400 , 2400 ]
     * @default 0
     */
    Pitch?:number;
    /**
     * [ 0 , 100 ]
     * @default 50
     */
    Priority?:number;
    PriorityDistanceFactor?:boolean;
    /**
     * [ -100 , 100 ]
     * @default -10
     */
    PriorityDistanceOffset?:number;
    ReflectionsAuxSend?:any;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    ReflectionsVolume?:number;
    RenderEffect0?:boolean;
    RenderEffect1?:boolean;
    RenderEffect2?:boolean;
    RenderEffect3?:boolean;
    SpeakerPanning?:number;
    /**
     * [ 0 , 100 ]
     * @default 100
     */
    SpeakerPanning3DSpatializationMix?:number;
    SwitchBehavior?:number;
    SwitchGroupOrStateGroup?:any;
    UseGameAuxSends?:boolean;
    UseMaxSoundPerInstance?:boolean;
    UserAuxSend0?:any;
    UserAuxSend1?:any;
    UserAuxSend2?:any;
    UserAuxSend3?:any;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendHPF3?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF0?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF1?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF2?:number;
    /**
     * [ 0 , 100 ]
     * @default 0
     */
    UserAuxSendLPF3?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume0?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume1?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume2?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    UserAuxSendVolume3?:number;
    VirtualVoiceQueueBehavior?:number;
    /**
     * [ -200 , 200 ]
     * @default 0
     */
    Volume?:number;
    /**
     * [ 0.001 , 100 ]
     * @default 50
     */
    Weight?:number;
}

/**
 * (Plugin ID : 19)
(Class ID : 1245200)
 Refer to ak.wwise.core.object.setProperty and ak.wwise.core.object.setReference to set properties and references with WAAPI. Also refer to Querying the Wwise Project to learn how to query properties and references.

 */
export interface SwitchGroup extends WwiseObject{
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
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
    /**
     * [ -200 , 200 ]
     * @default 0
     */
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
    /**
     * [ 0 , 26 ]
     * @default 0
     */
    Color?:number;
    Inclusion?:boolean;
    OverrideColor?:boolean;
}

