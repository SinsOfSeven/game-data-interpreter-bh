export default interface EquipSkill {
  ID: number
  SkillName: Hash
  SkillDisplay: Hash
  SkillIconPath: string
  SkillCD: number
  SPCost: number
  SPNeed: number
  MaxChargesCount: number
  TagList: TagList[]
}

interface TagList {
  TagID: number
  TagComment: Hash
}

interface Hash {
  Hash: number
}