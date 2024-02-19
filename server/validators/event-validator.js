const Joi = require('joi')

const eventValidator = async (validateDoc) => {
    const schema = Joi.object({
        eventName: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        eventDate: Joi.string()
            .required(),

        amount: Joi.number()
            .required(),

        userId: Joi.number()
            .required()
    });
    try {
        const value = await schema.validateAsync(validateDoc);
        return value
    } catch (error) {
        return error;
    }
}

module.exports = { eventValidator }