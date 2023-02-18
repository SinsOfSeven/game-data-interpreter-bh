//Sort order for equipment select


export default interface EquipmentTag {
  EquipmentID: number
  SpecificAvatarBonus: Bonus[]
  SpecificAvatarBonusSupport: Bonus[]
}

export interface Weapon {
  WeaponID: number
  SpecificAvatarBonus: Bonus[]
  SpecificAvatarBonusSupport: Bonus[]
}

export interface Stigmata {
  StigmataID: number
  SpecificAvatarBonus: Bonus[]
  SpecificAvatarBonusSupport: Bonus[]
}
interface Bonus {
  Pred: number
  Ratio: number
}