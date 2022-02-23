/*
There is an array with the most popular last names,
but few elements don’t look like valid last names.
Delete invalid elements of the array.
const arr =  ["НПП Прізвище Кіл-ть Приблизно",
              "______________________в_ базіпо_Україні",
              "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО",
              "БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО",
              "КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]
*/


const arr =  ["НПП Прізвище Кіл-ть Приблизно",
              "______________________в_ базіпо_Україні",
              "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО",
              "БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО",
              "КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"];

function onlySurnames(array) {
  let newArray = [];
  for (let char of array) {
    // Used english, ukrainian and russian letters search. Ignored register.
    const surname = /^[A-Za-zА-Яа-яЇїІіА-Яа-я]*$/i;
    const result = surname.test(char);

    if (result) {
      newArray.push(char);
    }
  }
  return newArray;
}

console.log(onlySurnames(arr));
