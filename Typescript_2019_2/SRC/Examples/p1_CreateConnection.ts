import {DEFAULT_URL, SimpleConnect} from "Wwise/Utils"

//Basic
SimpleConnect("ws://localhost:8080/waapi", (session, connection) => {

})

//DEFAULT_URL
//DEFAULT_URL = "ws://localhost:8080/waapi"
SimpleConnect(DEFAULT_URL, (session, connection) => {
    
})

