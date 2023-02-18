export default interface Dialog {
  DialogID: number
  PostDialogIdList: number[]
  DialogType: number
  AvatarID: number
  ScreenSide: number
  Source: string
  Content: Hash[]
  AudioID: string
  Emotion: string
  LipMotion: string
}

interface Content {
  ChatContent: Hash
  ChatDuration: number
}

interface Hash {
  Hash: number
}