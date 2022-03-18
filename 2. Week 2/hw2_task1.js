/*
Implement a function called pinCodeGenerator.
This function should take one argument called length and
return a randomly generated pin code of a given length.

For example,  pinCodeGenerator(5) → 73473
*/


function pinCodeGenerator(len) {
  let numbers = [];
  for (let i = 0; i < len; i++) {
    const randomNumber = Math.random().toString().slice(2);
    numbers.push(randomNumber[0]);
  }
  const pin = numbers.join(''); 
  return pin;
 // return parseInt(pin, 10);
}

console.log(pinCodeGenerator(5));


// var.2
function pinCodeGenerator1(len) {
  const randomNumber = Math.random().toString().slice(2, len+2);
  //return parseInt(randomNumber, 10);
  return randomNumber;
}

console.log(pinCodeGenerator1(5));


// var.3
function pinCodeGenerator2(len) {
  let numbers = [];
  for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);
  }
  const pin = numbers.join('');
  return pin;
 // return parseInt(pin, 10);
}

console.log(pinCodeGenerator2(5));

// v.4
function pinCodeGenerator3(len) {
  let numbers = [];
  for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);
  }
  const pin = numbers.join('');
  return pin;
 // return parseInt(pin, 10);
}

console.log(pinCodeGenerator3(5));
