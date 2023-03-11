export default interface EliteAbility {
  AbilityName: string
  EliteAbilityDesc: Hash
  EliteAbilityIcon: string
  EliteAbilityText: Hash
  EliteAbilityTag: string
}

interface Hash {
  Hash: number
}

export interface EliteAbilitySimple {
  //AbilityName: string
  Desc: string
  //EliteAbilityIcon: string
  Name: string
  Tag: string
}