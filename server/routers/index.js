const auth = require("./auth.routes");
const expense = require("./exposne.router");
const email = require("./sendEmail.router");
const user = require("./user.routes");

const initialize = (app) => {
  //system super-admin
  app.use("/api/auth", auth);
  app.use("/api/user", user);
  app.use("/expense", expense);
  app.use("/email", email);
};

module.exports = { initialize };
