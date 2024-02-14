const userSchema = require("../schema/userSchema");

const signInController=async(document)=>{
    try {
        const {email, password} =document; 
        
        const response = await userSchema.findOne({email});
        if(!response){
            throw new Error(`email address not exiest ${email}`);
        }

        // TODO decrypt the Pasword and validate
        const {password : dbPassword}  = response; 
        
        if(password !== dbPassword){
            throw new Error(`password not match`);
        }

        return {
             status : "success",
             messsage : 'signin successfull .... '
        }
    } catch (error) {
        console.error(error);
        return error
    }
}

module.exports = {
    signInController
}