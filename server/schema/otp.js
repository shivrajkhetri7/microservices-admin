const mongoose = require("mongoose");

const Otps = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const otps = mongoose.model("otps", Otps);
module.exports = otps;
