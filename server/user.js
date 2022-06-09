const database = require('./dbconnect');
let get11 = async (_getobjects)=>{
    var objecta = {
        selector:{
            "type":"rest"
        }
    }
    return database.adminin.find(objecta).then((data) => {
        console.log("data fetchd from server",data);
        return data;
    }).catch((err)=>{
        console.log("Got error from server",err);
    })
}
module.exports = {get11}