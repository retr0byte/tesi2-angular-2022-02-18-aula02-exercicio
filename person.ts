export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  constructor(person: {
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
  }) {
    this.firstName = person.firstName;
    this.middleName = person.middleName;
    this.lastName = person.lastName;
    this.age = person.age;
  }

  getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }

  getBirthdayYear() {
    return new Date().getFullYear() - this.age;
  }
}
