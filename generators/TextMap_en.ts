import BuildMap from "./TextMapBuilder.js"
import textmap_en from "../data/TextMapMultiLangMetaData_en.json" assert {type:'json'}
BuildMap(textmap_en,'./generated/textmap_en')
