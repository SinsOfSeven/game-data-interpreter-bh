//types
type Gender = "Male" | "Female" | "Unknown" | "Non-Binary"
type Race = "Human" | "Intellegent Machine" | "Alien" | "Stigmata" | "Alien Machine"
type Org = "None" | "Schicksal" | "Anti Entropy" | "World Serpent" | "MOTH" | "Mount Taixuan"
type Role = 1|2|3|4|5|6|7|8|9|10|11|101|102|103|104|105

//classes
class character{
    character_uid:number //unique key
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
class valkyrie extends character{
    job = "Valkyrie"
    role_id:Role //role id
    //role_name
}
class battle_suit extends valkyrie{
    battle_suit_name: string
    //battle_suit_abbr
    battle_suit_id:number //avatar id
    battle_suit_base_id?:number //awakenbase
    weapon_type_id:number
    base_outfit ? : string
    attribute_id:number
    base_rank_id:number
    //ranks = new rank_stats_list(this.base_rank) // Normal, Awakened, SP
    //base_stats = rank_stats_list[this.base_rank]
    ult_id:number
    skills: Array<number>
    tags: Array<number> //like time slow, or fire, charge/combo
}
class augment extends battle_suit{
    augment_ult_id:string
    augment_skills:Array<number>
    augment_tags:Array<number>
}

class skill{
    name:string
    cooldown:number
    sp_cost:number
    charges:number
}
class valkyrie_skill{
    skill_id:number
    unlock_lvl:number
    unlock_rank:number
    summary:string
    description:string
    param_base_1:number
    param_base_2:number
    param_base_3:number
}
class valkyrie_skill_sub extends valkyrie_skill{
    skill_sub_id:number
    param_add_1:number
    param_add_2:number
    param_add_3:number
}
class augment_skill extends valkyrie_skill{}
class augment_skill_sub extends augment_skill{}
//class equipment_skill extends skill{}

class rank_star{
    // constructor(star,sub){
    //     this.star_rank = this.star
    //     this.sub_star = this.sub
    // }
    battle_suit_id:number
}
class rank_stats extends rank_star{
    // constructor(star,sub){
    //     this.star_rank = this.star
    //     this.sub_star = this.rank
    // }
    rank_type:number
    star_rank:number
    sub_star:number
    atk_base:number
    atk_add:number
    crt_base:number
    crt_add:number
    def_base:number
    def_add:number
    hp_base:number
    hp_add:number
    sp_base:number
    sp_add:number
}

// class rank_stats_list{
//     constructor(){}
//     sss = new rank_stats(5,0)
//     ss = new rank_stats(4,0)
//     s = new rank_stats(3,0)
//     a = new rank_stats(2,0)
//     b = new rank_stats(1,0)
// }