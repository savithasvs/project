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
    .required(),
    reenter: Joi.string()
    .min(3)
    .required(),
    type: Joi.string()
    .required()
})
module.exports = {signupSchema};