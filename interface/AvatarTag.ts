export default interface AvatarTag {
    AvatarTagID: number
    TagID: number
    TagSecondDesc: Hash
    UnlockSkillIDList: number[]
    UnlockSubSkillIDList: number[]
}

interface Hash {
    Hash: number
}