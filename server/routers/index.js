const auth = require("./auth.routes");
const expense = require("./exposne.router");

const initialize = (app) => {
  //system super-admin
  app.use("/api/auth", auth);
  app.use("/expense",expense);
};

module.exports = { initialize };
