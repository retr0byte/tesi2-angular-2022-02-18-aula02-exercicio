// Import stylesheets
import './style.css';
import { Person } from './person';

let p = { firstName: 'John', middleName: 'Doe', lastName: 'Francis', age: 24 };
let person = new Person(p);

const pNameEl = document.querySelector('#person_info ul li:first-child span');
pNameEl.innerHTML = person.getFullName();

const pBirthdayAgeEl = document.querySelector(
  '#person_info ul li:last-child span'
);
pBirthdayAgeEl.innerHTML = '' + person.getBirthdayYear();
