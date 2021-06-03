//------Homework 3------//


//------Task 1------//


const array = [2, 3, 4, 5];
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
    arr.push(Math.floor(Math.random() * 501))
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
//   let first = str.slice(0, 1).toUpperCase();
//   let other = str.slice(1)
//   return first + other;
  return str.split(' ').map(a => a.slice(0, 1).toUpperCase() + a.slice(1)).join('');
}

console.log(transformFirst('i love java script'));
