export const CalcTotalPrice = items => items.reduce((acc, food) => acc += food.price, 0)