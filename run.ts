//Classes
import {battle_suit as BattleSuit} from './classes/character.js'
//Data
import textmap from "./data/Decrypted/TextMap_en.json" assert {type:'json'}
import valkdata from "./data/AvatarData.json" assert {type:'json'}
import valktag_unlock from "./data/AvatarTagUnLock.json" assert {type:'json'}
import taglist from "./data/TagListData.json" assert {type:'json'}
import stardata from "./data/AvatarStarData.json" assert {type:'json'}
import skilldata from "./data/AvatarSkillData.json" assert {type:'json'}
import subskilldata from "./data/AvatarSubSkillData.json" assert {type:'json'}


let HoT = new BattleSuit()

HoT.attribute="PSY"
HoT.race=["Human","Herrscher"]

for (const key in valkdata) {
    if (Object.prototype.hasOwnProperty.call(valkdata, key)) {
        const element = valkdata[key];
        if(element.avatarID===205)
        HoT.weapon_type_id = element.weaponBaseTypeList[0]
        HoT.battle_suit_base_id = element.baseAvatarID
    }
}

console.log(HoT)