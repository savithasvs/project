const Joi = require("joi");
const signupSchema = Joi.object({
    firstName: Joi.string()
    .min(3)
    .regex(/^[a-zA-Z]*/)
    .required(),
    lastName: Joi.string()
    .min(3)
    .regex(/^[a-zA-Z]*/)
    .required(),
    email: Joi.string()
    .regex(/[A-Za-z0-9]*@gmail.com/)
    .required(),
    Password: Joi.string()
    .min(3)
    .regex(/"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/)
    .required(),
    reenter: Joi.string()
    .min(3)
    .regex(/{{ password.value }}/)
    .required(),
})
module.exports = {signupSchema};