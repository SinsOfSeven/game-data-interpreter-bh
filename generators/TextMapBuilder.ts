import { TextMapOld } from "../types/types.js"
import { createWriteStream } from "fs"
/**
 * 
 * @param map TextMap Array [{ID:{Hash},Text}...]
 * @param fileName output file name (no extention)
 * @param opt Default 1, 0 = .json, 1 = .ndjson
 */
export default function BuildMap(map:Array<TextMapOld>,fileName:string,opt:number=1){
    if(typeof map != "object") throw new Error("Map param is not an object.")
    if(opt && typeof fileName == "string") {
        const writer = createWriteStream(`${fileName}.${opt==1?'ndjson':'json'}`)
        console.log("Created file Writer, starting Parser.")
        if(opt===0){
            writer.write('[')
            for (const idx of map) {
                const temp= {[idx.ID.Hash]:idx.Text}
                writer.write(JSON.stringify(temp)+',\n')
            }
            writer.write(']')
        }else if(opt===1){
            for (const idx of map) {
                const temp= {[idx.ID.Hash]:idx.Text}
                writer.write(JSON.stringify(temp)+'\n')
            }
        }
        else{
            throw new Error("Missing Option, cannot execute.")
        }
    }
}