export default interface RootObject {
  AvatarSubSkillId: number
  Name: Hash
  Info: Hash
  Brief: Hash
  ShowOrder: number
  SkillId: number
  IgnoreLeader: boolean
  IconPath: string
  UnlockStar: number
  UnlockSubStar: number
  UnlockLv: number
  UnlockLvAdd: number
  MaxLv: number
  UpLevelSubStarNeedList: UpLevelSubStarNeedList[]
  ScoinCalc: boolean
  UnlockScoin: number
  ScoinLvAdd: number
  ItemType: number
  SkillToggle: boolean
  ParamBase_1: number
  ParamAdd_1: number
  ParamBase_2: number
  ParamAdd_2: number
  ParamBase_3: number
  ParamAdd_3: number
  CanTry: boolean
  ArtifactSkillID: number
  UpLevelArtifactNeedList: UpLevelArtifactNeedList[]
  TagList: any[]
}

interface UpLevelArtifactNeedList {
  ArtifactLevel: number
  SubSkillLevel: number
}

interface UpLevelSubStarNeedList {
  Level: number
  StarNeed: number
  SubStarNeed: number
}

interface Hash {
  Hash: number
}