//--------Homework 4--------//


//------Task 1------//


function calcRectangleArea() {
  let w = +prompt('Widht', '');
  let h = +prompt('Height', '');
  try {
    if (isNaN(w)) {
      throw new Error('Widht is not a number');
    } else if (isNaN(h)) {
      throw new Error('Height is not a number');
    } else {
      alert(w * h);
    }
  } catch (exception) {
    alert(exception.name + ': ' + exception.message);
  }
}

calcRectangleArea()



// //------Task 2------//


function checkAge() {
  let age = +prompt('What\'s your age?');
  try {
    if (age === 0) {
      throw new Error('The field is empty! Please enter your age!');
    } else if (isNaN(age)) {
      throw new Error('Not a number! Please enter a number!');
    } else if (age < 14) {
      throw new Error('Access denied! You are underage!');
    } else {
      alert('Good vision of the film!');
    }
  } catch (exception) {
    alert(exception.name + ': ' + exception.message);
  }
}

checkAge()



//------Task 3------//


class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  try {
    month = month - 1;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (months[month] !== undefined) {
      return months[month];
    } else {
      throw new MonthException('Incorrect month number');
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}

console.log(showMonthName(13));
console.log(showMonthName(5));



//------Task 4------//



function showUser(id) {
  try {
    if (id > 0) {
      return { 'id': id };
    } else {
      throw new Error('ID must not be negative: ' + id);
    }
  } catch (error) {
    console.error(error.name + ': ' + error.message);
  }
}

function showUsers(ids) {
  return ids.map(x => showUser(x)).filter(x => x !== undefined);
}

console.log(showUsers([5, 9, -2, 5]));
