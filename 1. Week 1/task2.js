/*
Print numbers from 1 to 100 in the console.

1. If the number is divisible by 3 without a remainder,
then print the “number is divisible by 3” to the console.

2. If the number is divisible by 5 without a remainder,
then print to the console “the number is divisible by 5”.

3. If the number is divisible by both 3 and 5 without a remainder,
then you will output to the console “the number is divisible
by 3 by 5”.

The number 15 is evenly divisible by 3 and 5 -
an example of a message in the console.
*/

function iteration(){
  const from = 1;
  const to = 100;
  for (let i = from; i <= to; i++){
    if (i % 3 == 0 && i % 5 == 0){
      console.log(`The number ${i} is devisible by 3 and 5`);
    }
    else if(i % 3 == 0){
      console.log(`The number ${i} is devisible by 3`);
    }
    else if(i % 5 == 0){
      console.log(`The number ${i} is devisible by 5`);
    }
    else {console.log(i);}
  }
}
 console.log(iteration());
