import ExamQuestions from "../data/ExaminationQuestionMetaData.json" assert {type:"json"}
import ExamAnswers from "../data/ExaminationAnswerMetaData.json" assert {type:"json"}
import LoadMap from "../generators/TextMapLoader.js"
import type { TextMap } from "../types/types"
const text_map:TextMap = await LoadMap("./generated/textmap_en.ndjson")
const answerMap:Map<number,string> = new Map()
setTimeout(()=>{
    for (const answer of ExamAnswers) {
        answerMap.set(answer.AnswerID, text_map[answer.TextMap.Hash])
    }
    console.log('[TOC3]')
    for (const question of ExamQuestions) {
        let correct = question.CorrectAnswerID
        console.log(
`### ${text_map[question.QuestionTextMap.Hash]}
> *Hint: ${text_map[question.WrongTipTextMap.Hash]}*
**${answerMap.get(correct)}**
${answerMap.get(correct+1)}
${answerMap.get(correct+2)}
${answerMap.get(correct+3)}
[Table of Contents](#table-of-contents)
`
        .replaceAll(/<.*?>/g,""))
    }
},3000)


