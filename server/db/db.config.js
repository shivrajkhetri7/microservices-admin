const mongoose = require("mongoose");

if (!process.env.MONGO_URL || !process.env.DB_NAME) {
  console.error(
    `Required environments are missing mongourl:${process.env.MONGO_URL} || dbname:${process.env.DB_NAME}`
  );
  process.exit(1); // exiting the process to prevent further execution.
}

const connection = mongoose.connect(process.env.MONGO_URL, {
  dbName: process.env.DB_NAME,
});

module.exports = {
  connection,
};
