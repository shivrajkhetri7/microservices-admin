const { v4: uuidv4 } = require('uuid')

const { signUpValidator } = require("../validators/signup-validator");
const userSchema = require('../schema/userSchema');

const generateUserId = async () => {
    const uniqueId = uuidv4();
    return uniqueId;
};

const signUpController = async (document) => {
    try {

        const userId = await generateUserId();

        const validatePayload = {
            firstname: document?.firstname,
            lastname: document?.lastname,
            email: document?.email,
            phone: document?.phone
        }

        //? validate the document
        const validation = await signUpValidator(validatePayload);
        
        //  TODO : Save The password - encryption 
        const collectionResponse = new userSchema({
            ...document,
            userId: userId,
        });

        // Data store into collection
        const response = await collectionResponse.save();
        return response;

    } catch (error) {
        console.error(error);
        return error?.message;
    }
};

module.exports = {
    signUpController
}
