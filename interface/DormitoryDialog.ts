export interface DormitoryDialog {
  DialogID: number
  RoleID: number
  AvatarID: number
  FromHour: number
  ToHour: number
  NeedFurniture: number
  NoFurniture: number
  NeedRole: number
  NoRole: number
  Weight: number
  DialogText: Hash
}

export interface DormitoryEventSequence {
  ID: number
  Type: string
  Avatar: number
  Wait: number
  WaitRandomAdd: number
  TalkPop: string
  TalkTxt: string
  TalkToAvatar: number
  FaceAnimStop: boolean
  FaceAnimType: string
  TriggerAction: string
  TriggerSubAction: string
}

export interface DormitoryEventDialog {
  ID: number
  EventKey: number
  RoleID: number
  AvatarID: number
  TextMap: Hash
  Weight: number
}

interface Hash {
    Hash: number
}
export default DormitoryDialog