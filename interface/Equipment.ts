interface Equipment {
    ID: number
    Rarity: number
    MaxRarity: number
    SubRarity: number
    SubMaxRarity: number
    Cost: number
    PowerType: number
    MaxLv: number
    ExpType: number
    SellPriceBase: number
    SellPriceAdd: number
    GearExpProvideBase: number
    GearExpPorvideAdd: number
    BaseType: number
    IconPath: string
    ImagePath: string
    HPBase: number
    HPAdd: number
    SPBase: number
    SPAdd: number
    AttackBase: number
    AttackAdd: number
    DefenceBase: number
    DefenceAdd: number
    CriticalBase: number
    CriticalAdd: number
    EvoMaterial: EvoMaterial[]
    EvoID: number
    Prop1ID: number
    Prop1Param1: number
    Prop1Param2: number
    Prop1Param3: number
    Prop1Param1Add: number
    Prop1Param2Add: number
    Prop1Param3Add: number
    Prop2ID: number
    Prop2Param1: number
    Prop2Param2: number
    Prop2Param3: number
    Prop2Param1Add: number
    Prop2Param2Add: number
    Prop2Param3Add: number
    Prop3ID: number
    Prop3Param1: number
    Prop3Param2: number
    Prop3Param3: number
    Prop3Param1Add: number
    Prop3Param2Add: number
    Prop3Param3Add: number
    Protect: boolean
    DisjoinScoinCost: number
    DisjoinAddMaterial: EvoMaterial[]
    LinkIDList: number[]
    SellPriceID: number
    Transcendent: boolean
    Target: number
    GachaMainDropDisplayConfig: any[]
    GachaGiftDropDisplayConfig: any[]
}
interface EvoMaterial {
    ID: number
    Num: number
}
  
interface Hash {
    Hash: number
}

/**
 * Weapon Interface
 */
export interface Weapon extends Equipment {
    ExDisjoinCurrencyCost: number
    ExDisjoinAddMaterial: EvoMaterial[]
    WeaponMainID: number
    WeaponQuality: number
    PreloadEffectFolderPath: string
    WeaponFilterList: number[]
    CollaborationWeaponID: number
    AvatarCustomDisplayID: number
}
/**
 * Stigmata Interface
 */
export interface Stigmata extends Equipment {
    DurabilityMax: number
    SetID: number
    SmallIcon: string
    TattooPath: string
    OffsetX: number
    OffsetY: number
    Scale: number
    AffixTreeId: number
    CanRefine: boolean
    RecycleID: number
    Quality: number
    StigmataMainID: number
    ShortName: Hash
    StigmataFilterList: number[]
    CollaborationSetID: number
}
/**
 * Stigmata 2&3 Set Effect
 */
export interface StigmataSet {
    ID: number
    SetName: Hash
    SetDesc: Hash
    Prop1ID: number
    SpellEffectNum1: number
    Prop1Param1: number
    Prop1Param2: number
    Prop1Param3: number
    Prop1Param1Add: number
    Prop1Param2Add: number
    Prop1Param3Add: number
    Prop2ID: number
    SpellEffectNum2: number
    Prop2Param1: number
    Prop2Param2: number
    Prop2Param3: number
    Prop2Param1Add: number
    Prop2Param2Add: number
    Prop2Param3Add: number
    Prop3ID: number
    SpellEffectNum3: number
    Prop3Param1: number
    Prop3Param2: number
    Prop3Param3: number
    Prop3Param1Add: number
    Prop3Param2Add: number
    Prop3Param3Add: number
}
