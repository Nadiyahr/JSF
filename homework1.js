//-----Homework 1 -----//

//-------Task 2-------//

console.log('Hrabcenko');

//-------Task 3-------//

let one = 'Hello<br>';
let two = 'World<br> ';

document.write(one, two);

two = one;

document.write(one, two);


//-------Task 4-------//

const obj = {
  'String': 'Hello',
  'Number': 25,
  'Boolean': true,
  'Undefined': undefined,
  'Null': null,
}

console.log(obj);

//-------Task 5-------//

let isAdult = confirm('Are you of age?')

console.log(isAdult);

//-------Task 6-------//

let firstName, lastName, studieGroup, year;

firstName = 'Nadia'; //string
lastName = 'Hrabcenko'; //string
studieGroup = 602; //number
year = 1979; //number

let isMaried = true; //boolean

console.log(studieGroup, year, isMaried, firstName, lastName);

let isNull = null;
let isUndef;

console.log(typeof isNull, typeof isUndef);

//-------Task 7-------//

let user = prompt('Enter your usernamee here.', '');
let mail = prompt('Enter your email address here.', '');
let pass = prompt('Enter your password here.', '');

document.write(`Dear ${user}, your email is ${mail}, your password is ${pass}.<br>`);

//-------Task 8-------//

let hour = 3600;
let day = 24 * hour;
let month = 30 * day;

document.write(`One hour has ${hour} seconds.<br>One day has ${day} seconds.<br>One month has ${month} seconds.`);
