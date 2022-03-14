/*
Create a currency converter using an exchange rate from
https://currencyapi.com/. A user should be able to pass a currency and
amount of money in a function and get the amount of money in the
desired currency in output. Use “then” syntax to implement the function.

currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
*/


const url = 'https://api.currencyapi.com/v3/latest?apikey=lmy7eZ0hleUxS2hsZt5l5aSQqhO1ux9aX3RaHICr';

// from USD to EUR (convert from every currency)
function currencyConvertor(quantity, to) {
  fetch(url)
    .then((res) => {return res.json();})
    .then((res) => {
      const result = res.data;
      console.log((result[to]['value']*quantity).toFixed(4));})
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('End of function.');
    })
}

currencyConvertor(40, 'EUR');
