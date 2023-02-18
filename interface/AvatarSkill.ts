export default interface AvatarSkill {
  SkillId: number
  Name: Hash
  Info: Hash
  ShowOrder: number
  UnlockLv: number
  UnlockStar: number
  SkillStep: Hash
  IconPath: string
  IconPathInLevel: string
  ButtonName: string
  ParamBase_1: number
  ParamLogic_1: number
  ParamSubID_1: number
  ParamSubIndex_1: number
  ParamBase_2: number
  ParamLogic_2: number
  ParamSubID_2: number
  ParamSubIndex_2: number
  ParamBase_3: number
  ParamLogic_3: number
  ParamSubID_3: number
  ParamSubIndex_3: number
  CanTry: number
  TagList: any[]
  UnlockItemList: any[]
}

interface Hash {
  Hash: number
}