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
    let leftOvers = ''
    const lineSpitter = new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
            let data = chunk.toString()
            if(leftOvers) data = leftOvers+data
            const lines = data.trim().split(/\r?\n/)
            leftOvers = lines.splice(lines.length-1,1)[0]
            this.push(lines)
        },
        flush(callback){
            if(leftOvers!=='') this.push(leftOvers)
            leftOvers = ''
            callback()
        }
    });
    const stringTrans = new Transform({
        objectMode:true,
        transform(chunk:Array<string>,encoding,done){
            chunk.forEach(element => {
                this.push(element)
            })
        }
    })
    const arrayToMap = new Transform({
        objectMode:true,
        transform(chunk:Array<string>, encoding, callback) {
            //let TextMapOut = new Map<number,string>()
            chunk.forEach((element) => {
                try {
                    //console.log(typeof element)
                    const temp = (JSON.parse(element))
                    const tempkey = (Number(Object.keys(temp)))
                    TextMapOut[tempkey] = temp[tempkey]
                    //TextMapOut.set(tempkey,temp[tempkey])
                    //console.log(tempkey)
                    //console.log(TextMapOut.get(tempkey))
                    // //this.push(TextMap)
                    
                    
                }catch(SyntaxError){
                    console.log("Syntax Error")
                }finally{
                    this.push(element)
                }
                
            })
            callback()
        }
    });
    let TextMapOut:TextMap ={}
    reader
        //.setEncoding('utf-8')
        .pipe(lineSpitter)
        //.pipe(stringTrans)
        //.on('data',(chunk)=> data += chunk)
        .pipe(arrayToMap)
        //.on('end',()=>console.log("done"))
        
        //reader.close()
        //.pipe(process.stdout)
        //console.log(TextMapOut)
    return TextMapOut
}
// let a = LoadMap("./generated/textmap_en.ndjson")
// setTimeout(()=>{console.log(a[1178393178])},8000)
