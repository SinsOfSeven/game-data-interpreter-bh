import { createWriteStream } from "node:fs"
import LoadMap from "../generators/TextMapLoader.js"
import { TextMap } from "../types/types.js"
const en_map:TextMap = LoadMap("./generated/textmap_en.ndjson")
import ElfSkillTrees from "../data/ElfSkillMetaData.json" assert {type:'json'}
import ElfSkillUpgrades from "../data/ElfSkillTreeMetaData.json" assert {type:'json'}


interface ElfSkill {
    ElfSkillID:number
    ElfName:string
    ElfID:number
    UIPoint:{
        Row:number
        Col:number
    }
    Upgrades:Array<ElfSkillUpgrade>
    SkillName:string
    SkillInfo:string
    SkillTag:string
}
interface ElfSkillUpgrade {
    Level:number
    NeedLevel:number
    StarLevel:number
    Materials:{
        [key:number]:number
    }
}
interface inElfSkill {
    ElfSkillID:number
    ElfID:number
    MaxLv:number
    SkillType:number
    IconType:number
    UnlockStar:number
    UIPointRow:number
    UIPointColumn:number
    IconSpecial:number
    AbilityParamBase_1:number
    AbilityParamAdd_1:number
    AbilityParamBase_2:number
    AbilityParamAdd_2:number
    AbilityParamBase_3:number
    AbilityParamAdd_3:number
    HasNoRestrictionAbility:number
    Name: {
        Hash:number
    }
    Info: {
        Hash:number
    }
    SkillTypeTag: {
        Hash:number
    }
    IconPath:string
    TagList:Array<any>
}
interface inElfSkillUpgrade {
    ElfSkillID:number
    ElfSkillLv:number
    LevelUpStar:number
    NeedElfLevel:number
    LevelUpPreSkill:any
    LevelUpMaterialList:Array<LevelUpMaterial>
}
interface LevelUpMaterial {
    MaterialID:number
    Number:number
}
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
    out.ElfName = ElfNames[skill.ElfID]
    out.UIPoint.Row = skill.UIPointRow
    out.UIPoint.Col = skill.UIPointColumn
    out.SkillName = en_map[skill.Name.Hash]?en_map[skill.Name.Hash]:skill.Name.Hash.toString()
    out.SkillInfo = en_map[skill.Info.Hash]?en_map[skill.Info.Hash]:skill.Info.Hash.toString()
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


