const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config();
const bodyParser = require("body-parser");
const router = require("./routers/index");
const { connection } = require("./db/db.config");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// This is test api to testing the api
app.get("/", (req, res) => {
  res.json({ status: "sucesss" });
});

// app.use(router);
router.initialize(app);
/**
 *  Database connection
 */
connection
  .then(() => {
    console.log("Database connection successfully!");
  })
  .catch((err) => {
    console.error("Error while connecting to mongodb", err);
  });

app.listen(PORT, () => {
  console.log(`server running on the PORT http://localhost:${PORT}`);
});
