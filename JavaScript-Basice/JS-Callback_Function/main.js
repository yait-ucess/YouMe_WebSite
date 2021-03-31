// function hello(callback, lastname) {
//   console.log(callback);
//   console.log('hello' + callback(lastname));
// }

// function getName() {
//   return 'Shun';
// }

// hello(function(name) {
//   return 'Sato' + name;
// }, 'Shun');

// function doSomething(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// function multiply(a, b) {
//   return a * b;
// }

// function plus(a, b) {
//   return a + b;
// }

// doSomething(3, 4, multiply); 
// doSomething(11, 4, plus); 

const arry = [1,2,3,4,5];

function forEach(ary, callback) {
  for(let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}

function log(val) {
  console.log(val);
}

function double(val) {
  val = val * 2;
  log(val);
}

forEach(arry, double);