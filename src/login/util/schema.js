import { ValidationError } from "../../exception/validationError";
import * as Joi from 'joi'


export const loginSchema = Joi.object({

    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
}).error(() => new ValidationError("Invalid Contract", "Bad request"));

export const validateSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
}).error(() => new ValidationError("Invalid Contract", "Bad request"))
