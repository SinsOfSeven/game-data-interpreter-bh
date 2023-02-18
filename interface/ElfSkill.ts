export interface inElfSkill {
    ElfSkillID: number
    ElfID: number
    Name: Hash
    Info: Hash
    SkillTypeTag: Hash
    MaxLv: number
    SkillType: number
    IconPath: string
    IconType: number
    UnlockStar: number
    UIPointRow: number
    UIPointColumn: number
    TagList: any[]
    IconSpecial: number
    AbilityParamBase_1: number
    AbilityParamAdd_1: number
    AbilityParamBase_2: number
    AbilityParamAdd_2: number
    AbilityParamBase_3: number
    AbilityParamAdd_3: number
    HasNoRestrictionAbility: number
}

export interface inElfSkillUpgrade {
    ElfSkillID: number
    ElfSkillLv: number
    LevelUpPreSkill: any[]
    LevelUpStar: number
    NeedElfLevel: number
    LevelUpMaterialList: LevelUpMaterial[]
}

export interface LevelUpMaterial {
    MaterialID:number
    Number:number
}
/*
interface EvoMaterial {
  ID: number
  Num: number
}
*/

export interface ElfSkill {
    ElfSkillID:number
    ElfName:string
    ElfID:number
    UIPoint:{
        Row:number
        Col:number
    }
    Upgrades: ElfSkillUpgrade[]
    SkillName:string
    SkillInfo:string
    SkillTag:string
}

export interface ElfSkillUpgrade {
    Level:number
    NeedLevel:number
    StarLevel:number
    Materials:{
        [key:number]:number
    }
}

interface Hash {
    Hash: number
}