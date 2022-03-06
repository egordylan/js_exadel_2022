/*
Extend build-in class string with a method
called removeSpecialCharacters.
This method should work for every string created within your js file.

For example ‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’
*/


class String {
  constructor(string) {
    this.string = string;
  }
}


class RemoveSpecialCharacters extends String {

  constructor(string){
    super(string);
  }

  removeSpecialCharacters() {
      const letters = /^[A-Za-zА-Яа-яЇїІіА-Яа-я]*$/i;
      let result = '';
      for (let char of this.string) {
        const character = letters.test(char);
        if (character) {
          result += char;
        }
      }
      return result;
    }
}


let st = new RemoveSpecialCharacters('kjsdgiu654898346jhn4i34u');
console.log(st.removeSpecialCharacters());
