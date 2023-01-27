//Classes
import {battle_suit as BattleSuit} from './classes/character.js'
//Data
import textmap from "./data/Decrypted/TextMap_en.json" assert {type:'json'}
import valkdata from "./data/AvatarData.json" assert {type:'json'}
// import valktag_unlock from "./data/AvatarTagUnLock.json" assert {type:'json'}
// import taglist from "./data/TagListData.json" assert {type:'json'}
// import stardata from "./data/AvatarStarData.json" assert {type:'json'}
// import skilldata from "./data/AvatarSkillData.json" assert {type:'json'}
// import subskilldata from "./data/AvatarSubSkillData.json" assert {type:'json'}

let grabItemsFromValkData = (valk: any) => {
    return{
        ID:valk.avatarID,
        role:valk.roleID,
        attr:valk.attribute,
        starup:valk.avatarStarUpType,
        baserank:valk.unlockStar,
        sname:valk.fullName.hash,
        fname:valk.firstName.hash,
        lname:valk.lastName.hash,
        slist:valk.skillList,
        wep:valk.weaponBaseTypeList[0],
        tags:valk.TagUnlockList,
    }
}

let output = new Array<BattleSuit>


for (const iterator of valkdata) {  
    const vals = grabItemsFromValkData(iterator)
    
    for (const key in textmap) {
        if (Object.prototype.hasOwnProperty.call(textmap, key)) {
            const element = textmap[key];
            if(vals.sname === element.Hash) vals.sname = element.Text
            if(vals.fname === element.Hash) vals.fname = element.Text
            if(vals.lname === element.Hash) vals.lname = element.Text
        }
    }

    console.log(vals)
    //output.push(new BattleSuit()

}


// output.forEach(element => {
//     console.log(element)
// })