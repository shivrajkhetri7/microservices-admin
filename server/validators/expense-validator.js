const Joi = require('joi');

const expenseValidor = async (validateDoc) => {
    //? this the schema for validation for document
    const schema = Joi.object({
        transactionId: Joi.string()
            .alphanum()
            .required(),

        expenseAmount: Joi.string()
            .alphanum()
            .required(),

        expenseType: Joi.string()
            .alphanum()
            .required(),

        userId: Joi.Joi.string()
            .alphanum()
            .required(),
    });

    try {
        const value = await schema.validateAsync(validateDoc);
        return value;
    } catch (error) {
        return error;
    }
}

module.exports ={
    expenseValidor
}
