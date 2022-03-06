/*
There is a JSON file with a price list. All prices there are in dollars.
You need to:
    a.  convert all prices to euros (use a static exchange rate).
    b. add a currency field to the source and output objects
    c. save both objects into variables and log them into the console.
*/


const jsonData = require('./task1-data.json');
const exchRate = 1.5;

function currencyExchange(json, exchangeRate) {
  const usdData = JSON.parse(JSON.stringify(json));
  const euData = JSON.parse(JSON.stringify(usdData));
  // add new field to JSON
  for (let i = 0; i < usdData['data'].length; i++) {
    if(!usdData['data']?.currency){
      usdData['data'][i]['Currency'] = 'USD';
    }
  }
  // exchane: USD to EU
  for (let i = 0; i < euData['data'].length; i++) {
    if(!euData['data']?.currency){
      euData['data'][i]['Currency'] = 'EU';
    }
  }

  let prices;
  for (let i = 0; i < euData['data'].length; i++) {
    if(!euData['data']?.Prices){
      prices = JSON.parse(JSON.stringify(euData['data'][i].Prices));
      for (let key in prices) {
        prices[key] *= exchangeRate;
        euData['data'][i].Prices[key] = prices[key];
      }
    }
  }
  return 'USD price: ', usdData['data'], '; EU price:', euData['data'];
}

console.log(currencyExchange(jsonData, exchRate));
