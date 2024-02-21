const auth = require("./auth.routes");
const expense = require("./exposne.router");
const event = require('./event.routes')

const initialize = (app) => {
  //system super-admin
  app.use("/api/auth", auth);
  app.use("/expense",expense);
  app.use("/event",event)
};

module.exports = { initialize };
