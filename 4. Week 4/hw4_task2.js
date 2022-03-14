/*
Create currencyConvertorAsync function.
Reimplement the first task with async/await syntax. Use a
separate *.js file for this task.
*/
const url = 'https://api.currencyapi.com/v3/latest?apikey=lmy7eZ0hleUxS2hsZt5l5aSQqhO1ux9aX3RaHICr';

async function currencyConvertor(quantity, to) {
  const fetchedData = await fetch(url);
  const result = await fetchedData.json();
  const data = result.data;
  console.log((data[to]['value'] * quantity).toFixed(4));
}

currencyConvertor(40, 'EUR');
