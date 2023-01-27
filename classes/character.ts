import {Gender, Race, Org, Role, Attr } from "../types/types"


export class character{
    constructor(){}
    character_uid:number = 1 //unique key
    first_name?: string
    last_name?: string
    gender?: Gender
    birthday?: Date
    height?: number
    weight?: number
    measurements?: Array<number> //kek, these are technically obtainable...
    organization?: Array<Org>
    home?: string
    race?: Array<Race>
    voice?: Array<string> //voice actor
    job?: string
}
export class valkyrie extends character{
    constructor(){super()}
    job = "Valkyrie"
    role_id:Role = 0 //role id
    //role_name
}
export class battle_suit extends valkyrie{
    constructor(suit_id:number){
        super()
        this.battle_suit_base_id = suit_id
    }
    battle_suit_name: string =""
    //battle_suit_abbr
    battle_suit_id:number = 0 //avatar id
    battle_suit_base_id?:number //awakenbase
    weapon_type_id:number = 0
    base_outfit ? : string
    attribute:Attr = "NONE"
    base_rank_id:number = 0
    //ranks = new rank_stats_list(this.base_rank) // Normal, Awakened, SP
    //base_stats = rank_stats_list[this.base_rank]
    ult_id:number = 0
    skills: Array<number> = []
    tags: Array<number> = []//like time slow, or fire, charge/combo
}
// export class augment extends battle_suit{
//     constructor(){super()}
//     augment_ult_id:string = ""
//     augment_skills:Array<number> = []
//     augment_tags:Array<number> = []
// }

export default battle_suit