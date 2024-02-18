const mongoose = require("mongoose");

const User = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    totalIncome:{
      type: Number,
    },
    incomeType:{
      type:String,
      enum:["fixedIncome","variableIncome"],
      default:"fixedIncome"
    },
    thresholdPercent:{
      type:Number,
      default: 50
    },
    createdAt: {
      default: Date.now,
      type: Date,
    },
  },
  { timestamps: true }
);

const userSchema = mongoose.model("user", User);
module.exports = userSchema;
