
const pool = require('../db');


const getTransactions = async (req, res) => {
  try {
    const userId = req.user.id;
    const [rows] = await pool.query('SELECT * FROM transactions WHERE user_id = ? ORDER BY date DESC', [userId]);
    
    res.status(200).json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    console.error('Get transactions error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching transactions', error: error.message });
  }
};


const recordTransaction = async (req, res) => {
  try {
    const userId = req.user.id;
    const { stock_name, type, quantity, price } = req.body;

    if (!stock_name || !type || !quantity || !price) {
      return res.status(400).json({ success: false, message: 'Please provide all transaction details' });
    }

    if (type !== 'buy' && type !== 'sell') {
      return res.status(400).json({ success: false, message: 'Transaction type must be either buy or sell' });
    }

    const date = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD

    const [result] = await pool.query(
      'INSERT INTO transactions (user_id, stock_name, type, quantity, price, date) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, stock_name, type, quantity, price, date]
    );

    res.status(201).json({
      success: true,
      message: 'Transaction recorded successfully',
      data: { id: result.insertId, user_id: userId, stock_name, type, quantity, price, date }
    });
  } catch (error) {
    console.error('Record transaction error:', error);
    res.status(500).json({ success: false, message: 'Server error recording transaction', error: error.message });
  }
};

module.exports = {
  getTransactions,
  recordTransaction
};
