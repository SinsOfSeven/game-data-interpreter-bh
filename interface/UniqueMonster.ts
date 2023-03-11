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

export interface UniqueMonsterSimple {
  //Uid:number
  //Match:string
  BossId:string
  isBoss:boolean
  MonsterId:number
  Name:string
  HpRatio:number
  AtkRatio:number
  DefRatio:number
  SpdRatio:number
  HpSegs:number
  Abilities:string

  //CDs:Map<string,number>
}