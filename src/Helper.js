export function calculatePizzaPrice(toppings, basePrice) {
  const total = toppings.reduce((sum, topping) => {
    return sum + (topping.selected ? topping.price : 0);
  }, basePrice);
  return total.toFixed(2);
}

export function calculateTotal(pizzas) {
  const total = pizzas.reduce((sum, pizza) => {
    return calculatePizzaPrice(pizza.toppings, pizza.basePrice);
  }, 0);
  return total;
}
