import BuildMap from "./TextMapBuilder.js"
import textmap_jp from "../data/TextMapMultiLangMetaData_jp.json" assert {type:'json'}

try{
    BuildMap(textmap_jp,'./generated/textmap_jp.json')
}finally{
    console.log("finished")
}
