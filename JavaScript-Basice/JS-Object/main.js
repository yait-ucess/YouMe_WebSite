const person = {
  name: 'shun',
  age: 20,
  gender: 'male',
  color: ['white', 'black'],
  interests: {
    sports: 'soccer',
    music: 'King Gnu'
  },
  getFullColor: function() {
    console.log(this.color[0] + this.color[1])
  }
};

const agekey = 'age'
person[agekey] = 12
console.log(person.age);
person.getFullColor();