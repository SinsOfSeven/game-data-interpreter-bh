export default interface SinDemonExMonster {
  BossId: number
  BossGroupId: number
  MonsterId: number
  HardLevel: number
  HardLevelGroup: number
  MonsterHp: number
  MonsterLevel: number
  MonsterBaseScore: number
  BossNextId: number
  BossAttribute: number
  DefaultShowSkillDetail: boolean
  TimesScore: number
  ExtraTimeScore: number
  BossName: string
  BossPrefabPath: string
  SceneName: string
  BossSkillTipsList: number[]
  BossDesc: Hash
  ImagePath: string
  RestrictList: string
  EventMark: Hash
  CornerMarkPath: string
  UpTagList: TagList[]
  DownTagList: TagList[]
}

interface TagList {
  TagID: number
  TagComment: Hash
}

interface Hash {
  key: number
  hash: number
}

export interface SinDemonEXSimple {
  BossId: number
  Name: string
  Desc: string
  GroupId: number
  MonsterId: number
  HardLevel: number
  HardGroup: number
  MonsterHp: number
  MonsterLevel: number
  NextId: number
  Attribute: number
  BaseScore: number
  ExtraScore: number
  //BossPrefabPath: string
  //SceneName: string
  SkillTipsList: number[]
  
}