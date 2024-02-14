const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { connection } = require('./db/db.config');
const router = require('./routers/router');
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This is test api to testing the api
app.get('/',(req,res)=>{
    res.json({status: "sucesss"});
})

app.use(router);
/**
 *  Database connection
 */
connection.then(()=>{
    console.log('Database connection sucessful...')
}).catch((err)=>{
    console.error(err);
});

app.listen(PORT,()=>{
    console.log(`server running on the PORT ${PORT}`);
})