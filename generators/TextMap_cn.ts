import BuildMap from "./TextMapBuilder.js"
import textmap_cn from "../data/TextMapMultiLangMetaData_cn.json" assert {type:'json'}

try{
    BuildMap(textmap_cn,'./generated/textmap_cn.json')
}finally{
    console.log("finished")
}
