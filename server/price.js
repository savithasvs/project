let getval = async (getobject)=>{
    var object = {
        selector:{
            "email":getobject
        }
    }
    return database.adminin.find(object).then((data) => {
        console.log("data fetchd from server",data);
        return data;
    }).catch((err)=>{
        console.log("Got error from server",err);
    })
}