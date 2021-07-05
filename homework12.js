///------Homework 12------//


//------Task 1------//


const http = require('http');
let static = require('node-static');
let file = new static.Server('.');

function acceptVote(req, res) {
  if (req.url == '/info.txt') {
    file.serve(req, res);
  } else if (req.url == '/books.json'){
    file.serve(req, res)
  }
}

http.createServer(acceptVote).listen(3000);
console.log('server run')


//------Task 2------//


// const http = require('http');
// let url = require('url');
// let static = require('node-static');
// let file = new static.Server('.');

// function accept(req, res) {
//   if (req.url == '/books.json') {
//     file.serve(req, res);
//   } else {
//     file.serve(req, res)
//   }
// }

// http.createServer(accept).listen(8000);
// console.log('Server work')