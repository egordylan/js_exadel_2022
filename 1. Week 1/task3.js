/*
There is an array of prices of goods in the receipt.
In the console, you need to display the sum of all prices
and the average price of the product.

Total: 8495 hryvnias, average price of goods 700 hryvnias -
an example of a message in the console

*/
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123,
                942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];


function calcSummaAndAverage(array){
  let summa = 0;
  for (let i = 0; i < array.length; i++) {
    summa += array[i];
  }
  const average = summa / array.length;

  return `Total: ${summa} hryvnias, average price of goods ${average} hryvnias.`;
}

console.log(calcSummaAndAverage(prices));
