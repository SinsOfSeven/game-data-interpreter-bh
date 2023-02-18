import AvatarData from '../data/AvatarStarMetaData.json' assert {type:'json'}

const getStar = (s:number):string => {
    return s==1?"B"
    :s==2?"A"
    :s==3?"S"
    :s==4?"SS"
    :s==5?"SSS"
    :"NoRank"
}
let _7tAtk = (107.802734+64*5.390137)
let HandelATK = (17.5+33.25+49*(1.6625+0.875))
console.log("7t:"+ _7tAtk + ", Handel:" + HandelATK)
for (const itr of AvatarData) {
    
    if(itr.AvatarID == 205){
        let format = `${getStar(itr.Star)}.${itr.SubStar} HoT ATK : ${1.35*(itr.AtkAdd*79 + itr.AtkBase) + _7tAtk + HandelATK + 138 + 6 + 124 + 85}`
        console.log(format)
    }
}
/*
7t
    "AttackBase": 107.802734,
    "AttackAdd": 5.390137,
Handel T
    "AttackBase": 33.25,
    "AttackAdd": 1.6625,
Handel B
    "AttackBase": 17.5,
    "AttackAdd": 0.875,
*/
