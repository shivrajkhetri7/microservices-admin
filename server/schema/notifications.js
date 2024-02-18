const mongoose = require("mongoose");

const Notifications = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["sent","pending","failed"],
    },
    data: {
      type: Object,
    },
  },
  { timestamps: true }
);

const notifications = mongoose.model("notifications", Notifications);
module.exports = notifications;
