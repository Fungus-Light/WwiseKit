import { $Load, $Parse } from "./Utils/CheerioHelper";
import { writeFileSync, readdirSync, existsSync, readFileSync } from "fs"
import { join, resolve } from "path"
import { Tabletojson } from "tabletojson";
import { RemoveAllEmpty } from "./Utils/StringHelper";

class WaapiToken {
    api: string;
    tokens: string[];
    desc: string;
}

class WaapiAPI {
    api: string;
    desc: string;
}

function MatchFunctionName(str: string) {
    let reg = /^[a-zA-Z]+(\.[a-zA-Z]+)*$/
    if (str.match(reg)) {
        return str
    } else {
        return null
    }
}

function GetApiFromFile(path: string) {
    const $ = $Load(path)

    let functionNames: WaapiAPI[] = []

    $(".textblock p").each((i, el) => {

        let text = $(el).find("a").first().text()
        let desc = $(el).text()
        let match = MatchFunctionName(text)
        if (match) {
            functionNames.push({
                api: match,
                desc: desc
            })
        }
    })

    const result = [...new Set(functionNames)]
    return result
}

function CreateWaapiTokenList(functionNames: WaapiAPI[]) {
    let waapiTokens: WaapiToken[] = []
    functionNames.forEach((v, i) => {
        let api = v.api
        let tokens = api.split(".")
        let obj: WaapiToken = {
            api: api,
            tokens: tokens,
            desc: v.desc
        }
        waapiTokens.push(obj)
    })
    return waapiTokens
}

function GenJsonFromTokens(tokens: WaapiToken[]) {
    let json: any = {}

    tokens.forEach((v, i) => {
        let temp = json
        let tokens = v.tokens
        for (let i = 0; i < tokens.length; i++) {
            let prop = tokens[i]
            if (i == tokens.length - 1) {
                temp[prop] = {
                    desc: v.desc.split("\n")[1],
                    api: v.api
                }
            } else {
                if (temp[prop] == null) {
                    temp[prop] = {}
                }
                temp = temp[prop]
            }

        }
    })

    return json
}

let filter:any = {
    ["ak.wwise.core.object.getPropertyNames"] : true,
    ["ak.wwise.core.plugin.getList"] : true,
}

function RenderWaapiJsonToTs(obj: any, layer: number, tabSize: number = 4, prefix:string = "$",keepStr:boolean = false) {
    let str = ""
    for (let key in obj) {
        let value = obj[key]
        if (value != undefined) {
            if (value.desc && value.api) {
                let desc = value.desc
                let api = value.api
                if (!filter[api]){
                    let functionName = prefix + (api as string).replaceAll(".", "_")
                    str += " ".repeat(layer * tabSize) + "/** " + desc + "*/\n"
                    if(keepStr){
                        str += " ".repeat(layer * tabSize) + key + ": \"" + api + "\",\n"
                    }else{
                        str += " ".repeat(layer * tabSize) + key + ": " + functionName + ",\n"
                    }
                    
                }else{
                    str += " ".repeat(layer * tabSize) + key + ": \"This function is deprecated!!!  " + api + "\",\n"
                }
                
            } else {
                str += " ".repeat(layer * tabSize) + key + ": {\n"
                str += RenderWaapiJsonToTs(value, layer + 1, tabSize,prefix,keepStr)
                str += " ".repeat(layer * tabSize) + "},\n"
            }
        }
    }
    return str
}

function GetWaapiReference_Functions(path: string, fileName: string) {

    let result = GetApiFromFile(path)
    let waapiTokens = CreateWaapiTokenList(result)
    let obj = GenJsonFromTokens(waapiTokens)

    if (obj) {
        let ts = "const waapi_functions_names = { \n" + RenderWaapiJsonToTs(obj, 1, 4,"",true) + "\n}"
        ts += "\n\nexport { waapi_functions_names }"
        writeFileSync(fileName, ts)
    }
}

function GetWaapiReference_Topics(path: string, fileName: string) {

    let result = GetApiFromFile(path)
    let waapiTokens = CreateWaapiTokenList(result)
    let obj = GenJsonFromTokens(waapiTokens)

    if (obj) {
        let ts = "const waapi_topics_names = { \n" + RenderWaapiJsonToTs(obj, 1, 4,"",true) + "\n}"
        ts += "\n\nexport { waapi_topics_names }"
        writeFileSync(fileName, ts)
    }
}

function ParseArgSchema(path: string) {
    const $ = $Load(path)
    let schema = $(".fragment").first().text()
    //console.log(schema)
    //writeFileSync("schema.json", schema)
    let obj = JSON.parse(schema)
    //console.log(obj)
    return obj
}

function GetObjectJson(path: string) {
    const $ = $Load(path)

    let propList: any[] = []

    let table = $(".contents table").first()
    let props = table.children().first().children()
    //console.log(props.length)
    props.each((i, el) => {
        if (i != 0) {

            let p_name = $(el).find("td").first().text()
            p_name = RemoveAllEmpty(p_name)

            let p_type = $(el).find("td").eq(2).text()
            p_type = RemoveAllEmpty(p_type)

            let p_defalut = $(el).find("td").eq(3).text()
            let p_restriction = $(el).find("td").eq(4).toString()
            $(el).find("td").eq(4).remove()
            let p_readonly = $(el).find("td").eq(4).text()

            propList.push({
                name: p_name,
                type: p_type,
                defaultValue: p_defalut,
                restriction: p_restriction,
                readonly: p_readonly == "true"
            })
        }
    })

    let className = $(".headertitle .title").first().text()
    className = className.replaceAll(" ", "")
    let desc = $(".contents p").first().text()
    let Obj = {
        className: className,
        props: propList,
        desc: desc
    }
    return Obj
    //writeFileSync("object.json",JSON.stringify(Obj))
}

function ParseAllWwiseObj(basePath: string) {

    let dir = resolve(basePath)
    let files = readdirSync(dir)

    let objList: any[] = []

    files.forEach((v, i) => {
        if (v.endsWith(".html") && v.startsWith("wwiseobject_")) {
            let path = join(dir, v)
            let obj = GetObjectJson(path)
            if (!obj.className.includes("(Deprecated)")) {
                objList.push(obj)
                writeFileSync("Test/" + obj.className + ".json", JSON.stringify(obj))
            } else {
                console.log("From ParseAllWwiseObj :" + obj.className + " is deprecated")
            }
        }
    })
    return objList
}

let typeModify: any = {
    "bool": "boolean",
    "Real32": "number",
    "Real64": "number",
    "int16": "number",
    "int32": "number",
    "int64": "number",
    "Uint16": "number",
    "Uint32": "number",
    "Reference": "any",
    "integer": "number",
    "array": "Array<any>"
}

function GetTypeAlias(type: string) {
    if (typeModify[type]) {
        return typeModify[type]
    }
    return type
}

function ModifyName(propName: string) {
    if (propName[0].match(/[0-9]/)) {
        return "_" + propName
    }
    return propName
}

function GetAllWwiseObjectDefine(basePath: string, targetFile: string, tabSize: number = 4) {

    let objList = ParseAllWwiseObj(basePath)

    let str = ""

    str += 'import { WwiseObject } from "./WwiseObject";\n\n'

    objList.forEach((v, i) => {
        str += "/**\n"
        str += " * " + v.desc + "\n"
        str += " */\n"
        str += "export interface " + v.className + " extends WwiseObject{\n"
        v.props.forEach((p: any) => {

            let restriction = p.restriction || ""

            let $restrict = $Parse(restriction)
            if ($restrict("table").length > 0) {

            } else {
                let resText = $restrict.text()
                if (resText != "None") {
                    str += " ".repeat(tabSize) + "/**\n"
                    str += " ".repeat(tabSize) + " * " + $restrict.text() + "\n"
                    if (p.defaultValue != " ") {
                        str += " ".repeat(tabSize) + " * @default " + p.defaultValue + "\n"
                    }

                    str += " ".repeat(tabSize) + " */\n"
                }
            }
            // if(p.readonly){
            //     str += " ".repeat(tabSize) + "readonly " + ModifyName(p.name) + ":" + GetTypeAlias(p.type) + ";\n"
            // }else{
            str += " ".repeat(tabSize) + ModifyName(p.name) + "?:" + GetTypeAlias(p.type) + ";\n"
            // /}

        });
        str += "}\n\n"

    })

    writeFileSync(targetFile, str)
}

function RenderSchemaToDef(schema: any, name: string) {
    let str = ""
    let existExparam = false
    if (schema) {
        str += `export declare interface ${name}{\n`

        let required = schema.required
        let properties = schema.properties

        for (let key in properties) {
            let realKey = key
            if (required && required.includes(key)) {
            } else {
                realKey += "?"
            }

            let keyType = "any"

            if (properties[key].type) {
                keyType = GetTypeAlias(properties[key].type)
            }

            if (properties[key].description
                || (properties[key].minimum)
                || String(properties[key].minimum) === '0'
                || (properties[key].maximum)
                || String(properties[key].maximum) === '0') {

                str += `\t/**\n`
                if (properties[key].description) {
                    str += `\t * ${properties[key].description}\n`
                }
                if (properties[key].minimum || String(properties[key].minimum) === '0') {
                    str += `\t * Minimum: ${properties[key].minimum}\n`
                }
                if (properties[key].maximum || String(properties[key].maximum) === '0') {
                    str += `\t * Maximum: ${properties[key].maximum}\n`
                }

                str += `\t */\n`
            }

            str += `\t${realKey}:${keyType}\n`

        }

        str += "}\n"

        if (schema.patternProperties) {
            console.log("!!!!!!From RenderSchemaToDef: " + name + " has patternProperties")
            existExparam = true
        }
    }

    return [str, existExparam]
}

function ConvertWaapiToFunction(path: string, dir: string, fileName: string) {
    let result = GetApiFromFile(path)

    let functions: any[] = []

    result.forEach((v) => {
        if (!v.api.includes("deprecated")) {
            let functionName = v.api.split(".").join("_")
            let mainPath = functionName + ".html"
            let mainFile = join(dir, mainPath)

            if (existsSync(mainFile)) {

                let mainFileStr = readFileSync(mainFile, {
                    encoding: "utf-8"
                })

                if (mainFileStr.includes("This function is deprecated")) {
                    console.log("From ConvertWaapiToFunction: " + v.api + " is deprecated")
                } else {
                    let $main = $Load(mainFile)
                    let desc = $main(".contents .textblock p").first().text()

                    let needArg = false
                    let needResult = false

                    let argSchemaPath = functionName + "_args_schema.html"
                    let argfile = join(dir, argSchemaPath)

                    if (existsSync(argfile)) {
                        needArg = true
                    } else {
                        console.log("From ConvertWaapiToFunction: " + argfile + " not found")
                    }

                    let resultSchemaPath = functionName + "_result_schema.html"
                    let resultfile = join(dir, resultSchemaPath)

                    if (existsSync(resultfile)) {
                        needResult = true
                    } else {
                        console.log("From ConvertWaapiToFunction: " + resultfile + " not found")
                    }

                    if ((!needArg) && (!needResult)) {
                        functions.push({
                            name: functionName,
                            desc: desc,
                            argSchema: null,
                            resultSchema: null,
                            api: v.api
                        })
                    } else {

                        let argSchema: any = null
                        let resultSchema: any = null

                        if (needArg) {
                            argSchema = ParseArgSchema(argfile)
                        }

                        if (needResult) {
                            resultSchema = ParseArgSchema(resultfile)
                        }

                        functions.push({
                            name: functionName,
                            desc: desc,
                            argSchema: argSchema,
                            resultSchema: resultSchema,
                            api: v.api
                        })
                    }
                }
            } else {
                console.log("From ConvertWaapiToFunction: " + mainFile + " not found")
            }

        } else {
            console.log("From ConvertWaapiToFunction: " + v.api + " is deprecated")
        }
    })

    let genedFunctions = ""

    genedFunctions += 'import { Session, Result, Error } from "autobahn"\n'
    genedFunctions += 'import { CallWaapi , JoinArgs ,SimpleSubOptions } from "./Utils"\n\n'

    functions.forEach((v) => {

        if (!v.argSchema && !v.resultSchema) { //无参数无返回值   
            genedFunctions += "/**\n"
            genedFunctions += " * " + v.desc + "\n"
            genedFunctions += " */\n"
            genedFunctions += "export function $" + v.name + "(session:Session,onComplete?:()=>void,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void){\n"
            genedFunctions += "\tCallWaapi(session, \"" + v.api + "\", null, null, onSuccess, onError, onComplete)\n"

            genedFunctions += "}\n\n"
        } else {
            if (v.argSchema) {//有参数

                let argTypeName = v.name + "_Args"
                let argType = RenderSchemaToDef(v.argSchema, argTypeName)[0]
                let existExparam = RenderSchemaToDef(v.argSchema, argTypeName)[1]

                genedFunctions += argType + "\n"

                genedFunctions += "/**\n"
                genedFunctions += " * " + v.desc + "\n"
                genedFunctions += " */\n"

                if (existExparam) {
                    genedFunctions += "export function $" + v.name + `(session:Session,args?:${argTypeName},exArgs?:any,options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){\n`
                    genedFunctions += "\targs = JoinArgs(args,exArgs)\n"
                } else {
                    genedFunctions += "export function $" + v.name + `(session:Session,args?:${argTypeName},options?:SimpleSubOptions,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){\n`
                }

                genedFunctions += "\tCallWaapi(session, \"" + v.api + "\", args, options, onSuccess, onError, onComplete)\n"
                genedFunctions += "}\n\n"
            } else {

                genedFunctions += "/**\n"
                genedFunctions += " * " + v.desc + "\n"
                genedFunctions += " */\n"

                genedFunctions += "export function $" + v.name + "(session:Session,onSuccess?:(res:Result)=>void,onError?:(error:Error)=>void,onComplete?:()=>void){\n"
                genedFunctions += "\tCallWaapi(session, \"" + v.api + "\", null, null, onSuccess, onError, onComplete)\n"
                genedFunctions += "}\n\n"
            }
        }
    })

    let waapiTokens = CreateWaapiTokenList(result)
    let obj = GenJsonFromTokens(waapiTokens)

    if (obj) {
        let ts = "const waapi_functions = { \n" + RenderWaapiJsonToTs(obj, 1, 4,"$") + "\n}"
        ts += "\n\nexport { waapi_functions }"
        
        genedFunctions += "\n\n" + ts
    }

    writeFileSync(fileName, genedFunctions)
}

function ConvertTopicsToFunction(path: string, dir: string, fileName: string) {
    let result = GetApiFromFile(path)
    //console.log(result)
    let functions: any[] = []

    result.forEach((v) => {
        if (!v.api.includes("deprecated")) {
            let functionName = v.api.split(".").join("_")

            functions.push({
                name: functionName,
                desc: v.desc,
                api: v.api
            })

        } else {
            console.log("From ConvertWaapiToFunction: " + v.api + " is deprecated")
        }
    })

    let genedFunctions = ""
    genedFunctions += 'import { Session, Result, Error } from "autobahn"\n'
    genedFunctions += 'import { SimpleSubOptions, Sub } from "./Utils"\n\n'
    functions.forEach((v) => {
        genedFunctions += "/**\n"
        genedFunctions += " * " + v.desc + "\n"
        genedFunctions += " */\n"

        genedFunctions += `export function T_${v.name}(session:Session,options:SimpleSubOptions,action: (kwargs: any) => void, onError?: (error: Error) => void){\n`
        genedFunctions += `\tSub(session, '${v.api}', options as any, action, onError);\n`
        genedFunctions += "}\n\n"

    })

    let waapiTokens = CreateWaapiTokenList(result)
    let obj = GenJsonFromTokens(waapiTokens)

    if (obj) {
        let ts = "const waapi_topics = { \n" + RenderWaapiJsonToTs(obj, 1, 4,"T_") + "\n}"
        ts += "\n\nexport { waapi_topics }"

        genedFunctions += ("\n\n" + ts)
    }

    writeFileSync(fileName, genedFunctions)
}

export {
    GetWaapiReference_Functions,
    GetWaapiReference_Topics,
    ParseArgSchema,
    GetObjectJson,
    ParseAllWwiseObj,
    GetAllWwiseObjectDefine,
    ConvertWaapiToFunction,
    ConvertTopicsToFunction
}