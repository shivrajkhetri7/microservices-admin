const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connection = mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME
});

module.exports= {
    connection
}
