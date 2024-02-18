const expenseSchema = require("../../schema/expenseSchema");
const constants = require("../../utils/constants");
const { transactionId } = require("../../utils/utils");
const { expenseValidor } = require("../../validators/expense-validator");

/**
 * @function addExpense 
 * @description this function is responsible to add The expense details in expense table
 */
const addExpense = async (req, res) => {
    try {
        const payload = req?.body;
        const txnId = await transactionId();
        const payloadToValidate = {
            transactionId: txnId,
            userId: payload?.userId,
            expenseAmount: payload?.expenseAmount,
            expenseType: payload?.expenseType
        }
        //? validating the payload
        await expenseValidor(payloadToValidate);
        const response = await expenseSchema.create(payloadToValidate);
        res.status(constants.CODES.SUCCESS).json({
            success: true,
            message: 'Transaction added successfully',
            data: response,
        });
    } catch (error) {
        console.error(error);
        res.status(constants.CODES.SOMETHING_WENT_WRONG).json({
            status: false,
            error: JSON.stringify(error)
        })
    }
}

const deleteExpense = async () => {
    // TODO :  Deletd The Transaction  
}

const updateExpense = async () => {
    //TODO : Update the expense 
}


module.exports = {
    addExpense,
    deleteExpense,
    updateExpense
}