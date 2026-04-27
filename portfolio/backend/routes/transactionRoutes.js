
const express = require('express');
const router = express.Router();
const {
  getTransactions,
  recordTransaction
} = require('../controllers/transactionController');
const protect = require('../middleware/authMiddleware');


router.use(protect);

router.route('/')
  .get(getTransactions)
  .post(recordTransaction);

module.exports = router;
