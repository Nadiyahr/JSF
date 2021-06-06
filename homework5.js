// ' strict mode'
//------HOMEWORK5------//


//------Task 1------//


function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
}

console.log(propsCount(mentor))


//------Tasc 2-------//



const car = {
  brrand: 'Citroën',
  model: 'Aircross',
  displacement: 1.6,
  fuel: 'diesel',
  color: 'red',
}

function showProps(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj).join(' '));
  console.log(Object.entries(obj).join('\n').replace(/,/g, ' : '));
}

showProps(car)


//------Task 3------//



class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname
  }
  showFullName() {
    console.log(this.name + ' ' + this.surname)
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {

    return this.surname + ' ' + this.name + ' ' + midleName
  }
  showCourse() {
    let now = new Date();

    return now.getFullYear() - this.year;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse());



//------Task 4------//


class Worker {
  #experience = 1.2;

  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  showSalary() {
    let sallary = this.dayRate * this.workingDays;
    return this.fullName + ' salary: ' + sallary.toFixed(1);
  }

  showSalaryWithExperience() {
    return this.fullName + ' salary: ' + this.maxSalary()
  }

  maxSalary() {
    return (this.dayRate * this.workingDays * this.#experience).toFixed(1);
  }
}


let worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);
console.log(worker1.showSalary())
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);

console.log(worker2.fullName);
console.log(worker2.showSalary())
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.7;
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);

console.log(worker3.fullName);
console.log(worker3.showSalary())
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.7;
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());


function sortedWithSalary() {
  const arr = [...arguments]
    .sort((a, b) => a.maxSalary() - b.maxSalary())
    .map(x => x.fullName + ': ' + x.maxSalary());

  return 'Sorted salary:\n' + arr.join('\n')
}

function sortedWithSalary1() {
  const arr = [...arguments];
  const maxExp = Math.max(...arr.map(x => x.showExp));
  const fArr = arr.filter(x => x.showExp === maxExp)
    .sort((a, b) => a.maxSalary() - b.maxSalary())
    .map(x => x.fullName + ': ' + x.maxSalary());

  return 'Sorted salary:\n' + fArr.join('\n');
}

console.log(sortedWithSalary(worker1, worker2, worker3));
console.log(sortedWithSalary1(worker1, worker2, worker3));


//------Task 5------//


class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(side1, side2) {
    super()
    this.side1 = side1;
    this.side2 = side2;
  }

  getArea() {
    return this.side1 * this.side2;
  }

  toString() {
    return super.toString();
  }
}

class Square extends GeometricFigure {
  constructor(side){
    super();
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }

  toString() {
    return super.toString();
  }
}


class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }

  toString() {
    return super.toString();
  }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];

function handleFigures(arr) {
  return arr.map(x => `Geometric figure: ${x.toString()} - area: ${x.getArea()}\n`).join('') +
    arr.map(x => x.getArea()).reduce((a, b) => a + b);
}


console.log(handleFigures(figures))
