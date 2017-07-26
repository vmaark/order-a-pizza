export function calculatePizzaPrice(toppings, basePrice) {
  const total = toppings.reduce((sum, topping) => {
    return sum + (topping.defaultSelected ? topping.price : 0);
  }, basePrice);
  return total;
}

export function calculateTotal(pizzas) {
  const total = pizzas.reduce((sum, pizza) => {
    return sum + calculatePizzaPrice(pizza.toppings, pizza.basePrice);
  }, 0);
  return total;
}
