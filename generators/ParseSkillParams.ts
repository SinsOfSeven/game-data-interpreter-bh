/**
 * Skill Param Replacement
 * @param input string with #d[i] to replace
 * @param param1 first param to replace
 * @param param2 second param to replace
 * @param param3 third param to replace
 * @returns string replacement of skill text
 */
export function SkillParamParse(input:string,param1:string|number=0,param2:string|number=0,param3:string|number=0):string{
    return input.replaceAll(/#(\d)\[(i|f\d)\]/g, (match,g1,/*g2,offset,str,group*/)=>{
        //console.log(match,g1,/*g2,offset,str,group*/)//debug
        switch(g1){
            case '1': return `${param1}`
            case '2': return `${param2}`
            case '3': return `${param3}`
        }
        return "ERROR"
    })
}

/**
 * Combines the input params with the Max Level of the skill.
 * @param maxLv
 * @param paramAdd
 * @param paramBase
 * @param pre precision, (default 1000)
 * @param onlyAdd returns only the Addition (default false)
 */
export function ParamCombine(maxLv:number,paramAdd:number,paramBase:number=0,pre:number=1000,onlyAdd:boolean=false):number{
    if(onlyAdd) return Math.floor(paramAdd*(maxLv-1)*pre)/pre
    return Math.floor((paramBase + paramAdd*(maxLv-1))*pre)/pre
}
export default SkillParamParse