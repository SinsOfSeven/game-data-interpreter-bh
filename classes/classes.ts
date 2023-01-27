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
class rank_stats_list{
    constructor(){}
    sss = new rank_stats(5,0)
    ss = new rank_stats(4,0)
    s = new rank_stats(3,0)
    a = new rank_stats(2,0)
    b = new rank_stats(1,0)
}