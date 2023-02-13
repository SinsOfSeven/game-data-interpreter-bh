
import simpleRoles from "../generated/roleIDsSimple.json" assert {type:'json'}
import galEvents from "../data/GalEventMetaData.json" assert {type:'json'}
import textmap_cn from "../data/TextMapMultiLangMetaData_cn.json" assert {type:'json'}
import textmap_jp from "../data/TextMapMultiLangMetaData_jp.json" assert {type:'json'}
import textmap_en from "../data/TextMapMultiLangMetaData_en.json" assert {type:'json'}
//import TextMap_cn from "./modules/TextMap_cn.js"
//import TextMap_en from "./modules/TextMap_en.js"
//import TextMap_jp from "./modules/TextMap_jp.js"

const eventFormat = (key1:number, id:number) => {
    const event = galEvents[key1]

    let par1 = event.Parameter1=="0"?"":event.Parameter1
    let par2 = event.Parameter2=="0"?"":event.Parameter2
    let par3 = event.Parameter3=="0"?"":event.Parameter3
    let output = `
    |VOlabel${id} = ${bubbleSwitch(event.Bubble)}
    |VOcntxt${id} = ${"{{audio|}}"} ${}
    |VOcn_rm${id} = ${} 
    |VOcn_tl${id} = ${} 
    |VOjptxt${id} = ${"{{audio|}}"} ${}  
    |VOjp_rm${id} = ${} 
    |VOjp_tl${id} = ${} 
    |VOentxt${id} = ${} 
    |VOnotes${id} = ${par1 + par2 + par3}
    `
}

/*
|VOlabel33 = {{Blue Bubble}} 1
|VOcntxt33 = {{audio|VO_Ngal_Fuk_1_1 (CN).ogg}} 你的黑眼圈很重，是熬夜玩游戏了吗？
|VOcn_rm33 = 
|VOcn_tl33 = 
|VOjptxt33 = {{audio|VO_Ngal_Fuk_1_1 (JP).ogg}} 目にクマができてますよ。徹夜でゲームでもしたんですか？ 
|VOjp_rm33 = 
|VOjp_tl33 = 
|VOentxt33 = Those dark circles... did you stay up all night playing games again?
|VOnotes33 = Between 06:00 and 12:00.
*/

const bubbleSwitch = (bubble:string) => {
    let output
    switch(bubble){
        // case "EmotionNormal01": "{{White Bubble}}"
        //     break
        // case "EmotionNormal02": "{{Blue Bubble}}"
        //     break
        // case "EmotionNormal03": "{{Purple Bubble}}"
        //     break
        // case "EmotionExclaimtion01": "{{Exclamation  Bubble}}"
        //     break
        // case "":
        //     break
        default: bubble
            break
    }
    return output
}


// for (const key in simpleRoles) {
//     if (Object.prototype.hasOwnProperty.call(simpleRoles, key)) {
//         const element = simpleRoles[key];
//         console.log(`==${element.fname}==`)
//         console.log("===Bridge===")
//         console.log("{{Character Voiceovers")
//         for (const key2 in galEvents) {
//             if (Object.prototype.hasOwnProperty.call(galEvents, key2)) {
//                 const element2 = galEvents[key2];
//                 element.ID==element2.RoleID? eventFormat(element2) : null
//             }
//         }
//         console.log("}}")
//     }
// }

