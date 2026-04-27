
const express = require('express');
const router = express.Router();
const {
  getPortfolio,
  addStock,
  updateStock,
  deleteStock,
  getPortfolioSummary
} = require('../controllers/portfolioController');
const protect = require('../middleware/authMiddleware');


router.use(protect);

router.route('/')
  .get(getPortfolio)
  .post(addStock);

router.get('/summary', getPortfolioSummary);

router.route('/:id')
  .put(updateStock)
  .delete(deleteStock);

module.exports = router;
