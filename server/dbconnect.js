const Cloudant = require("@cloudant/cloudant");
const { request } = require("express");
const req = require("express/lib/request");
const url =
  "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud ";
const username = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
const password = "cb14c8c9976ced0867c79d8eb625505a";
 
const cloudant = Cloudant({ url: url, username: username, password: password });
const adminin = cloudant.use("new_sample");

 const get = function (dbname) {
  return cloudant.use(dbname).list();
};
 const getId = function (id, dbfname) {
  return cloudant.use(dbfname).get(id);
};

const del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
const admin = {
  id: "admin-1",
  name: "Savitha",
  email: "Savitha2503@gmail.com",
  password: "Admin@123",
  cpassword: "Admin@123",
  type:"admin",
};

 module.exports = {cloudant, adminin , get ,getId ,del_id}