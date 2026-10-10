/**
 * @param {number} days
 *
 * @return {number}
 */

const rentalCondition = {
  daylyCost: 40,
  discount3Days: 20,
  discount7Days: 50,
};

function calculateRentalCost(days) {
  const totalPrice = rentalCondition.daylyCost * days;

  if (days >= 7) {
    return totalPrice - rentalCondition.discount7Days;
  }

  if (days >= 3) {
    return totalPrice - rentalCondition.discount3Days;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
