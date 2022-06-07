const database = require('../dbconnect');
var getval = async (getobject)=>{
    var object = {
        selector:{
            "email":getobject
        }
    }
    var retval =  database.adminin.find(object).then((data) => {
        console.log("data fetchd from server",data);
        return data;
    }).catch((err)=>{
        console.log("Got error from server",err);
    })
    return retval;
}
module.exports = {getval}
 