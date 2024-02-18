const mongoose = require("mongoose");

const IncomeSource = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const incomeSource = mongoose.model("incomeSource", IncomeSource);
module.exports = incomeSource;
