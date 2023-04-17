import {load} from "cheerio"
import {readFileSync,existsSync} from "fs"

function $Load(path:string){
    if(existsSync(path)){
        let str = readFileSync(path,{
        })
        return load(str)
    }else{
        return null
    }
}

export{
    $Load
}