//------HOMEWORK 6------//



//------Task 1------//


// let but = document.createElement('button');
// but.onclick = f1;

let test = document.getElementById('test');
test.style.margin = '0 0 20px 0'
test.onclick = f1;

function f1() {
  // document.getElementById('test').innerHTML = 'Last';

  // document.querySelector('#test').innerHTML = 'Last';

  document.getElementsByTagName('div')[0].innerHTML = 'Last';
}
// document.getElementById('test').after(but);



//------Task 2------//



// let but2 = document.createElement('button');
// but2.onclick = f2;

let img = document.querySelector('.image');
img.onclick = f2;

function f2() {
  img.setAttribute("alt", "cat");
  img.src = "cat.jpg";
  alert(`${img.outerHTML}`);
}

// img.after(but2)



//------Tasc 3------//



const container = document.querySelector('#text');
const matches = container.querySelectorAll('div p');

matches.forEach((x, i) => console.log(`Selector ${x.parentElement.id} ${i}: ${x.innerHTML}`));



//------Task 4------//


const list = document.getElementById('list');
const first = list.firstChild.nextSibling
const last = list.lastChild.previousSibling
const second = first.nextElementSibling;
const third = second.nextElementSibling;
const fourth = last.previousElementSibling;
console.log(first.innerHTML, last.innerHTML, second.innerHTML, fourth.innerHTML, third.innerHTML);


const ulList = document.querySelector('#list').querySelectorAll('ul li');
console.log(ulList[0].innerHTML, ulList[4].innerHTML, ulList[1].innerHTML, ulList[3].innerHTML, ulList[2].innerHTML);



//------Task 5------//



const h1 = document.querySelectorAll('h1')[1];
h1.style.background = 'lightgreen';
h1.style.maxWidth = '350px';

const par = document.getElementById('myDiv').querySelectorAll('div p');

// for (let i = 0; i < par.length; i++) {
//   par[i].style.fontSize = '20px';
// }
par.forEach(x => x.style.fontSize = '20px';
par[0].style.fontWeight = 800;
par[1].style.color = 'red';
par[2].style.textDecoration = 'underline';
par[3].style.fontStyle = 'italic';

const myLi = document.getElementById('myList').querySelectorAll('ul li');

for (let i = 0; i < myLi.length; i++) {
  myLi[i].style.display = 'inline';
  myLi[i].style.marginRight = '-4px';
}

const span = document.querySelector('span');
span.style.visibility = 'hidden';



//------Task 6------//



let but6 = document.createElement('button');
but6.onclick = f6;

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
const out6 = document.querySelector('.out6')
out6.append(but6);

function f6() {
  input1.value = prompt('Tipe something');
  input2.value = prompt('Tipe something else');
  out6.append('Click again the button to trade)')
  but6.onclick = () => {
    let t = input1.value;
    input1.value = input2.value;
    input2.value = t;
  }
}


//------Task 7------//



let mainClass = document.createElement('main');
mainClass.classList.add('mainClass');

let myDiv = document.createElement('div');
myDiv.classList.add('myDiv');

let myP = document.createElement('p');
myP.innerHTML = 'First paragraph';

myDiv.append(myP);
mainClass.append(myDiv);

document.querySelector('.out7').append(mainClass);


//---Style for buttons---//

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.background = 'plum';
  buttons[i].classList.add('input');
  buttons[i].innerHTML = 'Change';
  buttons[i].style.margin = '10px';
}
