function hello(name, age) {
  console.log('hello' + name + age);
  return name + age;
}

hello('Shun', 10);
const returnVal = hello('Shun2', 20);

console.log(returnVal);