import EliteAbilities from "../data/EliteAbilityMetaData.json" assert {type:"json"}
import LoadMap from "../generators/TextMapLoader.js"
import type { TextMap } from "../types/types"
const text_map:TextMap = await LoadMap("./generated/textmap_en.ndjson")

setTimeout(()=>{
    for (const able of EliteAbilities) {
        const out = {Name:"", Desc:""}
        out.Name = text_map[able.EliteAbilityText.Hash]?text_map[able.EliteAbilityText.Hash]:""
        //out.Name += ` : ${able.EliteAbilityText.Hash}`
        out.Desc = text_map[able.EliteAbilityDesc.Hash]?text_map[able.EliteAbilityDesc.Hash]:""
        console.log(out.Name.replaceAll(/\\n/g," "),"\n",out.Desc.replaceAll(/\\n/g," "),"\n")
        //console.log(JSON.stringify(out))
    }
},3000)