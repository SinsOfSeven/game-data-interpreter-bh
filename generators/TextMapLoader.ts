import { Transform } from 'stream'
import { createReadStream } from "fs"
interface TextMap{[key:number]:string}
/**
 * 
 * @param path FilePath to Read from (ndjson format)
 * @returns TextMap - Map
 */
export default function LoadMap(path:string){
    const reader = createReadStream(path,{highWaterMark:30000000})
    const lineSpitter = new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().trim().split(/\r?\n/))
            callback()
        }
    })
    const arrayToMap = new Transform({
        objectMode:true,
        transform(chunk:Array<string>, encoding, callback) {
            chunk.forEach((element) => {
                    const temp = (JSON.parse(element))
                    const tempkey = (Number(Object.keys(temp)))
                    TextMapOut[tempkey] = temp[tempkey]
            })
            callback()
        }
    })
    let TextMapOut:TextMap ={}
    
    reader
        .pipe(lineSpitter)
        .pipe(arrayToMap,{end:true})
        .on('end',()=>{reader.close()})
    return TextMapOut
}