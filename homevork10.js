//------Homevork 10------//


//------Task 1------//


let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, i, ...z] = arr;
console.log(x);
console.log(y);
console.log(z);



//------Task 2------//



let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);


//------Task 3------//


function mul(...rest) {
  return rest.map(a => typeof a === 'number' ? a : 0)
    .reduce((a, b) => a + b);
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));



//------Task 4------//



let server = {
  data: 0,
  convertToString: function (callback) {
    callback((() => {
       return this.data + "";
    }));
 }
};
let client = {
 server: server,
 result: "",
 calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
 },
 notification: function () {
    return ((callback) => {
       this.result = callback();
    });
 }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"



//------Tassk 5------//


const mapBuilder = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
  };
  return map
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

