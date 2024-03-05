const router = require('express').Router();

const { addExpense } = require('../controllers/expense/expense.controller');

router.post('/add-expense',addExpense);

module.exports = router;