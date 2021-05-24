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



let isAdult = +prompt('How old are you?', 'Enter here your age');

if ( isAdult < 10 ) {
  document.write('You are still too yong.<br>');
}
else if ( isAdult >= 10 && isAdult < 18 ) {
  document.write('You are not yet an adult.<br>');
}
else if ( isAdult >= 18 && isAdult < 100 ) {
  document.write('You have reached the age of majority.<br>');
}
else {
  document.write('Incorrect data.<br>');
}


//------Task 6------//


let a = +prompt('Enter the value of the first side of the triangle', '');
let b = +prompt('Enter the value of the second side of the triangle', '');
let c = +prompt('Enter the value of the third side of the triangle', '');
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
let hour = now.getHours();

switch (true) {
    case hour >= 5 && hour < 11:
      document.write('Доброго ранку.');
      break;

    case hour >= 11 && hour < 17:
      document.write('Доброго дня.');
      break;

      case hour >= 17 && hour < 23:
      document.write('Доброго вечора.');
      break;

      case hour >= 23 && hour < 5:
      document.write('Доброї ночі.');
}

if (hour >= 5 && hour < 11) {
  document.write('Доброго ранку.');
}
else if (hour >= 11 && hour < 17) {
  document.write('Доброго дня.');
}
else if (hour >= 17 && hour < 23) {
  document.write('Доброго вечора.');
}
else {
  document.write('Доброї ночі.');
}
