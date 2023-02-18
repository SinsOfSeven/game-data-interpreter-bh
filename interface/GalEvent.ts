export default interface GalEvent {
  GalEventID: number
  GalEventType: number
  Dialogue: Hash
  RoleID: number
  AvatarID: number[]
  DressID: number[]
  StartMotion: string
  StartMotionSpeed: number
  LoopMotion: string
  LoopMotionSpeed: number
  LoopTimes: number
  EndMotion: string
  EndMotionSpeed: number
  AudioType: number
  Audio: string
  AudioDelayTime: number
  Effect: string
  EffectDelayTime: number
  Face: string
  FaceDelayTime: number
  Priority: number
  BubbleSwitch: number
  Bubble: string
  BubbleCoordinate: string
  TouchExp: number
  Condition1: number
  Parameter1: string
  Condition2: number
  Parameter2: string
  Condition3: number
  Parameter3: string
  SubsidiaryEventID: number
  PortraitActive: boolean
}

interface Hash {
  Hash: number
}