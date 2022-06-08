const Joi = require("joi");
const restSchema = Joi.object({
    fname: Joi.string()
    .min(3)
    .regex(/^[a-zA-Z]*/)
    .required(),
    aadhar: Joi.string()
    .min(12)
    .regex(/[2-9]{1}\d{3}\d{4}\d{4}/)
    .required(),
    email: Joi.string()
    .regex(/[A-Za-z0-9]*@gmail.com/)
    .required(),
    address: Joi.string()
    .min(4)
    .required(),
    MobileNumber: Joi.string()
    .regex(/((\\+91-?)|0)?\d{10}$/)
    .required(),
    roomtype: Joi.string()
    .required(),
    roomnumber: Joi.string()
    .required(),
    GuestCount: Joi.string()
    .required(),
    Price: Joi.string()
    .required(),
    type: Joi.string()
    .required(),
    user: Joi.string()
    .required()
})
module.exports = {restSchema};