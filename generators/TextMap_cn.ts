import BuildMap from "./TextMapBuilder.js"
import { TextMapOld } from "../types/types.js"
import textmap_cn from "../data/TextMapMultiLangMetaData_cn.json" assert {type:'json'}
BuildMap(textmap_cn,'./generated/textmap_cn')