import { createWriteStream } from "node:fs"
import LoadMap from "../generators/TextMapLoader.js"
import { SkillParamParse, ParamCombine} from "../generators/ParseSkillParams.js"
import { TextMap } from "../types/types.js"
import ElfSkillTrees from "../data/ElfSkillMetaData.json" assert {type:'json'}
import ElfSkillUpgrades from "../data/ElfSkillTreeMetaData.json" assert {type:'json'}
import {ElfSkill,ElfSkillUpgrade,inElfSkill,inElfSkillUpgrade,LevelUpMaterial} from "../interface/ElfSkill"

const en_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

interface ElfSkillSimple{
    test:string
}
interface ElfSkillsSimple{
    ElfID:number
    ElfName:string
    ElfSkills:[
        [
            {[level:number]:ElfSkillSimple}
        ]
    ]
}
const ElfNames:{[key:number]:string}={
    101:"Blood Embrace",
    102:"Jingwei's Wings",
    103:"Selune's Elegy",
    106:"Book of Fuxi",
    108:"Tesla ZERO",
    109:"Bella",
    110:"Water's Edge",
    111:"Sirin",
    112:"Klein",
    113:"Blade Durandal",
    114:"Elf Elysia",
    115:"Kiana",
}
const MaterialNames:{[key:number]:string}={
    100:"Coin",
    2008:"Advanced Skill Material",
    8641:"Mind Stone"
}
const createElfSkillUpgrade = (skillUp:inElfSkillUpgrade) => {
    let out:ElfSkillUpgrade = {Level:0,NeedLevel:0,StarLevel:0,Materials:{100:0,2008:0,8641:0}}
    out.Level = skillUp.ElfSkillLv?skillUp.ElfSkillLv:0
    out.NeedLevel = skillUp.NeedElfLevel?skillUp.NeedElfLevel:0
    out.StarLevel = skillUp.LevelUpStar?skillUp.LevelUpStar:0
    if(skillUp.LevelUpMaterialList){
        for (const itr of skillUp.LevelUpMaterialList) {
            out.Materials[itr.MaterialID] = itr.Number
        }
    }
    return out
}
const createElfSkill= (skill:inElfSkill)=>{
    let out:ElfSkill = {ElfSkillID:0,ElfID:0,ElfName:"",UIPoint:{Row:0,Col:0},Upgrades:[],SkillName:"",SkillInfo:"",SkillTag:""}
    out.ElfSkillID = skill.ElfSkillID
    out.ElfID = skill.ElfID
    out.ElfName = en_map[skill.Name.Hash]
    out.UIPoint.Row = skill.UIPointRow
    out.UIPoint.Col = skill.UIPointColumn
    out.SkillName = en_map[skill.Name.Hash]?en_map[skill.Name.Hash]:skill.Name.Hash.toString()
    const par1 = `${skill.AbilityParamBase_1}-${ParamCombine(skill.MaxLv,skill.AbilityParamAdd_1,skill.AbilityParamBase_1)}`
    const par2 = `${skill.AbilityParamBase_2}-${ParamCombine(skill.MaxLv,skill.AbilityParamAdd_2,skill.AbilityParamBase_2)}`
    const par3 = `${skill.AbilityParamBase_3}-${ParamCombine(skill.MaxLv,skill.AbilityParamAdd_3,skill.AbilityParamBase_3)}`
    out.SkillInfo = SkillParamParse(en_map[skill.Info.Hash]?en_map[skill.Info.Hash]:skill.Info.Hash.toString().replaceAll(/<.*?>/g,""),par1,par2,par3)
    out.SkillTag = en_map[skill.SkillTypeTag.Hash]?en_map[skill.SkillTypeTag.Hash]:skill.SkillTypeTag.Hash.toString()
    return out
}


setTimeout(() => {
    for (const key in ElfNames) {
        if (Object.prototype.hasOwnProperty.call(ElfNames, key)) {
            const element = ElfNames[key];
            console.log("## ->"+element+"<-")
            console.log("Skill|Row,Col|Star|Mind Stones :unlock: / :arrow_double_up:| Adv. Skill Mats:unlock: / :arrow_double_up:| Coins :arrow_double_up:")
            console.log(":-|:-|:-|:-|:-|:-")
            for (const itr1 of ElfSkillTrees) {
                if(ElfNames[itr1.ElfID] == element){
                    let out:ElfSkill = createElfSkill(itr1)
                    let upgrades:Array<ElfSkillUpgrade> = []
                    let mind:number = 0
                    let mindUn:number = 0
                    let adv:number = 0
                    let advUn:number = 0
                    let coins:number = 0
                    let star:number = 0
                    let unlock:boolean = true
                    for (const itr2 of ElfSkillUpgrades) {            
                        if(itr1.ElfSkillID === itr2.ElfSkillID){
                            let temp:ElfSkillUpgrade = createElfSkillUpgrade(itr2)
                            if(unlock){
                                mindUn = temp.Materials[8641]
                                advUn = temp.Materials[2008]
                                unlock = !unlock
                            }else{ 
                                mind += temp.Materials[8641]
                                adv += temp.Materials[2008]
                            }
                            coins += temp.Materials[100]
                            upgrades = upgrades.concat(temp)
                            star = temp.StarLevel==1
                            ?1:temp.StarLevel==2
                            ?2:temp.StarLevel==4
                            ?3:temp.StarLevel==7
                            ?4:0
                        }
                    }
                    console.log(`${out.SkillName} | ${out.UIPoint.Row},${out.UIPoint.Col} | ${star}:star: | ${mindUn} / ${mind} | ${advUn} / ${adv} | ${coins}`)
                }
            }
            console.log("\n")
        }
    }
}, 3000)


