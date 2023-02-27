export default interface CustomMonster{
    Name: string
    Desc: string
    MonsterId: number
    HardLevel: {[key:number]:number}
    HP:number
    ATK:number
    DEF:number
    HPRatio:number
    ATKRatio:number
    DEFRatio:number
    EleRes:number
    SPDRatio:number
    Elite:boolean
    //MonsterLevel: number
    Attribute: number
    //SkillTipsList: number[]
    //Ai:string
    HPSeg:number
    Abilities:string
    //CDs:Map<string,number>
}

export interface MemorialBoss{
    Name: string
    Desc: string
    GroupId: number
    MonsterId: number
    //HardLevel: {[key:number]:number}
    MonsterHp: number
    HP:number
    ATK:number
    DEF:number
    Elite:boolean
    HPRatio:number
    ATKRatio:number
    DEFRatio:number
    EleRes:number
    SPDRatio:number
    //MonsterLevel: number
    NextUid: number
    Attribute: number
    BaseScore: number
    ExtraScore: number
    //BossPrefabPath: string
    //SceneName: string
    SkillTipsList: number[]
    //Attribute:number
    //Ai:string
    HPSeg:number
    Abilities:string
    CDs:Map<string,number>
}