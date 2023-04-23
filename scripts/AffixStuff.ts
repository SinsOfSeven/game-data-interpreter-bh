import { TextMap } from "../types/types";
import LoadMap from "../generators/TextMapLoader.js"
import { createWriteStream } from "fs"

import EquipSkillData from "../data/EquipSkillMetaData.json" assert {type:"json"}
import AffixData from "../data/StigmataRuneAffixMetaData.json" assert {type:"json"}
import RerollData from "../data/AffixTreeNode_4.5.json" assert {type:"json"}
//import ItemData from "../data/ItemMetaData.json" assert {type:"json"}

//import { AffixItem } from "../interface/Item"
import { AffixSimple } from "../interface/Affix"

//ItemMetaData = MaterialData_4.5
const text_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

const output_path = "./generated/AffixStuff"
const file_ext = ".md"
const writer = createWriteStream(output_path+file_ext)

//const AffixItems = new Map<number,AffixItem>()
const Affixes = new Map<number,AffixSimple>()
const Skills = new Map<number,any>()

interface Refinement {
  id: number;
  refineCost_0to1: RefineCost[];
  refineCost_1: RefineCost[];
  refineCost_1to2: RefineCost[];
  refineCost_2: RefineCost[];
  refineCost_core: RefineCost[];
  refineCost_lock1: RefineCost[];
}

interface RefineCost {
  materialID: number;
  materialNum: number;
}

function getMatName(id:number):string{
    switch(id){
        case 8101: return "Normal Crystal Core"
        case 8003: return "Crystal Flashtank"
        case 8001: return "Wafer Dataflow"
        case 8009: return "Wafer Stabilizer"
        default: return "UNKNOWN"
    }
}
function getTier(tier:number):string{
    switch(tier){
        case 1: return "⚀"
        case 2: return "⚁"
        case 3: return "⚂"
        default: return ""
    }
}

function getRefinement(ref:Refinement){
    return {
        un1:{//ref.refineCost_0to1
            name: getMatName(ref.refineCost_0to1[0].materialID),
            quant: ref.refineCost_0to1[0].materialNum
        },
        un2:{//ref.refineCost_1to2
            name: getMatName(ref.refineCost_1to2[0].materialID),
            quant: ref.refineCost_1to2[0].materialNum,
            name2: getMatName(ref.refineCost_1to2[1].materialID),
            quant2: ref.refineCost_1to2[1].materialNum
        },
        up1:{//ref.refineCost_1
            name: getMatName(ref.refineCost_1[0].materialID),
            quant: ref.refineCost_1[0].materialNum
        },
        up2:{//ref.refineCost_2
            name: getMatName(ref.refineCost_2[0].materialID),
            quant: ref.refineCost_2[0].materialNum
        },
        //special
        refine:{//ref.refineCost_core
            name: getMatName(ref.refineCost_core[0].materialID),
            quant: ref.refineCost_core[0].materialNum
        },
        lock:{//ref.refineCost_lock1
            name: getMatName(ref.refineCost_lock1[0].materialID),
            quant: ref.refineCost_lock1[0].materialNum,
            name2: getMatName(ref.refineCost_lock1[1].materialID),
            quant2: ref.refineCost_lock1[1].materialNum
        },
    }
}

setTimeout(() => {
    EquipSkillData.forEach(element => {
        Skills.set(element.ID,{
            Name:text_map[element.SkillName.Hash],
            Description:text_map[element.SkillDisplay.Hash],
        })
    })
    AffixData.forEach(element => {
        Affixes.set(element.AffixID,{
            SkillName: Skills.get(element.PropID).Name,
            SkillDescription: Skills.get(element.PropID).Description,
            Level: element.Level,
            Min: element.ValueMin,
            Max: element.ValueMax,
            Step: element.ValueStep,
            Type: element.AffixSkillType,
            Mono: text_map[element.NameMono.Hash],
            Duo: text_map[element.NameDual.Hash],
        })
    })
    writer.write("## Reroll Types\n")
    RerollData.forEach(element => {
        const R = getRefinement(element)
        writer.write(`### ${element.id+2}★ Stigmata Affix Upgrade Costs
\`\`\`
Unlock   : ${R.un1.quant} ${R.un1.name}
Unlock2  : ${R.un2.quant2} ${R.un2.name2}, ${R.un2.quant} ${R.un2.name}
Upgrade  : ${R.up1.quant} ${R.up1.name}
Upgrade2 : ${R.up2.quant} ${R.up2.name}
Refine   : ${R.refine.quant} ${R.refine.name}
Lock     : ${R.lock.quant2} ${R.lock.name2}, ${R.lock.quant} ${R.lock.name}
\`\`\`
`)
    })
    writer.write("## Affix Types\n")
    Affixes.forEach((element,key) => {
        //let out = ""
        //for(let i=element.Min;i<=element.Max;i+=element.Step) out += Math.floor(i*10000)/10000 + ","
        if(element.Type!==0){writer.write(
`### ${getTier(element.Level)} ${element.SkillDescription.replace(/#.*?]/g,"X")} ${key}
\`\`\`
Min  :${element.Min}
Max  :${element.Max}
Step :${element.Step}
\`\`\`
`)}

        
    })


}, 3000)

//list
// Types
// 0 Disable?? HP ATK DEF CRATE HP/s -SP% BIO MECH PSY +FIRE +ICE +LIGHT -FIRE% -ICE% -LIGHT% SP ATK CDMG% SP/s
// 1 ATK "ATK Increase"
// 2 HP HP/s DEF "Survivability Boost"
// 3 SP SP/s -SP% "Energy Boost"
// 4 CDMG CRATE
// 5 ADDED ELE RESIST ELE "Elemental Effect"
// 6 Shield DMG "Shield DMG Bonus"