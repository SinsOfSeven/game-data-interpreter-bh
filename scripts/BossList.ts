import { HardSimple } from "../interface/NPCLevel.js"
import { SinDemonEXSimple } from "../interface/SinDemonExMonster.js"
import UniqueMonster from "../interface/UniqueMonster.js"
import { UniqueMonsterSimple } from "../interface/UniqueMonster.js"
import { MonsterConfigSimple } from "../interface/MonsterConfig.js"
import { EliteAbilitySimple } from "../interface/EliteAbility.js"

import { createWriteStream, realpathSync } from "fs"

//import HardLevels from "../data/NPCLevelMetaData.json" assert {type:"json"}
//import ArenaBosses from "../data/SinDemonExMonsterMetaData.json" assert {type:"json"}
import MonsterConfigs from "../data/MonsterConfigMetaData.json" assert {type:"json"}
import UniqueMonsters from "../data/UniqueMonsterMetaData.json" assert {type:"json"}
import EliteAbilites from "../data/EliteAbilityMetaData.json" assert {type:"json"}

import { TextMap } from "../types/types";
import LoadMap from "../generators/TextMapLoader.js"
const text_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

const PropertiesMap = new Map<string,MonsterConfigSimple>()
//const BossMap = new Map<string,SinDemonEXSimple>()
//const HardMap = new Map<string,HardSimple>()
const UniqueMap = new Map<string,UniqueMonsterSimple>()
const EliteAbilityMap = new Map<string,EliteAbilitySimple>()

const output_path = "./generated/EliteAbilities_And_Enemies"
let file_ext = ".md"
const CSV_MODE = false
if(CSV_MODE){
    file_ext='.csv'
}
const writer = createWriteStream(output_path+file_ext)
//const MyMap = new Map<number,MemorialBoss>()

function createID(boss:SinDemonEXSimple):string{
    switch(boss.BaseScore+boss.ExtraScore){
        case 2400:
        case 4800:
        case 9600:
        case 19200:
        case 38400:
        case 48000: 
            return `${getBracket(boss.BossId)}_${getRank(boss.MonsterLevel)}_UP`

        case 2000:
        case 4000:
        case 8000:
        case 16000:
        case 32000:
        case 40000: 
            return `${getBracket(boss.BossId)}_${getRank(boss.MonsterLevel)}_DW`

        case 72000:
        case 144000:
        case 288000: 
            return `${getBracket(boss.BossId)}_${getRank(boss.MonsterLevel)}_EX`
            
        default: 
            return ""
    }
}

function keyToString(key:KeyType):string{
    return key.Name+","
    +key.Type+","
    //+key.Config//+","
    //+key.Ai//+","
}
function hardToString(level:number,hardgroup:number):string{
    return level+','+hardgroup
}
function getConfigFix(str:string):string|boolean{
    if(str.includes("Sin")||str.includes("SSS")) return "Memorial"
    if(str.includes("Abyss")) return "Abyss"
    if(str.includes("Rouge")||str.includes("Godwar")) return "Elysian Realm"
    return false
}
function getRank(num:number):string{
    switch(num){
        case 1:return 'C'
        case 2:return 'B'
        case 3:return 'A'
        case 4:return 'S'
        case 5:return 'SS'
        case 6:return 'SSS'
        case 11:return 'EX1'
        case 12:return 'EX2'
        case 13:return 'EX3'
        default:return ''
    }
}
function getAttribute(num:number|undefined):string{
    switch(num){
        case 0: return "NONE"
        case 1: return "BIO"
        case 2: return "PSY"
        case 3: return "MECH"
        case 4: return "QUA"
        case 5: return "IMG"
        case 6: return "GXY"//It's a meme fml you nerds
        default: return "UKNOWN"
    }
}
function getBracket(bossID:number):string{
    const id = Number(bossID.toString().slice(-2))
    switch(true){
        case id< 6: return "Basics"
        case id<11: return "Elites"
        case id<21: return "Masters"
        case id<27: return "Exalted"
        default: return ""
    }
}

interface KeyType {
    Name:string
    Type:string
    Config:string
    Ai:string
}
setTimeout(()=>{
    //build maps
    // for (const Boss of ArenaBosses) {
    //     BossMap.set(Boss.MonsterId+","+Boss.BossId,{
    //         BossId:Boss.BossId,
    //         Name:Boss.BossName,
    //         Desc:text_map[Boss.BossDesc.hash],
    //         GroupId:Boss.BossGroupId,
    //         MonsterId:Boss.MonsterId,
    //         HardLevel:Boss.HardLevel,
    //         HardGroup:Boss.HardLevelGroup,
    //         MonsterHp:Boss.MonsterHp,
    //         MonsterLevel:Boss.MonsterLevel,
    //         NextId:Boss.BossNextId,
    //         Attribute:Boss.BossAttribute,
    //         BaseScore:Boss.MonsterBaseScore,
    //         ExtraScore:Boss.ExtraTimeScore,
    //         SkillTipsList:Boss.BossSkillTipsList,
    //     })
    // }
    // for (const Level of HardLevels) {
    //     const key = hardToString(Level.HardLevel,Level.HardLevelGroup)
    //     HardMap.set(key,{
    //         HPRatio:Level.HPRatio,
    //         ATKRatio:Level.ATKRatio,
    //         DEFRatio:Level.DEFRatio,
    //         EleRes:Level.ElementalResistRatio,
    //     })
    // }
    // for (const Ability of EliteAbilites) {
    //     EliteAbilityMap.set(Ability.AbilityName,{
    //         Desc: text_map[Ability.EliteAbilityDesc.Hash],
    //         Name: text_map[Ability.EliteAbilityText.Hash],
    //         Tag: Ability.EliteAbilityTag
    //     })
    // }
    for (const Unique of UniqueMonsters) {            
        //if(Unique.UniqueID==e.MonsterId){
            const keyString = keyToString({
                Name:Unique.MonsterName,
                Type:Unique.TypeName,
                Config:Unique.ConfigType,
                Ai:Unique.AIName,
            })+","+Unique.UniqueID

            // const CDs = new Map<string,number>()
            // for (let index = 0; index < Unique.AttackCDNames.length; index++) {
            //     CDs.set(Unique.AttackCDNames[index],Unique.AttackCDs[index])
            // }
            UniqueMap.set(keyString,{
                //Match:keyString,
                BossId:"",
                isBoss:Boolean(Unique.BossRank)||Unique.MonsterRank==3,
                MonsterId:Unique.UniqueID,
                Name:text_map[Unique.Name.Hash],
                HpRatio:Unique.HPRatio,
                AtkRatio:Unique.AttackRatio,
                DefRatio:Unique.DefenseRatio,
                SpdRatio:Unique.MoveSpeedRatio,
                HpSegs:Unique.HPSegmentNum,
                Abilities:Unique.Abilities,
                //CDs:CDs,
            })
        //}
    }
    for (const Monster of MonsterConfigs){
        const key:KeyType = {
            Name:Monster.MonsterName,
            Type:Monster.TypeName,
            Config:Monster.ConfigType,
            Ai:Monster.AIName,
        }
        const keyString = keyToString(key)
        if(PropertiesMap.get(keyString)==undefined){
            PropertiesMap.set(keyString,{
                //Match:keyString,
                MonsterId:0,
                Attribute:Monster.Nature,
                Elite:Boolean(Monster.EliteType),
                HP:Monster.HP,
                ATK:Monster.Attack,
                DEF:Monster.Defense,
                Config:Monster.ConfigType,
                Ai:Monster.AIName,
            })
        }
    }
//     EliteAbilityMap.forEach(element => {
//         writer.write(`
// ## ${element.Name}

// **${element.Desc}**
// `)
//     })
    //output
    UniqueMap.forEach((element,key) => {
        if(element.isBoss){//keyConfigStart Broke
            const keyConfigStart = key.indexOf(',',key.indexOf(',')+1)+1
            const prop = PropertiesMap.get(key.substring(0,key.lastIndexOf(",")))
            const config = getConfigFix(key.slice(keyConfigStart,key.indexOf(',',keyConfigStart+1)))
            console.log(key.slice(keyConfigStart,key.indexOf(',',keyConfigStart)))
            if(config){
                writer.write(`
## ${config}: ${element.Name}

Attribute:${getAttribute(prop?.Attribute)}, HealthBars: ${element.HpSegs} isElite:${Boolean(prop?.Elite)}
`)
            }
        } 
    })
},250)

