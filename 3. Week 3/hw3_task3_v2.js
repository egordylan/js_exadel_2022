/*
You need to create a Zoo catalog, where we will keep
all animals from this Zoo.
    a. You need to create a Zoo class which. See structure in
    the attachment. You should implement the following methods:
        i. get/set zoo’s address ***
        ii. get/set zoo’s area ***
        iii. get established date ***
        iv. get/set ticket’s price ***
        v. add/remove/edit worker
        vi. add/remove/edit animal
        vii. show all animals ***
        viii. show animal by id ***
        ix. show all workers ***
    b. Create Animal class. See structure in the attachment.
    Implement the following methods:
        i. get animal info ***
        ii. set weight ***
        iii. set height ***
    c. Create child classes for some kinds of animals.
    See structure in the attachment. Implement the possibility
    to set the properties of child classes.
*/


class Zoo {
  constructor(address, area, establishedDate, ticketPrice) {
    this.address = address;
    this.area = area;
    this.establishedDate = establishedDate;
    this.ticketPrice = ticketPrice;
    this.workers = [];
    this.animals = [];
  }
  // i. get/set zoo’s address
  getZooAddress(address) {
    return `The Address of our Zoo: ${this.address}.`
  }
  setZooAddress(address) {
    this.address = address;
  }
  //ii. get/set zoo’s area
  getZooArea(area) {
    return `The Area of our Zoo is ${this.area} square kilometres.`
  }
  setZooArea(area) {
    this.area = area;
  }
  // iii. get established date
  getEstablishedDate(establishedDate) {
    return `Our zoo has worked since ${this.establishedDate}.`
  }
  // iv. get/set ticket’s price
  getTicketPrice(ticketPrice) {
    return `The ticket price is: ${this.ticketPrice} usd.`
  }

  setTicketPrice(ticketPrice) {
    this.ticketPrice = ticketPrice;
  }

  // v. add/remove/edit worker
  addWorker (worker) {
    const id = Math.random().toString().slice(2);
    this.workers.push({[id]: worker});
  }

  removeWorker (worker) {
    for (let i = 0; i < this.workers.length; i++) {
      for (const key in this.workers[i]) {
        if (this.workers[i][key] === worker){
            delete this.workers[i];}
        }
    }
    this.workers = this.workers.filter((val) => val);
    return this.workers;
  }

  editWorker (prevWorker, newWorker) {
    for (let i = 0; i < this.workers.length; i++) {
        for (const key in this.workers[i]) {
          if(this.workers[i][key] === prevWorker){
            this.workers[i][key] = newWorker;}
            }
          }
    return this.workers;
  }

  // vi. add/remove/edit animal
  addAnimal (animal) {
    const id = Math.random().toString().slice(2);
    this.animals.push({[id]: animal});
  }

  removeAnimal (animal) {
    for (let i = 0; i < this.animals.length; i++) {
      for (const key in this.animals[i]) {
        if (this.animals[i][key] === animal){
            delete this.animals[i];}
        }
      }
    this.animals = this.animals.filter((val) => val);
    return (`The ${animal} deleted from the list.`, this.animals);
  }

  editAnimal (prevAnimal, newAnimal) {
    for (let i = 0; i < this.animals.length; i++) {
      for (const key in this.animals) {
        if (this.animals[i][key] === prevAnimal) {
          this.animals[i][key] = newAnimal;}
      }
    }
    return this.animals;
  }

  // vii. show all animals
  showAllAnimals(animals) {
    if (this.animals.length !== 0) {
      return this.animals;
    } else {
      throw Error('The List of animals is empty.');
      }
    }

  // viii. show animal by id
  showAllAnimalsByID(id) {
    if (this.animals.length !== 0) {
      for (let i = 0; i < this.animals.length; i++) {
        for (const key in this.animals[i]) {
          if (key === id) {
            return `The animal with ${id}: ${this.animals[i][id]}.`;
          }
          else {return `There is no animal with ID-${id}.`;}
        }
         }
      } else {
      throw Error('The List of animals is empty.');}
  }

  // ix. show all workers
  showAllWorkers(workers) {
    if (this.workers.length !== 0) {
      return this.workers;
    } else {
      throw Error('The List of workers is empty.');}
    }
}


class Animal extends Zoo {
  constructor(address, area, establishedDate, ticketPrice,
              type, color, weight, height, placeOfOrigin) {
    super(address, area, establishedDate, ticketPrice);
    this.type = type;
    this.color = color;
    this.weight = weight;  // kg
    this.height = height; // sm
    this.placeOfOrigin = placeOfOrigin;
  }

  getAnimalInfo(){
    return `The Animal has parametrs:
    - type: ${this.type};
    - color: ${this.color};
    - weight: ${this.weight} kg;
    - height: ${this.height} sm;
    - place of origin: ${this.placeOfOrigin}.`
  }

  setWeight(weight){
    this.weight = weight;
  }

  setHeight(height){
    this.height = height;
  }
}


class Snakes extends Animal{
  constructor(address, area, establishedDate, ticketPrice,
              type, color, weight, height, placeOfOrigin,
              isPoisonous) {
    super(address, area, establishedDate, ticketPrice,
          type, color, weight, height, placeOfOrigin);
    this.isPoisonous = isPoisonous;
  }

  getSnakesInfo() {
    return `This Animal has parametrs:
    - type: ${this.type};
    - color: ${this.color};
    - weight: ${this.weight} kg;
    - height: ${this.height} sm;
    - place of origin: ${this.placeOfOrigin};
    - is poisonous: ${this.isPoisonous}.`
  }

  setIsPoisonous(isPoisonous) {
    this.isPoisonous = isPoisonous;}
}


class CatLike extends Animal{
  constructor(address, area, establishedDate, ticketPrice,
              type, color, weight, height, placeOfOrigin,
              isSafeToPet) {
    super(address, area, establishedDate, ticketPrice,
          type, color, weight, height, placeOfOrigin);
  this.isSafeToPet = isSafeToPet;
  }
  getCatLikeInfo() {
    return `This Animal has parametrs:
    - type: ${this.type};
    - color: ${this.color};
    - weight: ${this.weight} kg;
    - height: ${this.height} sm;
    - place of origin: ${this.placeOfOrigin};
    - is safe to pets: ${this.isSafeToPet}.`
  }

  setIsSafeToPet(isSafeToPet) {
    this.isSafeToPet = isSafeToPet;}
}


class Birds extends Animal{
  constructor(address, area, establishedDate, ticketPrice,
              type, color, weight, height, placeOfOrigin, isFlying) {
    super(address, area, establishedDate, ticketPrice,
          type, color, weight, height, placeOfOrigin);
    this.isFlying = isFlying;
  }
  getBirdsInfo() {
    return `This Bird has parametrs:
    - type: ${this.type};
    - color: ${this.color};
    - weight: ${this.weight} kg;
    - height: ${this.height} sm;
    - place of origin: ${this.placeOfOrigin};
    - is flying: ${this.isFlying}.`
  }

  setIsFlying(isFlying) {
    this.isFlying = isFlying;
  }
}


class Worker extends Zoo {
  constructor(address, area, establishedDate, ticketPrice,
              firstName, lastName, phone){
    super(address, area, establishedDate, ticketPrice);
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }

  getWorkersInfo(){
    return `Information about the worker:
    - first name: ${this.firstName};
    - last name: ${this.lastName};
    - phone number: ${this.phone}.`
  }
}


const zoo = new Zoo('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                     300, 'March 03, 1997', 15);
// i. get/set zoo’s address
console.log(zoo.getZooAddress());
console.log(zoo.setZooAddress('0101 Primary Str, Oregon 0003, USA'));
console.log(zoo.getZooAddress());

//ii. get/set zoo’s area
console.log(zoo.getZooArea());
console.log(zoo.setZooArea(139));
console.log(zoo.getZooArea());

// iii. get established date
console.log(zoo.getEstablishedDate());

// iv. get/set ticket’s price
console.log(zoo.getTicketPrice());
console.log(zoo.setTicketPrice(8.99));
console.log(zoo.getTicketPrice());

// v. add/remove/edit worker
console.log(zoo.addWorker('Gandalf TheWhite'));
console.log(zoo.addWorker('John Snow'));
console.log(zoo.addWorker('Aragorn Son Of Aratorn'));
console.log(zoo.showAllWorkers());
console.log(zoo.removeWorker('John Snow'));
console.log(zoo.editWorker('Gandalf TheWhite', 'Gandalf The White'));

// vi. add/remove/edit animal
console.log(zoo.addAnimal('Alligator'));
console.log(zoo.addAnimal('Coala'));
console.log(zoo.addAnimal('Panda'));
console.log(zoo.addAnimal('Python'));
console.log(zoo.showAllAnimals());
console.log(zoo.editAnimal('Coala', 'Coala with babies'));
console.log(zoo.removeAnimal('Alligator'));
console.log(zoo.showAllAnimals());

// viii. show animal by id
console.log(zoo.showAllAnimalsByID('1936088329132135'));


// get/set weight height of animal and get get info about animals
const python = new Animal('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                          300, 'March 03, 1997', 15,
                          'Python', 'greenish-grey', 3.6, 200, 'Amazonia');
const coala = new Animal('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                          300, 'March 03, 1997', 15,
                          'Coala', 'grey', 2, 30, 'Australia');
console.log(coala.getAnimalInfo());
console.log(coala.setHeight(47));
console.log(coala.setWeight(11));
console.log(coala.getAnimalInfo());

// c. Create child classes for some kinds of animals.
// See structure in the attachment. Implement the possibility
// to set the properties of child classes.
const worker1 = new Worker('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                          300, 'March 03, 1997', 15,
                          'Gandalf', 'TheWhite', '8044 555 55 55');
const worker2 = new Worker('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                          300, 'March 03, 1997', 15,
                          'John', 'Snow', '8044 777 55 55');
const python2 = new Snakes('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                          300, 15,'March 03, 1997',
                          'Python 2', 'brownish', 5, 3.5, 'Amazonia', false);
console.log(python2.getSnakesInfo());
console.log(worker2.getWorkersInfo());

const cat = new CatLike('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                        300, 'March 03, 1997', 15,
                        'Persian cat', 'grey and white', 3, 25, 'Persia', true);
console.log(cat.getCatLikeInfo());

const eagle = new Birds('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                        300, 'March 03, 1997', 15,
                        'Eagle', 'brovn and white', 5, 55, 'North America', true);
const kivi = new Birds('1638 Steve Irwin Way, Beerwah QLD 4519, Australia',
                        300, 'March 03, 1997', 15,
                        'Kivi', 'grey and white', 1.5, 25, 'New Zeiland', false);
console.log(eagle.getBirdsInfo());
console.log(kivi.getBirdsInfo());
