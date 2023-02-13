//types
import Attr from "./types/types"
//Classes
import {battle_suit as BattleSuit} from './classes/character.js'
//Data
//import textmap from "./data/TextMapMultiLangMetaData_en.json" assert {type:'json'}
import valkdata from "./data/AvatarMetaData.json" assert {type:'json'}
// import valktag_unlock from "./data/AvatarTagUnLockMetaData.json" assert {type:'json'}
// import taglist from "./data/TagListMetaData.json" assert {type:'json'}
// import stardata from "./data/AvatarStarMetaData.json" assert {type:'json'}
// import skilldata from "./data/AvatarSkillMeta.json" assert {type:'json'}
// import subskilldata from "./data/AvatarSubSkillMetaData.json" assert {type:'json'}

let grabItemsFromValkData = (valk: any) => {
    return{
        ID:valk.AvatarID,
        role:valk.RoleID,
        attr:valk.Attribute,
        starup:valk.AvatarStarUpType,
        baserank:valk.UnlockStar,
        sname:valk.FullName.Hash,
        fname:valk.FirstName.Hash,
        lname:valk.LastName.Hash,
        slist:valk.SkillList,
        wep:valk.WeaponBaseTypeList[0],
        tags:valk.TagUnlockList,
    }
}
let assignAttr = (n:number)=>{
    let out
    switch(n){
        case 1: out = Attr
            break
        case 2:
            break
        case 3:
            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        default:"NONE"
            break
    }
    return out
}

//let BattleSuits = new Array<BattleSuit>

const readValkHashesToBattleSuits = (hashMapPath:string) => {
    const hashMap = require(hashMapPath)
    for (const iterator of valkdata) {  
        const vals = grabItemsFromValkData(iterator)
        
        for (const key in hashMap) {
            if (Object.prototype.hasOwnProperty.call(hashMap, key)) {
                const element = hashMap[key]
                if(vals.sname === element.ID.Hash) vals.sname = element.Text
                if(vals.fname === element.ID.Hash) vals.fname = element.Text
                if(vals.lname === element.ID.Hash) vals.lname = element.Text
            }  
        }
    
        console.log(vals)
        //BattleSuits.push(new BattleSuit())
    
    }
}

readValkHashesToBattleSuits("./data/TextMapMultiLangMetaData_en.json")



// output.forEach(element => {
//     console.log(element)
// })