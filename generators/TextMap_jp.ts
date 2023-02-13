import BuildMap from "./TextMapBuilder.js"
import textmap_jp from "../data/TextMapMultiLangMetaData_jp.json" assert {type:'json'}
BuildMap(textmap_jp,'./generated/textmap_jp.json')
