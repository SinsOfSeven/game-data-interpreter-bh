import { createWriteStream } from "fs"
import OnigiriTasks from "../data/AdventureQuestMetaData.json" assert {type:"json"}
import TaskPools from "../data/AdventureQuestPoolMetaData.json" assert {type:"json"}

import { TextMap } from "../types/types";
import LoadMap from "../generators/TextMapLoader.js"
const text_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

const output_path = "./generated/Onigiri"
let file_ext = ".md"
const writer = createWriteStream(output_path+file_ext)


//TaskPool
//8 worker levels
//17 map positions
function getSkillName(id:number):string{
    switch(id){// 201, 202, 203, 204, 205
        case 201: return ":person_running:"//Stamina
        case 202: return ":mortar_board:"//Intellect
        case 203: return ":lips:"//Diplomacy
        case 204: return ":rabbit2:"//Agility
        default: return "Unknown"
    }
}
function getRank(rare:number):string{
    switch(rare){
        case 1: return "C"
        case 2: return "B"
        case 3: return "A"
        case 4: return "S"
        case 5: return "S+"
        default: return "X"
    }
}
function convertID(id:number):{MapPos:number,WorkLevel:string}{
    const idArray = id.toString().split("")
    let out = {MapPos:Number((Number(idArray[0])-1)+""+Number(idArray[1]+1)),WorkLevel:""}
    switch(idArray[3]){
        case '0': out.WorkLevel = "Ⅰ";break
        case '1': out.WorkLevel = "Ⅱ";break
        case '2': out.WorkLevel = "Ⅲ";break
        case '3': out.WorkLevel = "Ⅳ";break
        case '4': out.WorkLevel = "Ⅴ";break
        case '5': out.WorkLevel = "Ⅵ";break
        case '6': out.WorkLevel = "Ⅶ";break
        case '7': out.WorkLevel = "Ⅷ";break
        default: "ERR"
    }
    return out 
}
function getReward(rewardID:number){
    const idArray = rewardID.toString().split("")
    return idArray[3]+idArray[4]+idArray[5]+idArray[6]
}
// Work Level | Rank | Onigiri | Name  | Members Required | Requirement 1 | Requirement 2 
writer.write('XX|Lv|Reward|Onigiri|Hours|Valks|Req1|Req2|Errand\n')
writer.write(':-|:-|:-|:-|:-|:-|:-|:-|:-')
setTimeout(()=>{
    OnigiriTasks.forEach(e => {
        //ID MAPPOSITION,MAPPOSITION 0 WORKERLEVEL RARITY
        let printout
        const time = e.TimeCost/60/60
        const work = convertID(e.QuestId).WorkLevel
        const name = text_map[e.QuestNameText.Hash]
        const cost = Math.floor(e.GrainCost/100)
        const rank = getRank(e.Rarity)
        const reward = getReward(e.QuestDropShow)
        const skill1 = e.NeedTraitList[0]!=undefined?(e.NeedTraitList[0].SkillStrength+getSkillName(e.NeedTraitList[0].SkillID)):""
        const skill2 = e.NeedTraitList[1]!=undefined?(e.NeedTraitList[1].SkillStrength+getSkillName(e.NeedTraitList[1].SkillID)):""
        printout = `${rank} | ${work} | N/A | ${cost} | ${time} | ${e.MinMember} | ${skill1} | ${skill2} | ${name}\n`
        if(e.Rarity < 6){
        //if(e.Rarity < 6 && (work=="Ⅶ"||work=="Ⅷ")){
            writer.write(printout)
        }    
    })
 },1000)
writer.write('\n')