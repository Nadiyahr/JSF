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




//------HOMEWORK 2------//



//------Task 1-------//


let x = 1;
let y = 2;

let res1 = '' + x + y;
console.log(res1);
console.log(typeof res1);

let res2 = !!x + '' + y;
console.log(res2);
console.log(typeof res2);

let res3 = !!x;
console.log(res3);
console.log(typeof res3);

let res4 = x + NaN;
console.log(res4);
console.log(typeof res4);


//------Task 2------//


let num = prompt('Enter a number here.', 'Enter here a number');

if ( +num > 0 && num % 2 === 0 && +num % 7 === 0 ) {
  console.log('This number is a multiple of 7, positive and even.');
}
else if ( +num > 0 && num % 2 === 0 ) {
  console.log('This number is positive and even, but not a multiple of 7.');
}
else if ( +num > 0 ) {
  console.log('This number is positive, but not even and not a multiple of 7.');
}
else {
  console.log('Not a number..');
}


//------Task 3------//


const arr = [];

arr[0] = 3;
arr[1] = 'Ciao';
arr[2] = true;
arr[3] = null;

document.write(`${arr.length} `)

arr[4] = prompt('Enter a value here', '');

document.write(`${arr[4]} `);

arr.shift();

document.write(`${arr} `)


//------Task 4------//


const cities = ['Rome','Lviv','Warsaw'];

document.write(`<br>${cities.join(' * ')}<br>`);


//------Task 5------//



let isAdult1 = +prompt('How old are you?', 'Enter here your age');

if ( isAdult1 < 10 ) {
  document.write('You are still too yong.<br>');
}
else if ( isAdult1 >= 10 && isAdult1 < 18 ) {
  document.write('You are not yet an adult.<br>');
}
else if ( isAdult1 >= 18 && isAdult1 < 100 ) {
  document.write('You have reached the age of majority.<br>');
}
else {
  document.write('Incorrect data.<br>');
}


//------Task 6------//


let a = +prompt('Enter the value of the first side of the triangle', 'Side A');
let b = +prompt('Enter the value of the second side of the triangle', 'Side B');
let c = +prompt('Enter the value of the third side of the triangle', 'Side C');
console.log(isNaN(a));
 if (a === 0 || isNaN(a) || b === 0 || isNaN(b) || c === 0 || isNaN(c)) {
   console.log('Incorect data');
 }
 else {

   let p = (a + b + c) / 2;
   let s = Math.sqrt( p * (p - a) * (p - b) * (p - c) );

   console.log(`The area of this triangle is ${s.toFixed(3)}.`);

   let i, c1, c2;

   if ( a > b && a > c ) {
     i = a;
     c1 = b;
     c2 = c;
   }
   else if ( b > a && b > c) {
     i = b;
     c1 = c;
     c2 = a;
   }
   else {
     i = c;
     c1 = a;
     c2 = b;
   }

   i ** 2 === c1 ** 2 + c2 ** 2
     ? console.log('It\'s a right triangle')
     : console.log('It is not a right triangle');
 }


//------Task 7------//


let now = new Date();
let getHour = now.getHours();

switch (true) {
    case getHour >= 5 && getHour < 11:
      document.write('Доброго ранку.');
      break;

    case getHour >= 11 && getHour < 17:
      document.write('Доброго дня.');
      break;

      case getHour >= 17 && getHour < 23:
      document.write('Доброго вечора.');
      break;

      case getHour >= 23 && getHour < 5:
      document.write('Доброї ночі.');
}

if (getHour >= 5 && getHour < 11) {
  document.write('Доброго ранку.');
}
else if (getHour >= 11 && getHour < 17) {
  document.write('Доброго дня.');
}
else if (getHour >= 17 && grtHour < 23) {
  document.write('Доброго вечора.');
}
else {
  document.write('Доброї ночі.');
}


//------Homework 3------//


//------Task 1------//


const array = [2,3,4,5];
let multi = 1;

for (let i = 0; i < array.length; i++) {
  multi *= array[i];
}

console.log('result ' + multi);

let m_while = 1;
let count = 0;

while (count < array.length) {
  m_while *= array[count];
  count++;
}

console.log('While result ' + m_while);


//------Task 2------//


let check = '';

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    check += `${i} is even.<br>`;
  }
  else {
    check += `${i} is odd.<br>`
  }
}

document.write(check);


//------Task 3------//


function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push( Math.floor( Math.random() * 501 ))
  }
  return arr;
}

console.log(randArray(5));


//------Task 4------//


function raiseToDegree(a, b) {
  return a ** b;
}


//------Task 5------//


function findMind() {
  return Math.min(...arguments);
}

console.log(findMind(4, 6, 1, -5, 7, 9));


//------Task 6------//


function findUnique(arr) {
  const setArr = new Set(arr);
  return setArr.size === arr.length;
}

console.log(findUnique([1, 9, 2, 9, 3, 5]));


//------Task 7------//


function lastElem(arr, num = 1) {
  return arr.slice(-num)
}

  console.log(lastElem([3, 4, 10, -5], 2));


  //------Test 8------//


  function transformFirst(str) {
    let first = str.slice(0, 1).toUpperCase();
    let rest = str.slice(1)
    return first + rest;
  }

  console.log(transformFirst('i love java script') )

