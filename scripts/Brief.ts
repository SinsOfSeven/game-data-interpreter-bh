import AvatarBios from "../data/AvatarBriefMetaDataReader.json" assert {type:'json'}
import Avatars from "../data/AvatarMetaData.json" assert {type:'json'}
import { createWriteStream } from "fs"


import LoadMap from "../generators/TextMapLoader.js"
import { TextMap } from "../types/types"
const en_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

const output_path = "./generated/Briefs"
const file_ext = ".json"
const writer = createWriteStream(output_path+file_ext)

let AvatarIDs = new Map()

setTimeout(()=>{
    Avatars.forEach(element => {
        AvatarIDs.set(element.AvatarID, en_map[element.FullName.Hash])
    })
    writer.write("[\n")
    console.log("Name, Height, Weight")
    AvatarBios.forEach(e=>{
        const Bio = {
            Name:AvatarIDs.get(e.AvatarID),
            Bday:en_map[e.Birthday.hash],
            Sex:en_map[e.Sex.hash],
            Org:en_map[e.Organization.hash],
            Height:en_map[e.Height.hash],
            Weight:en_map[e.Weight.hash],
            Home:en_map[e.HomePlace.hash],
            D1:en_map[e.Story01.hash],
            S2:en_map[e.Story02.hash],
            S3:en_map[e.Story03.hash],
            D2:en_map[e.Dialogue01.hash],
            D3:en_map[e.Dialogue02.hash],
            S1:en_map[e.Dialogue03.hash],
        }
        writer.write(JSON.stringify(Bio)+",\n")

        console.log(`${Bio.Name}, ${Bio.Height}, ${Bio.Weight}`)

    })
    writer.write("]")
},300)