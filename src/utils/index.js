/**
 * This function calculates the total price of the cart products and returns it as a number
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}