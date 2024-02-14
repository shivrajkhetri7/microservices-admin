const auth = require("./auth.routes");

const initialize = (app) => {
  //system super-admin
  app.use("/api/auth", auth);
};

module.exports = { initialize };
