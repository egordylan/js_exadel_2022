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
    this.workers.push(worker);
  }

  removeWorker (name, surname, phoneNum) {
    let workerData = [];

    for (let i = 0; i < this.workers.length; i++) {
      workerData = []
      for (let p in this.workers[i]) {
        if (this.workers[i][p] === name){
            workerData.push(this.workers[i][p]);}
        else if (this.workers[i][p] === surname) {
            workerData.push(this.workers[i][p]);}
        else if (this.workers[i][p] === phoneNum) {
            workerData.push(this.workers[i][p]);}
        }
      if (workerData.length === 3) {
          delete this.workers[i];}
    }
    this.workers = this.workers.filter((val) => val);
    return this.workers;
  }

  editWorker (id, firstName, lastName, phone) {
    for (let i = 0; i < this.workers.length; i++) {
        if (id === i) {
          for (let p in this.workers[i]) {
            if (p === 'firstName' ){
              this.workers[i][p] = firstName;}
            else if (p === 'lastName') {
              this.workers[i][p] = lastName;;}
            else if (p === 'phone') {
                this.workers[i][p] = phone;}
          }
        }
    }
    return this.workers;
  }

  // vi. add/remove/edit animal
  addAnimal (animal) {
    this.animals.push(animal);
  }

  removeAnimal (type, color, weight, height, placeOfOrigin) {
    let animalsData = [];
      for (let i = 0; i < this.animals.length; i++) {
        animalsData = [];
        for (let p in this.animals[i]) {
          if (this.animals[i][p] === type){
            animalsData.push(this.animals[i][p]);}
          else if (this.animals[i][p] === color) {
            animalsData.push(this.animals[i][p]);}
          else if (this.animals[i][p] === weight) {
            animalsData.push(this.animals[i][p]);}
          else if (this.animals[i][p] === height) {
            animalsData.push(this.animals[i][p]);}
          else if (this.animals[i][p] === placeOfOrigin) {
            animalsData.push(this.animals[i][p]);}
        }
        if (animalsData.length === 5) {
          delete this.animals[i];}
      }
    this.animals = this.animals.filter((val) => val);
    return (`The ${type} from ${placeOfOrigin} deleted from the list.`);
  }

  editAnimal (id, type, color, weight, height, placeOfOrigin) {
    for (let i = 0; i < this.animals.length; i++) {
      if (id === i) {
        for (let p in this.animals[i]) {
          if (p === 'type'){
            this.animals[i][p] = type;}
          else if (p === 'color') {
            this.animals[i][p] = color;}
          else if (p === 'weight') {
              this.animals[i][p] = weight;}
          else if (p === 'height') {
              this.animals[i][p] = height;}
          else if (p === 'placeOfOrigin') {
              this.animals[i][p] = placeOfOrigin;}
            }
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
      return this.animals[id];
    } else {
      throw Error('The List of animals is empty.');
      }
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
  constructor(address,
              type, color, weight, height, placeOfOrigin) {
    super(address);
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
  constructor(address, type, color, weight, height, placeOfOrigin, isPoisonous) {
    super(address, type, color, weight, height, placeOfOrigin);
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
  constructor(address, type, color, weight, height, placeOfOrigin,
              isSafeToPet) {
    super(address, type, color, weight, height, placeOfOrigin);
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
  constructor(address, type, color, weight, height, placeOfOrigin, isFlying) {
    super(address, type, color, weight, height, placeOfOrigin);
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
  constructor(address, firstName, lastName, phone){
    super(address);
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
const worker1 = new Worker(zoo.address, 'Gandalf', 'TheWhite', '8044 555 55 55');
console.log(zoo.addWorker(worker1));

const worker2 = new Worker(zoo.address, 'John', 'Snow', '8044 777 55 55');
console.log(zoo.addWorker(worker2));
console.log(zoo.showAllWorkers());
console.log(zoo.removeWorker('John', 'Snow', '8044 777 55 55'));
console.log(zoo.showAllWorkers());
console.log(zoo.addWorker(worker2));
console.log(worker1.editWorker('Gandalf', 'The White', '8044 555 55 57'));
console.log(zoo.editWorker(0, 'Gandalf', 'The White', '8044 555 55 57'));
console.log(zoo.showAllWorkers());
console.log(worker1.getWorkersInfo());

// vi. add/remove/edit animal
const alligator = new Animal(zoo.address, 'Alligator', 'green', 3, 45,
                            'New Orlean, USA');
const python = new Animal(zoo.address, 'Python', 'greenish-grey', 3.6, 200,
                            'Amazonia');
const coala = new Animal(zoo.address, 'Coala', 'grey', 2, 30,
                          'Australia');
console.log(zoo.addAnimal(alligator));
console.log(zoo.addAnimal(python));
console.log(zoo.addAnimal(coala));
console.log(zoo.showAllAnimals());

console.log(zoo.editAnimal(2, 'Coala', 'grey', 2.3, 35, 'Australia'));
console.log(zoo.removeAnimal('Alligator', 'green', 3, 45, 'New Orlean, USA'));
console.log(coala.editAnimal('Coala', 'grey', 2.3, 35, 'Australia'));
console.log(zoo.showAllAnimals());

// viii. show animal by id
console.log(zoo.showAllAnimalsByID(1));

// get/set weight height of animal and get get info about animals
console.log(coala.getAnimalInfo());
console.log(coala.setHeight(47));
console.log(coala.setWeight(11));

// c. Create child classes for some kinds of animals.
// See structure in the attachment. Implement the possibility
// to set the properties of child classes.
const python2 = new Snakes(zoo.address, 'Python 2', 'brownish', 5, 3.5, 'Amazonia', false);
console.log(python2.getSnakesInfo());

const cat = new CatLike(zoo.address, 'Persian cat', 'grey and white', 3, 25, 'Persia', true);
console.log(cat.getCatLikeInfo());

const eagle = new Birds(zoo.address, 'Eagle', 'brovn and white', 5, 55, 'North America', true);
const kivi = new Birds(zoo.address, 'Kivi', 'grey and white', 1.5, 25, 'New Zeiland', false);
console.log(eagle.getBirdsInfo());
console.log(kivi.getBirdsInfo());
console.log(zoo.addAnimal(kivi));
console.log(zoo.showAllAnimals());
