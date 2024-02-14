const Joi = require('joi');
const signUpValidator = async (validateDoc) => {
    //? this the schema for validation for document
    const schema = Joi.object({
        firstname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        lastname: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        phone: Joi.number(),

        email: Joi.string()
            .email()
    });

    try {
        const value = await schema.validateAsync(validateDoc);
        return value;
    } catch (error) {
        return error;
    }
}

module.exports = {
    signUpValidator
}