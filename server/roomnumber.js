const database = require('./dbconnect');
let room = async (getobject)=>{
    let objectr = {
        selector:{
            "roomnumber":getobject,
        }
    }
    return database.adminin.find(objectr).then((data) => {
        return data;
    }).catch((err)=>{
        console.log("Got error from server",err);
    })
    
}
module.exports = {room}