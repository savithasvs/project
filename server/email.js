const nodemail = require('nodemailer');
const { getMaxListeners } = require('./logger');
var sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'restaurantbook56@gmail.com',
        pass:'rest@123'
    }
})
                    
var mail = async (datas,information)=>{
    console.log("Booking Get confirm");
    var returnobject  = new Promise((resolve,reject)=>{
        if(datas == undefined || information == undefined)
        {
            reject();
        }
        else{
            resolve(

                composemail = {
                    from:'restaurantbook56@gmail.com',
                    to:datas,
                    subject:'node email',
                    text:'Your booking has been confirm. '
                },

                sender.sendMail(composemail,function(err,res){
                    if(err)
                    {
                        console.log("Mail not sent",err);
                    }
                    else{
                        console.log("Mail sent");
                    }
                })
            )
        }
        
    })
    return returnobject;
}

module.exports = {mail};