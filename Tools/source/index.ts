console.log("Wwise Tools By Fungus Light!!!!!");

import { ConvertTopicsToFunction, ConvertWaapiToFunction, GetAllWwiseObjectDefine, GetObjectJson, GetWaapiReference_Functions, GetWaapiReference_Topics, ParseAllWwiseObj} from "SRC/WaapiGenerator";

GetWaapiReference_Functions("./chm/out/waapi_functions_index.html","../Typescript_2019_2/SRC/Wwise/waapi_functions_names.ts")
GetWaapiReference_Topics("./chm/out/waapi_topics_index.html","../Typescript_2019_2/SRC/Wwise/waapi_topics_names.ts")

ConvertWaapiToFunction("./chm/out/waapi_functions_index.html","./chm/out/","../Typescript_2019_2/SRC/Wwise/waapi_apis.ts")

GetAllWwiseObjectDefine("./chm/out/", "../Typescript_2019_2/@types/WwiseObjects/AllWwiseObject.d.ts")

ConvertTopicsToFunction("./chm/out/waapi_topics_index.html","./chm/out/","../Typescript_2019_2/SRC/Wwise/waapi_apis_topics.ts")