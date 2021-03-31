const arry = [1,2,3,4,5];

// arry.reduce(function(accu, curr) {
//   console.log(accu, curr);
//   return accu * curr;
// }, 10);



const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
  console.log(accu, curr);
  return `${accu}<${curr}>`;
}

function reduce(arry, callback, defaultValue) {
  let accu = defaultValue;
  for(let i = 0; i < arry.length; i++) {
    let curr = arry[i];
    accu = callback(accu, curr);
  }

  return accu;
}

const result = reduce(strArry, tag, "");
console.log(result);