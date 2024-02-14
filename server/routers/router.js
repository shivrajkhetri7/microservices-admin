const { signInController } = require('../controllers/signInController');
const { signUpController } = require('../controllers/signUpController');

const router = require('express').Router();

/**
 *  *** User signup router
 */
router.post('/signup',async(req,res)=>{
const bodyObject  = req?.body;
try {
    const resposne = await signUpController(bodyObject);
    res.json(resposne);
} catch (error) {
    res.json({
        error : JSON.stringify(error)
    })
}
});


/**
 *  *** User Login Router 
 */
router.post('/signin',async(req,res)=>{
    const bodyObject  = req?.body;
    try {
        const resposne = await signInController(bodyObject);
        res.json(resposne);
    } catch (error) {
        res.json({
            error : JSON.stringify(error)
        })
    }
});

// TODO 

/**
 *  1.  update the User details API // Like add the Profile Picture // First Name // Last Name
 *  2 . Add The expense details // 
 */
module.exports =  router;





