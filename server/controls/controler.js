const my_db = require("../connection/db");
const logger = require("../logger/logger");

var SignupForm = async (object) => {
 try {
  var val = await my_db
   .add(object, "textile-industry")
   .then((data) => {
    logger.info("Your Data was posted sucessfully!!!");
    return data;
   })
   .catch((err) => {
    logger.error("error", "Your response from database");
    return err;
   });
 } catch (error) {
  console.log("OOPS!!!Error");
 }
 return val;
};

module.exports = { SignupForm };
app.post("/postquery", (request, response) => {
  
  var object = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email_id: request.body.email_id,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
    contact_no:request.body.contact_no,
    type:'user'
  };signupcontroller
  .SignupForm(object)
  .then((res) => {
    logger.info("Signup form added");
    response.send(res);
  })
  .catch((err) => {
    logger.warn("error ");
    response.send(err, "Faild to upload");
  });
console.log("Data added");
});
 
  

app.get("/getUser", (request, response) => {
  console.log(request);
  console.log("Fetching Begins");
  var value={
    selector:{
      type:'user'
    }
  };
  signupcontroller
  .getusers(data)
  .then((res) => {
    logger.info(" Login - user data successfully fetched");
    response.send(res);
  })
  .catch((err) => {
    logger.warn("error");
    response.send(err, " login Faild  to get");
  });
});
 


app.delete("/delete/:id/:id1", (request, response) => {
  usercontroller
    .deleteuser(request.params.id, request.params.id1)
    .then((res) => {
      logger.info(" Delete Admin users - user data successfully deleted");
      response.send(res);
    })
    .catch((err) => {
      logger.warn("error");
      response.send(err, " login Faild  to get");
    });
});