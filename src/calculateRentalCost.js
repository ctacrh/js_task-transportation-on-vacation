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

  switch (true) {
    case days >= 3 && days < 7:
      return totalPrice - rentalCondition.discount3Days;

    case days >= 7:
      return totalPrice - rentalCondition.discount7Days;

    default:
      return totalPrice;
  }
}

module.exports = calculateRentalCost;
