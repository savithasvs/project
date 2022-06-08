const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
let login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick, uptime, getMaxListeners } = require("process");
const cors = require("cors");
const logindetail = require('./serves/signup');
const slector = require('./user')
const roomvalue = require("./roomnumber")
const dbconnection = require("./dbconnect");
const logger = require("./logger");
const setmail = require('./email');
const res = require("express/lib/response");
const validation = require('./validator/restaurant.schema')
const signvalidation = require('./validator/signup.schema')
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);


app.get("/userbook",(request, response ) => {
  console.log("data getted",request.params.data)
    slector.get11(request.params.data).then((data) =>{
      console.log('Data getted');
      response.json(data);
    }
    )
})
  ////// delete
  app.delete("/delete/:id/:id1", (request, response) => {
    dbconnection
      .del_id(request.params.id, request.params.id1, "new_sample")
      .then((res) => {
        if (res) {
          response.send(res);
        } else {
          response.send("error");
        }
      });
  });

/////room Number
app.get("/roomnumber/:data",(request, response) => {
  console.log("data found")
  console.log("data getted",request.params.data)
    roomvalue.room(request.params.data).then((data)=>{
      console.log('Data getted');
      response.json(data);
    }
    )
})

////client get
 app.get("/Client/:data",(request, response) => {
   console.log("data getted",request.params.data)
     logindetail.getval(request.params.data).then((data) =>{
       console.log('Data getted');
       response.json(data);
     }
     )
 })
 ///sign-up post
app.post("/sign-up", (request, response ) => {
  console.log(request);
  var object = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    Password: request.body.Password,
    reenter: request.body.reenter,
    type:"user"
  };
const value = signvalidation.signupSchema.validate(request.body);
if (value.error) {
  response.json({
    success: 0,
    message: value.error.details[0].message,
  });
} else{
  dbconnection.cloudant.use("new_sample").insert(object).then((data) => {
    response.send(data) 
            console.log("Data Inserted into Cloud"+data);
        }).catch((err) =>{
          response.send(err) 
            console.log(err);
    });
  }
});
  /////////////// restaurant booking
 
  app.get("/getadmin", (request, response) => {
    console.log(request);
    dbconnection.get("new_sample").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  //
  app.get("/getadminId/:id", (request, response) => {
    dbconnection.getId(request.params.id, "new_sample").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  // app.get("/getadminId/:id", (request, response) => {
  //   dbconnection.getId(request.params.id, "new_sample").then((res) => {
  //     if (res) {
  //       response.send(res);
  //     } else {
  //       response.send("error");
  //     }
  //   });
  // });
// });
app.post("/resturantbook", (request, response ) => {
  console.log(request);
  var objects = {
    Name: request.body.fname,
    aadhar:request.body.aadhar,
    email: request.body.email,
    address:request.body.address,
    MobileNumber:request.body.MobileNumber,
    GuestCount: request.body.GuestCount,
    roomtype: request.body.roomtype,
    roomnumber: request.body.roomnumber,
    Price: request.body.Price,
    user: request.body.user,
    type:"rest"
};
const value = validation.restSchema.validate(request.body);
if (value.error) {
  response.json({
    success: 0,
    message: value.error.details[0].message,
  });
} else { 
  dbconnection.adminin.insert(objects).then((data) => {
    console.log("Data Inserted into Cloud" + data);
    var datas = request.body.email
  setmail.mail(datas,"Booking for you").then((data)=>{
      console.log("Mail Successfully sent",data);
        }).catch((err)=>{
      console.log("Mail Not sent successfully",err);
      console.log(objects);
      })
      response.send(data)
  }).catch((err) =>{
      response.send(err)
      console.log(err);
    logger.error("logger working succesfully")
  });
  console.log("Data added");
  logger.info("Data added Successfully")
}

// });

   });
///////////
app.post("/productbook", (request, response ) => {
  console.log(request);
  var objectp = {
    Name: request.body.Name,
    roomtype:request.body.roomtype,
    roomnumber: request.body.roomnumber,
    Food:request.body.Food,
    Price:request.body.Price
};
dbconnection.adminin.insert(objectp).then((data) => {
  response.send(data)
            console.log("Data Inserted into Cloud" + data);
        }).catch((err) =>{
            console.log(err);
    });
  console.log("Data added");
});
////////
///roomtype
app.get("/get_query/:id", (request, response) => {
  console.log("get id",request.params.id);
  var fetchdata ={
    "selector": {
       "id": request.body.roomtype
    }
 }
  dbconnection.adminin.get(request.params.id).then((res) => {
  if (res) {
 console.log(res);
  response.json(res);
  } else {
  response.send("error");
  }
   });
  console.log("end");
 });
///////relationship
app.get("/getvalue/:id", (request, response) => {
  console.log("getvalue id",request.params.id);
  var fetchdata ={
    "selector": {
       "email": request.params.id
    }
 }
  dbconnection.adminin.find(request.params.id).then((res) => {
  if (res) {
 console.log(res);
  response.json(res);
  } else {
  response.send("error");
  }
   });
  console.log("end");
 });

//////admin login
app.get("/get_all_query/:id", (request, response) => {
  console.log("get id",request.params.id);
  var fetchdata ={
    "selector": {
       "id": request.params.id
    }
 }
  dbconnection.adminin.find(fetchdata).then((res) => {
  if (res) {
 console.log(res);
  response.json(res);
  } else {
  response.send("error");
  }
   });
  console.log("end");
 });
app.listen(port, (err) => {
//////////// post restaurantbook
  if (err) {
    return console.log("something bad happened", err);
  }
 
console.log(`server is listening on http://localhost:${port}`);
logger.info("server is started successfully");
}
)
// });
 