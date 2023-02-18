export default interface UniqueMonster {
  UniqueID: number
  Name: Hash
  MonsterName: string
  TypeName: string
  HPRatio: number
  AttackRatio: number
  DefenseRatio: number
  MoveSpeedRatio: number
  ATKRatios: any[]
  ConfigType: string
  AIName: string
  AttackCDNames: string[]
  AttackCDs: number[]
  Abilities: string
  HPSegmentNum: number
  Scale: number[]
  BossRank: number
  HandBookId: number
  MonsterRank: number
}

interface Hash {
  Hash: number
}