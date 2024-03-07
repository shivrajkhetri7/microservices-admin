const { v4: uuidv4 } = require("uuid");

const generateUserId = async () => {
  const uniqueId = uuidv4();
  return uniqueId;
};

const transactionId = async () => {
  const uniqueId = uuidv4();
  return `TXN-${uniqueId}`;
};

const generateOtp = async () => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
};

module.exports = {
  transactionId,
  generateUserId,
  generateOtp,
};
