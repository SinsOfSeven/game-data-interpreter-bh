import { createWriteStream } from "node:fs"
import LoadMap from "../generators/TextMapLoader.js"
import { SkillParamParse, ParamCombine} from "../generators/ParseSkillParams.js"
import { TextMap } from "../types/types.js"
import ElfSkillTrees from "../data/ElfSkillMetaData.json" assert {type:'json'}
import ElfSkillUpgrades from "../data/ElfSkillTreeMetaData.json" assert {type:'json'}

import {ElfSkill,ElfSkillUpgrade,inElfSkill,inElfSkillUpgrade,LevelUpMaterial} from "../interface/ElfSkill"
//Initialize Map
const en_map:TextMap = LoadMap("./generated/textmap_en.ndjson")


//functions
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
    out.SkillInfo = en_map[skill.Info.Hash]?en_map[skill.Info.Hash]:skill.Info.Hash.toString()
        .replaceAll(/<.*?>/g,"")
        const par1 = `${skill.AbilityParamBase_1}-${ParamCombine(skill.MaxLv,skill.AbilityParamAdd_1,skill.AbilityParamBase_1)}`
        const par2 = `${skill.AbilityParamBase_2}-${ParamCombine(skill.MaxLv,skill.AbilityParamAdd_2,skill.AbilityParamBase_2)}`
        const par3 = `${skill.AbilityParamBase_3}-${ParamCombine(skill.MaxLv,skill.AbilityParamAdd_3,skill.AbilityParamBase_3)}`
        out.SkillInfo = SkillParamParse(out.SkillInfo,par1,par2,par3)
    out.SkillTag = en_map[skill.SkillTypeTag.Hash]?en_map[skill.SkillTypeTag.Hash]:skill.SkillTypeTag.Hash.toString()
    return out
}

//logic
setTimeout(() => {
    const writer = createWriteStream('./generated/ElfSkillsSimple.json')
    for (const itr1 of ElfSkillTrees) {
        let out:ElfSkill = createElfSkill(itr1)
        let upgrades:Array<ElfSkillUpgrade> = []
        for (const itr2 of ElfSkillUpgrades) {            
            if(itr1.ElfSkillID === itr2.ElfSkillID){
                let temp:ElfSkillUpgrade = createElfSkillUpgrade(itr2)
                upgrades = upgrades.concat(temp)
            }
        }
        out.Upgrades = upgrades
        writer.write(JSON.stringify(out)+'\n')   
    }
    writer.close()
}, 3000);