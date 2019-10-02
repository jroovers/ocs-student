/* Use an ES6 Class to construct a Person instance.
 * */
// function Person(firstname, lastname) {
//   this.fname = firstname;
//   this.lname = lastname;
// }

class Person {

  constructor(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  printPerson() {
    console.log(this);
  }

  printFirstName() {
    console.log(this.firstName);
  }
}

var john = new Person('John', 'Doe');
var jack = new Person('Jack', 'Doe');

john.printPerson(); // Person { fname: 'John', lname: 'Doe' }
jack.printFirstName(); // John
