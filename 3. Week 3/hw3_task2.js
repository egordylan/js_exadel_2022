/*
Given an array of objects.
Every object is an identity card of a person.
We need to keep only unique values in this array.
Implement a function that will do this work.
*/

const jsonData = require('./task2-data.json');


const filtered = jsonData.filter(function({name, username, email,
                                          phone, website}) {

  const key = `${name}${username}${email}${phone}${website}`;
  return !this.has(key) && this.add(key);
}, new Set);

console.log(filtered);
