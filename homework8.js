//------Homework 8-------//


//------Task 1------//

function upperCase(str) {

  return /^[A-Z]/.test(str) ? 'String\'s starts with uppercase character' : 'String\'s not starts with uppercase'
};

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));


//------Task 2------//


function checkEmail(mail) {
  let check = /.+@.+\..+/g;
  return check.test(mail)
}

console.log(checkEmail("Qmail2@gmail.com"));



//------Task 3------//


let dBCheck = /d(b+)(d)/gi;

const dBmatch = Array.from("cdbBdbsbz".matchAll(dBCheck));

console.log(dBmatch);



//------Task 4------//



console.log('Java Script'.replace(/(\w+) (\w+)/i, '$2, $1'));


//------Task 5------//


let isValid = (card) => /^(\d{4}-){3}\d{4}$/g.test(card);

console.log(isValid('9999-8986-5678-3456'));



//------Task 6------//



let isCheckEmail = (mail) => /^\w+([-]?\w+)@\w+(\.\w{2,3})+$/.test(mail);

console.log(isCheckEmail('my_mail@gmail.com'));
console.log(isCheckEmail('#my_mail@gmail.com'));
console.log(isCheckEmail('my_ma--il@gmail.com'));
console.log(isCheckEmail('-my_mail@gmail.com'));
console.log(isCheckEmail('my-mail@gmail.com'));

console.log('=================================');

//------Task 7------//



let checkLogin = (login) => {

  let bol = /^([a-z0-9\.]*)$/i.test(login) && login.length < 11 && login.length > 1
  let logMatch = login.match(/\d+(?:\.\d{1,2})?/g).join(', ');

  return bol + ' \n' + logMatch;
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));
console.log(checkLogin('ed1.1dr78jggg43'));
