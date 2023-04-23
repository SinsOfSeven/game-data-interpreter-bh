import { TextMap } from "../types/types";
import LoadMap from "../generators/TextMapLoader.js"
import { createWriteStream } from "fs"

const en_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

const output_path = "./generated/Template"
const file_ext = ".md"
const writer = createWriteStream(output_path+file_ext)

setTimeout(()=>{
},3000)