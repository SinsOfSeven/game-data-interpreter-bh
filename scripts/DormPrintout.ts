import DormAvatars from "../data/DormitoryAvatarMetaData.json" assert {type:'json'}
import DormEventDialog from "../data/DormitoryEventDialogMetaData.json" assert {type:'json'}
import LoadMap from "../generators/TextMapLoader.js"
import { TextMap } from "../types/types"
const en_map:TextMap = LoadMap("./generated/textmap_en.ndjson")

let usedList:any = {}

const eventList = {
    10001:"Five Stages",
    10004:"Open World",
    10012:"Birthday",
    10013:"50 BP Earned",
}

setTimeout(()=>{
    for (const Avatar of DormAvatars) {
        console.log(en_map[Avatar.NameText.Hash] + " | ID: " + Avatar.AvatarID + " | Role: " + Avatar.RoleID)
        for (const Event of DormEventDialog) {
            if(Event.RoleID == Avatar.RoleID)
                console.log(`EventID: ${Event.EventKey} | ${en_map[Event.TextMap.Hash]}`)
                usedList[Avatar.RoleID] = true
        }
        console.log(`==================================================`)
    }
},3000)
