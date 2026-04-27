
const pool = require('../db');
const { calculateTotalInvestment, calculateCurrentValue, calculateProfitLoss } = require('../utils/calculationUtils');

const getPortfolio = async (req, res) => {
  try {
    const userId = req.user.id;
  
    const { search, filter } = req.query;

    let query = 'SELECT * FROM portfolio WHERE user_id = ?';
    let queryParams = [userId];

    if (search) {
      query += ' AND stock_name LIKE ?';
      queryParams.push(`%${search}%`);
    }

    const [rows] = await pool.query(query, queryParams);

  
    let resultData = rows;
    if (filter === 'profit') {
      resultData = rows.filter(stock => stock.current_price > stock.buy_price);
    } else if (filter === 'loss') {
      resultData = rows.filter(stock => stock.current_price < stock.buy_price);
    }

    res.status(200).json({ success: true, count: resultData.length, data: resultData });
  } catch (error) {
    console.error('Get portfolio error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching portfolio', error: error.message });
  }
};


const addStock = async (req, res) => {
  try {
    const userId = req.user.id;
    const { stock_name, quantity, buy_price, current_price } = req.body;

    if (!stock_name || !quantity || !buy_price || !current_price) {
      return res.status(400).json({ success: false, message: 'Please provide all stock details' });
    }

    const [result] = await pool.query(
      'INSERT INTO portfolio (user_id, stock_name, quantity, buy_price, current_price) VALUES (?, ?, ?, ?, ?)',
      [userId, stock_name, quantity, buy_price, current_price]
    );

    res.status(201).json({
      success: true,
      message: 'Stock added successfully',
      data: { id: result.insertId, user_id: userId, stock_name, quantity, buy_price, current_price }
    });
  } catch (error) {
    console.error('Add stock error:', error);
    res.status(500).json({ success: false, message: 'Server error adding stock', error: error.message });
  }
};


const updateStock = async (req, res) => {
  try {
    const userId = req.user.id;
    const stockId = req.params.id;
    const { stock_name, quantity, buy_price, current_price } = req.body;

    
    const [stocks] = await pool.query('SELECT * FROM portfolio WHERE id = ? AND user_id = ?', [stockId, userId]);
    if (stocks.length === 0) {
      return res.status(404).json({ success: false, message: 'Stock not found or unauthorized' });
    }

    
    const updatedName = stock_name || stocks[0].stock_name;
    const updatedQuantity = quantity || stocks[0].quantity;
    const updatedBuyPrice = buy_price || stocks[0].buy_price;
    const updatedCurrentPrice = current_price || stocks[0].current_price;

    await pool.query(
      'UPDATE portfolio SET stock_name = ?, quantity = ?, buy_price = ?, current_price = ? WHERE id = ?',
      [updatedName, updatedQuantity, updatedBuyPrice, updatedCurrentPrice, stockId]
    );

    res.status(200).json({
      success: true,
      message: 'Stock updated successfully'
    });
  } catch (error) {
    console.error('Update stock error:', error);
    res.status(500).json({ success: false, message: 'Server error updating stock', error: error.message });
  }
};


const deleteStock = async (req, res) => {
  try {
    const userId = req.user.id;
    const stockId = req.params.id;

    
    const [stocks] = await pool.query('SELECT id FROM portfolio WHERE id = ? AND user_id = ?', [stockId, userId]);
    if (stocks.length === 0) {
      return res.status(404).json({ success: false, message: 'Stock not found or unauthorized' });
    }

    await pool.query('DELETE FROM portfolio WHERE id = ?', [stockId]);

    res.status(200).json({ success: true, message: 'Stock deleted successfully' });
  } catch (error) {
    console.error('Delete stock error:', error);
    res.status(500).json({ success: false, message: 'Server error deleting stock', error: error.message });
  }
};


const getPortfolioSummary = async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await pool.query('SELECT quantity, buy_price, current_price FROM portfolio WHERE user_id = ?', [userId]);
    
    const totalInvestment = calculateTotalInvestment(rows);
    const currentValue = calculateCurrentValue(rows);
    const profitLoss = calculateProfitLoss(totalInvestment, currentValue);

    res.status(200).json({
      success: true,
      data: {
        totalInvestment,
        currentValue,
        profitLoss
      }
    });
  } catch (error) {
    console.error('Summary error:', error);
    res.status(500).json({ success: false, message: 'Server error calculating summary', error: error.message });
  }
};

module.exports = {
  getPortfolio,
  addStock,
  updateStock,
  deleteStock,
  getPortfolioSummary
};
