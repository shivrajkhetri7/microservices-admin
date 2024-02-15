const jwt = require("jsonwebtoken");

exports.encode = (params) => {
  let token = jwt.sign(
    {
      params: params,
      iat: new Date().getTime(),
    },
    process.env.SECRETKEY
  );
  return token;
};

exports.decode = (token) => {
  let params;
  try {
    params = jwt.verify(token, process.env.SECRETKEY);
    params = {
      flag: true,
      params: params.params,
    };
  } catch (error) {
    params = {
      flag: false,
    };
  }

  return params.params;
};

exports.encodeWithExpiry = (params) => {
  const token = jwt.sign(
    {
      params,
      iat: new Date().getTime(),
    },
    process.env.SECRETKEY,
    { expiresIn: "1h" }
  );
  return token;
};
