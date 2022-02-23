/*
Create a function that checks whether a phone number is valid or not.
NOTE: You don’t need to test your function with all possible
phone numbers, just check if the function will work correctly
with the following inputs.

validatePhoneNymber(067 734 4343) → true
validatePhoneNymber(094 643 7432) → true
validatePhoneNymber(083 jfvj 4554) → false
validatePhoneNymber(Anton0938 884) → false
validatePhoneNymber(0437348348) → true
*/


function validatePhoneNymber(stringPhoneNumber) {
  // delete whitespaces
  const regExp = / /gi;
  const phoneNumber = stringPhoneNumber.replace(regExp, '');

  const result = /\d{10}/.test(phoneNumber);

  return result;
}

console.log(validatePhoneNymber('067 734 4343'));
console.log(validatePhoneNymber('094 643 7432'));
console.log(validatePhoneNymber('083 jfvj 4554'));
console.log(validatePhoneNymber('Anton0938 884'));
console.log(validatePhoneNymber('0437348348'));
