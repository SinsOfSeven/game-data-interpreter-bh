import BuildMap from "./TextMapBuilder.js"
import textmap_en from "../data/TextMapMultiLangMetaData_en.json" assert {type:'json'}

try{
    BuildMap(textmap_en,'./generated/textmap_en',0)
}finally{
    console.log("finished")
}
