import { TextMap } from "../types/types";
import LoadMap from "../generators/TextMapLoader.js"
import { createWriteStream } from "fs"
import BuffData from "../data/GodWarBuffMetaData.json" assert {type:"json"}

interface Signet{
    ID:number
    Name:string
    "Desc":string
    Type:string
    Flamechaser:string
}
interface GeneralSignet extends Signet{
    Upgrades:Array<string>
}
interface ExclusiveSignet extends Signet{
    Valkyrie:string
    "Desc+":string
}

function genType(id:number){
    switch(id){
        case 1: return "Normal"
        case 2: return "Enhanced"
        case 3: return "Core"
        default: return ""
    }
}
function genFC(id:number){
    switch(id.toString(16)){
        //case '0': 
        case '1': return "Kevin - Deliverance"
        case '2': return "Eden - Gold"
        case '3': return "Kalpas - Decimation"
        case '4': return "Su - Bodhi"
        case '5': return "Yae Sakura - Setsuna"
        case '6': return "Mobius - Infinity"
        case '7': return "Hua - Vicissitude"
        case '8': return "Elysia - Ego"
        //case '9': 
        case 'a': return "Aponia - Discipline"
        case 'b': return "Vill-V - Helix"
        case 'c': return "Kosma - Daybreak"
        case 'd': return "Griseo - Stars"
        case 'e': return "Pardofelis - Reverie"
        //case 'f': ;
        default: return ""
    }
}
function scrub(str:string,opt:number=0):string{
    let out = str
    out = out.replace(/\<.*\>(.*)\<\/.*\>/,'$1')
    if(opt===1){
        if(out.includes("Blessing of")) out = out.replace(/Blessing of (.*)/,'$1')
        else if(out.includes(" Blessing")) out = out.replace(/(.*) Blessing/,'$1')
    }
    if(typeof out == null) out = str
    return out
}

const GeneralSignets = new Map<number,GeneralSignet>()
const ExclusiveSignets = new Map<number,ExclusiveSignet>()


const text_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

const output_path = "./generated/SignetStuff"
const file_ext = ".json"
const writer = createWriteStream(output_path+file_ext)



setTimeout(()=>{
    BuffData.forEach(e => {
        if(e.BuffLevel){
            if(e.BuffLevel === 0){}
            else if(e.BuffLevel === 8){
                const ID = Number(e.BuffID.toString().substring(1))
                if(ExclusiveSignets.has(ID) && e.BuffID.toString().startsWith('2')){
                    const work = ExclusiveSignets.get(ID)
                    if(work!=undefined){
                        work["Desc+"] = scrub(text_map[e.BuffDesc.Hash])
                        ExclusiveSignets.set(ID,work)
                    }
                }
                else if(e.BuffID.toString().startsWith('1')){
                    ExclusiveSignets.set(ID,{
                        ID:ID,
                        Flamechaser:"Elysia - Ego",
                        Type:"Exclusive",
                        Name:scrub(text_map[e.BuffName.Hash],1),
                        "Desc":scrub(text_map[e.BuffDesc.Hash]),
                        "Desc+":"",
                        Valkyrie:"Placeholder",
                        
                    })
                }
                //else console.log("Something Went Wrong.")
            }
            else if(GeneralSignets.has(e.BuffID)){
                let work = GeneralSignets.get(e.BuffID)
                if(work!=undefined){
                    const add = text_map[e.BuffUpDesc.Hash]
                    if(add!==undefined){
                        work.Upgrades.push(add)
                        GeneralSignets.set(e.BuffID,work)
                    }
                }
            }
            else{
                GeneralSignets.set(e.BuffID,{
                    ID:e.BuffID,
                    Flamechaser:genFC(e.BuffLevel),
                    Type:genType(e.BuffQuality),//Normal, Enhanced, Core
                    //Name:scrub(text_map[e.BuffName.Hash],2),
                    Name:text_map[e.BuffName.Hash],
                    "Desc":scrub(text_map[e.BuffDesc.Hash]),
                    Upgrades:[text_map[e.BuffUpDesc.Hash]]
                })
            }
        } 
    })

    ExclusiveSignets.forEach(e => console.log(e))
    GeneralSignets.forEach(e => console.log(e))
},3000)

/**
 * Level 0 - 
 * Level 1 - Kevin
 * Level 2 - Eden
 * Level 3 - Kalpas
 * Level 4 - Su
 * Level 5 - Sakura
 * Level 6 - Mobius
 * Level 7 - Hua
 * Level 8 - Elysia
 * Level 9 - 
 * Level 10 (a) - Aponia
 * Level 11 (b) - Vill-v
 * Level 12 (c) - Kosma
 * Level 13 (d) - Griseo
 * Level 14 (e) - Pardo
 * 
 * Suit 1-4 (Upgrade 0-3)
 * 
 * Quality 1 - Normal
 * Quality 2 - Enhanced
 * Quality 3 - Core
 */