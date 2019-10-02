/* Use ES6 class `extends` syntax to construct a Developer class with 
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */

class Person {
  constructor(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, preferredLanguage) {
    super(firstName, lastName);
    this.preferredLanguage = preferredLanguage;
  }
}

var jen = new Developer('Jen', 'Maker', 'Javascript');

console.log(jen.firstName); // 'Jen'
console.log(jen.preferredLanguage); // 'Javascript'
