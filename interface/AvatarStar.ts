export default interface AvatarStar {
  AvatarID: number
  Star: number
  SubStar: number
  IconPath: string
  IconPathInLevel: string
  FigurePath: string
  HpBase: number
  HpAdd: number
  SpBase: number
  SpAdd: number
  AtkBase: number
  AtkAdd: number
  DfsBase: number
  DfsAdd: number
  CrtBase: number
  CrtAdd: number
  ChibiIconPath: string
  SkillID: number[]
  SkillUnlockType: number[]
  SkillNodeName: Hash
  SkillNodeDesc: Hash
  SkillUnlockSketchList: Hash[]
  SkillUnlockDescList: Hash[]
}

interface Hash {
  Hash: number
}