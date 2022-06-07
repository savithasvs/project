const database = require('./dbconnect');
var room = async (getobject)=>{
    var objectr = {
        selector:{
            "roomnumber":getobject,
        }
    }
    var num =  database.adminin.find(objectr).then((data) => {
        return data;
    }).catch((err)=>{
        console.log("Got error from server",err);
    })
    return num;
}
module.exports = {room}