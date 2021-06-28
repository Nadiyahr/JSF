//------Homework 11------//



//------Task 1------//



// let http = require('http');
// const os = require('os');
// let userName = os.userInfo().username;
// let type = os.type();
// let time = os.uptime();
// const path = require('path');
// let dirname = path.dirname(require.main.filename);
// let scriptName = path.basename(__filename);

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write(`<h1>System information</h1><p>Curent user name: ${userName}<br>OS type: ${type}<br>System work time ${(time / 60).toFixed(2)}<br>Current work directory: ${dirname}<br>Server file name: ${scriptName}</p>`);
//   response.end('<h2>Header from server 5000<h2>\n');
// }).listen(5000);

// console.log('serverruning at http://127.0.0.1:5000/');
// console.log(userName);
// console.log(type);
// console.log((time / 60).toFixed(2));
// console.log(dirname);
// console.log(scriptName);


//------Task 2 ------//


let http = require('http');
const os = require('os');
const greting = require('./personalmodule');
let userName = os.userInfo().username;


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<p>Date of request: ${greting.date}<br>${greting.getMessage(userName)}</p>`);
  response.end('<h2>Header from server 3000<h2>\n');
}).listen(3000);

console.log('serverruning at http://127.0.0.1:3000/');
console.log(`Date of request: ${greting.date}`);
console.log(greting.getMessage(userName));

