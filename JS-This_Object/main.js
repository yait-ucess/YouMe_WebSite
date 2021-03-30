const obj = {
  first_name: 'Shun',
  last_name: 'Sato',
  printFullName: function() {
      console.log(this.first_name);
      console.log(obj.first_name);
  }
}

obj.printFullName();

class MyObj {
  constructor() {
      this.first_name = 'Shun';
      this.last_name = 'Sato';
  }

  printFullName() {
      console.log(this.first_name);
      const fn = function() {
          console.log(this);
      };
      window.setTimeout(fn)   
  }
}

const obj2 = new MyObj();

obj2.printFullName();