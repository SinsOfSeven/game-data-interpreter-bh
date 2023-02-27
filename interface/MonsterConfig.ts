export default interface MonsterConfig {
  MonsterName: string;
  TypeName: string;
  CategoryName: string;
  SubTypeName: string;
  HP: number;
  Attack: number;
  Defense: number;
  Nature: number;
  ConfigFile: string;
  ConfigType: string;
  AIName: string;
  EliteType: number;
  DisplayTitle: string;
}

export interface MonsterConfigSimple {
  //Match:string
  MonsterId:number
  Attribute:number
  HP:number
  ATK:number
  DEF:number
  Elite:boolean
  Config: string
  Ai: string
}