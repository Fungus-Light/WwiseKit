export function RemoveAllEmpty(str:string){
    str = str.replaceAll(" ", "")
    str = str.replaceAll("\t", "")
    str = str.replaceAll("\n", "")
    str = str.replaceAll("\r", "")
    return str
}