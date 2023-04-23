//import { TextMap } from "../types/types";
//import LoadMap from "../generators/TextMapLoader.js"
//import { createWriteStream } from "fs"

import ElfExp from "../../unparased/ElfLevelMetaDataReader.json" assert {type:"json"}

let count = 0
ElfExp.forEach(element => {
    count += element.Exp
})
console.log(count)