const database = require('./dbconnect');
var get11 = async (getobjects)=>{
    var objecta = {
        selector:{
            "type":"rest"
        }
    }
    var get22 =  database.adminin.find(objecta).then((data) => {
        console.log("data fetchd from server",data);
        return data;
    }).catch((err)=>{
        console.log("Got error from server",err);
    })
    return get22;
}
module.exports = {get11}