console.log("Wwise Tools By Fungus Light!!!!!");

import { ConvertTopicsToFunction, ConvertWaapiToFunction, ConvertWaapiToFunctionPromise, GetAllWwiseObjectDefine, GetObjectJson, GetWaapiReference_Functions, GetWaapiReference_Topics, ParseAllWwiseObj } from "SRC/WaapiGenerator";

if (process.argv[2] == "19") {
    GetWaapiReference_Functions("./chm/out_19_2/waapi_functions_index.html", "../Typescript_2019_2/SRC/Wwise/waapi_functions_names.ts")
    GetWaapiReference_Topics("./chm/out_19_2/waapi_topics_index.html", "../Typescript_2019_2/SRC/Wwise/waapi_topics_names.ts")

    ConvertWaapiToFunction("./chm/out_19_2/waapi_functions_index.html", "./chm/out_19_2/", "../Typescript_2019_2/SRC/Wwise/waapi_apis.ts")
    ConvertWaapiToFunctionPromise("./chm/out_19_2/waapi_functions_index.html", "./chm/out_19_2/", "../Typescript_2019_2/SRC/Wwise/waapi_apis_promise.ts")

    GetAllWwiseObjectDefine("./chm/out_19_2/", "../Typescript_2019_2/@types/WwiseObjects/AllWwiseObject.d.ts")

    ConvertTopicsToFunction("./chm/out_19_2/waapi_topics_index.html", "./chm/out_19_2/", "../Typescript_2019_2/SRC/Wwise/waapi_apis_topics.ts")
}else if(process.argv[2] == "22"){
    GetWaapiReference_Functions("./chm/out_22_1/waapi_functions_index.html", "../Typescript_2022_1/SRC/Wwise/waapi_functions_names.ts")
    GetWaapiReference_Topics("./chm/out_22_1/waapi_topics_index.html", "../Typescript_2022_1/SRC/Wwise/waapi_topics_names.ts")

    ConvertWaapiToFunction("./chm/out_22_1/waapi_functions_index.html", "./chm/out_22_1/", "../Typescript_2022_1/SRC/Wwise/waapi_apis.ts")
    ConvertWaapiToFunctionPromise("./chm/out_22_1/waapi_functions_index.html", "./chm/out_22_1/", "../Typescript_2022_1/SRC/Wwise/waapi_apis_promise.ts")

    GetAllWwiseObjectDefine("./chm/out_22_1/", "../Typescript_2022_1/@types/WwiseObjects/AllWwiseObject.d.ts")

    ConvertTopicsToFunction("./chm/out_22_1/waapi_topics_index.html", "./chm/out_22_1/", "../Typescript_2022_1/SRC/Wwise/waapi_apis_topics.ts")
}
else{
    console.log("Please input 19 for 2019.2.x, 22 for 2022.1.x")
}

