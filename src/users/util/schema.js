
import * as Joi from 'joi'
import {ValidationError} from "../../exception/validationError"
export const schemaInsertUser = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password')

}).error(() => new ValidationError("422", "Invalid request"))