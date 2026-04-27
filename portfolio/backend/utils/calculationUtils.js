
/**
 * Calculates total investment based on buy price and quantity
 * @param {Array} portfolioItems - Array of stock objects
 * @returns {Number} Total investment amount
 */
const calculateTotalInvestment = (portfolioItems) => {
  return portfolioItems.reduce((total, item) => {
    return total + (parseFloat(item.buy_price) * parseInt(item.quantity));
  }, 0);
};

/**
 * Calculates current value based on current price and quantity
 * @param {Array} portfolioItems - Array of stock objects
 * @returns {Number} Current portfolio value
 */
const calculateCurrentValue = (portfolioItems) => {
  return portfolioItems.reduce((total, item) => {
    return total + (parseFloat(item.current_price) * parseInt(item.quantity));
  }, 0);
};

/**
 * Calculates total profit or loss
 * @param {Number} totalInvestment 
 * @param {Number} currentValue 
 * @returns {Number} Profit or loss amount
 */
const calculateProfitLoss = (totalInvestment, currentValue) => {
  return currentValue - totalInvestment;
};

module.exports = {
  calculateTotalInvestment,
  calculateCurrentValue,
  calculateProfitLoss
};
