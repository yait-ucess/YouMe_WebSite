function hello(callback) {
  console.log('hello' + callback());
}

function getName() {
  return 'Shun';
}

hello(getName);