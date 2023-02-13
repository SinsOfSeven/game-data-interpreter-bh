export type Gender = "Male" | "Female" | "Unknown" | "Non-Binary"
export type Race = "Human" | "Herrscher" | "Intellegent Machine" | "Alien" | "Stigmata" | "Alien Machine"
export type Org = "None" | "Schicksal" | "Anti Entropy" | "World Serpent" | "MOTH" | "Mount Taixuan"
export type Role = 0|1|2|3|4|5|6|7|8|9|10|11|101|102|103|104|105|106|107
export type Attr = "NONE" | "PSY" | "BIO" | "MECH" | "QUA" | "IMG" | "GXY"

export type TextMapOld = {ID:{Hash:number},Text:string}
export interface TextMap {[key:number]:string}

export default Role