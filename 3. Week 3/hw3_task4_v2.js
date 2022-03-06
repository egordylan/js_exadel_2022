/*
Extend build-in class string with a method
called removeSpecialCharacters.
This method should work for every string created within your js file.

For example ‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’
*/


String.prototype.removeSpecialCharacters = function(string){
      const letters = /^[A-Za-zА-Яа-яЇїІіА-Яа-я]*$/i;
      let result = '';
      for (let char of this) {
        const character = letters.test(char);
        if (character) {
          result += char;
        }
      }
      return result;
    }


let st = 'He//55ll09878o';
console.log(st.removeSpecialCharacters());
