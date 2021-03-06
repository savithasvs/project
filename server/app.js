const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
let login = {};
const file = require("fs");


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

  ////// delete
  app.delete("/delete/:id/:id1", (request,response) => {
    dbconnection
      .del_id(request.params.id, request.params.id1, "new_sample")
      .then((res1) => {
        if (res1) {
          response.send(res1);
        } else {
          response.send("error");
        }
      });
  });

/////room Number
app.get("/roomNumber/:data",(request,response) => {
  console.log("data found")
  console.log("data getted",request.params.data)
    roomvalue.room(request.params.data).then((data)=>{
      console.log('Data getted');
      response.json(data);
    }
    )
})

////client get
 app.get("/Client/:data",(request,response) => {
   console.log("data getted",request.params.data)
     logindetail.getval(request.params.data).then((data) =>{
       console.log('Data getted');
       response.json(data);
     }
     )
 })
 ///sign-up post
app.post("/signUp", (request, response ) => {
  console.log(request);
  let object = {
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
 
  app.get("/getadmin", (request,response) => {
    console.log(request);
    dbconnection.get("new_sample").then((_res) => {
      if (_res) {
        response.send(_res);
      } else {
        response.send("error");
      }
    });
  });
  //
  app.get("/getAdminId/:id", (request, response) => {
    dbconnection.getId(request.params.id, "new_sample").then((res2) => {
      if (res2) {
        response.send(res2);
      } else {
        response.send("error");
      }
    });
  });

app.post("/resturantBook", (request,response ) => {
  console.log(request);
  let objects = {
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

///roomtype
app.get("/getQuery/:id", (request, response) => {
  console.log("get id",request.params.id);
  dbconnection.adminin.get(request.params.id).then((_res) => {
  if (_res) {
 console.log(_res);
  response.json(_res);
  } else {
  response.send("error");
  }
   });
  console.log("end");
 });
///////relationship
app.get("/getvalue/:id", (request,response) => {
  console.log("getvalue id",request.params.id);
  dbconnection.adminin.find(request.params.id).then((res3) => {
  if (res3) {
 console.log(res3);
  response.json(res3);
  } else {
  response.send("error");
  }
   });
  console.log("end");
 });

//////admin login
app.get("/get_all_query/:id", (request, response) => {
  console.log("get id",request.params.id);
  let fetchdata ={
    "selector": {
       "id": request.params.id
    }
 }
  dbconnection.adminin.find(fetchdata).then((res4) => {
  if (res4) {
 console.log(res4);
  response.json(res4);
  } else {
  response.send("error");
  }
   });
  console.log("end");
 });
app.listen(port, (err) => {
///post restaurantbook 
  if (err) {
    return console.log("something bad happened", err);
  }
 
console.log(`server is listening on http://localhost:${port}`);
logger.info("server is started successfully");
}
)
// });
 