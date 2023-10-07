console.log("Wwise Tools By Fungus Light!!!!!");

import { ConvertTopicsToFunction, ConvertWaapiToFunction, ConvertWaapiToFunctionPromise, GetAllWwiseObjectDefine, GetObjectJson, GetWaapiReference_Functions, GetWaapiReference_Topics, ParseAllWwiseObj } from "SRC/WaapiGenerator";

function GenWwiseKitByVersion(inputPath:string, outputPath:string){
    GetWaapiReference_Functions(inputPath + "waapi_functions_index.html", outputPath + "SRC/Wwise/waapi_functions_names.ts")
    GetWaapiReference_Topics(inputPath + "waapi_topics_index.html", outputPath + "SRC/Wwise/waapi_topics_names.ts")
    ConvertWaapiToFunction(inputPath + "waapi_functions_index.html", inputPath, outputPath + "SRC/Wwise/waapi_apis.ts")
    ConvertWaapiToFunctionPromise(inputPath + "waapi_functions_index.html", inputPath, outputPath + "SRC/Wwise/waapi_apis_promise.ts")
    GetAllWwiseObjectDefine(inputPath, outputPath + "@types/WwiseObjects/AllWwiseObject.d.ts")
    ConvertTopicsToFunction(inputPath + "waapi_topics_index.html", inputPath, outputPath + "SRC/Wwise/waapi_apis_topics.ts")
}

const config: {[key: string]: {input:string, output:string}} =
{
    ["19"] : {input:"./chm/out_19_2/", output:"../Typescript_2019_2/"},
    ["22"] : {input:"./chm/out_22_1/", output:"../Typescript_2022_1/"}
}


let version = process.argv[2]
if (config[version] != undefined){
    let cfg = config[version]
    GenWwiseKitByVersion(cfg.input, cfg.output)
}else{
    console.log("Please input valid version number, eg. 19 for 2019.2.x, 22 for 2022.1.x")
}

