/*
There is an array of prices of goods in the receipt.
In the console, you need to display the sum of all prices
and the average price of the product.

Total: 8495 hryvnias, average price of goods 700 hryvnias -
an example of a message in the console

*/
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123,
                942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];


function sum(array){
  let summa = 0;
  const length = array.length;
  for (let i = 0; i < length; i++) {
    summa += array[i];
  }
  let average = summa / length;

  return `Total: ${summa} hryvnias, average price of goods ${average} hryvnias.`;
}

console.log(sum(prices));
