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

let firstName, lastName, group, year;

firstName = 'Nadia';
lastName = 'Hrabcenko';
group = 602;
year = 1979;
let isMaried = true;

const getType_firstName = typeof firstName;
const getType_lastName = typeof lastName;
const getType_grpoup = typeof group;
const getType_year = typeof year;
const getType_isMaried = typeof isMaried;

console.log(getType_isMaried, getType_year, getType_grpoup, getType_lastName, getType_firstName);

let isNull = null;
let isUndef;

console.log(typeof isNull, typeof isUndef);

//-------Task 7-------//

let user = prompt('Enter your usernamee here.', 'Username');
let mail = prompt('Enter your email address here.', 'Email');
let pass = prompt('Enter your password here.', 'Password');

document.write(`Dear ${user}, your email is ${mail}, your password is ${pass}.<br>`);

//-------Task 8-------//

let hour = 60 * 60;
let day = 24 * hour;
let month = 30 * day;

document.write(`One hour has ${hour} seconds.<br>One day has ${day} seconds.<br>One month has ${month} seconds.`);
