const obj = {
  first_name: 'Shun',
  last_name: 'Sato',
  printFullName: function() {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Shun';
    this.last_name = 'Sato';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.__proto__.printFullName();