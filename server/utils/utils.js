const { v4: uuidv4 } = require("uuid");

const generateUserId = async () => {
    const uniqueId = uuidv4();
    return uniqueId;
  };

const transactionId =async()=>{
    const uniqueId = uuidv4();
    return `TXN-${uniqueId}`;
};

module.exports = {
    transactionId,
    generateUserId
}