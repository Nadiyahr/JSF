//------Homework 7------//


//-------Task 1------//


// let myWindow = window.open("", "", "width=300,height=300");

// setTimeout(() => {
//   myWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(() => {
//   myWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(() => {
//   myWindow.close();
// }, 6000);

// let openTab = window.open("", "", "height=300,width=300");

//     openTab.setTimeout(function(){ window.resizeTo("500", "500")}, 2000);




//------Task 2------//



let idMyText = document.getElementById('text');
function changeCSS() {
  idMyText.style.fontFamily = 'Comic Sans MS';
  idMyText.style.color = 'orange';
  idMyText.style.fontSize = '20px';
}


//------Task 3------//

let myBody = document.body.style;

document.getElementById('blue').onclick = () => myBody.background = 'blue';

document.getElementById('pink').ondblclick = () => myBody.background = 'pink'

document.getElementById('brown').onmousedown = () => myBody.background = 'brown'

document.getElementById('brown').onmouseup = () => myBody.background = 'white'

document.getElementById('yellow').onmouseenter = () => myBody.background = 'yellow'

document.getElementById('yellow').onmouseleave = () => myBody.background = 'white'



//------Task 4------//



document.getElementById('delete').onclick = () => {
  const options = document.getElementById('forDel');

  options.remove(options.selectedIndex);
}



//------Task 5-----//



let butt = document.querySelector('.motion');
let out = document.querySelector('.out');

// butt.onclick = () => out.innerHTML = 'I was pressed!';
butt.onmousedown = () => out.innerHTML += 'I was pressed!<br>';

butt.onmouseenter = () => out.innerHTML += 'Mouse on me!<br>';

butt.onmouseleave = () => out.innerHTML += 'Mouse is not on me! <br>';



//------Task 6------//



document.getElementsByTagName('body')[0].onresize = () => {
  var w = window.innerWidth;
  var h = window.innerHeight;
  let txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById('task6').innerHTML = txt;
}



//------Task 7------//

const country = {
  ger: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
  usa: ['New York', 'Chicago', 'San Francisco', 'Maiami'],
  ukr: ['Kyiv', 'Lviv', 'Odessa', 'Kjarkiv', 'Dnipro']
}


let citySelect = document.getElementById('cities');
let countrySelect = document.getElementById('country');

window.onload = window.onload = () => {
  let str = '';
    for (key in country) {
      if (key === countrySelect.value) {
        for (index of country[key]) {
          str += `<option value="${index}">${index}</option>`;
        }
      }
    }
    cities.innerHTML = str;
  }


countrySelect.addEventListener('change', function() {
  let selectOp = country[this.value];
  let textOp = this.selectedOptions[0].text;
  document.getElementById('print').innerHTML = textOp + ', ';

  while (citySelect.options.length > 0) {
    citySelect.options.remove(0);
  }

  selectOp.forEach((el) => {
    let optionEl = new Option(el, el);
    citySelect.append(optionEl)
  })

  citySelect.addEventListener('change', function() {
    countrySelect.value
    // let cityOp = citySelect.value;
    document.getElementById('print').innerHTML = citySelect.value;
  })
})

