'use strict';

//default parameters
function bookFlight(flightNum, passengers = 1, price = 199 * passengers) {
  console.log(
    `Flight: ${flightNum}, Passengers: ${passengers}, Price: ${price}`
  );
}

bookFlight('LH123');
bookFlight('LH456', 3);
bookFlight('LH789', undefined, 500);
////////////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

let flight = 'LH234';
const passenger = { name: 'Jonas', passport: 12345 };

function checkIn(flightNum, person) {
  flightNum = 'ChangedFlight'; // Does not affect outer variable
  person.name = 'Mr. ' + person.name;
}

checkIn(flight, passenger);

console.log(flight);
console.log(passenger); // name changed

// Is the same as doing...
function newPassport(person) {
  person.passport = Math.trunc(Math.random() * 1000000);
}

newPassport(passenger);
checkIn(flight, passenger); // now passport changed
//////////////////////////////////////////////
//first-class and higher order functions
const greet = name => `Hello, ${name}`;

function higherOrder(fn, name) {
  console.log('Result:', fn(name));
}

higherOrder(greet, 'Soumya');
//////////////////////////////////////////////
//function accepting callback functions
function upper(str) {
  return str.toUpperCase();
}

function transformer(str, fn) {
  console.log('Original:', str);
  console.log('Transformed:', fn(str));
}

transformer('javascript', upper);
transformer('javascript', str => str.toLowerCase());
//////////////////////////////////////////////
//function returning functions
function greetgreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}
const greeterHey = greetgreeting('Hey');
greeterHey('Soumya');
greeterHey('Steven');

//using arrow functions
const greetgreetingArrow = greeting => name => {
  console.log(`${greeting}, ${name}`);
};

greetgreetingArrow('Hello')('Jonas');
//////////////////////////////////////////////
//The call and apply methods
const airline = {
  name: 'emirates',
  code: 'EK',
  bookings: [],
  book(flight, passenger) {
    this.bookings.push({ flight: `${this.code}${flight}`, passenger });
    console.log(`${passenger} booked ${this.code}${flight}`);
  },
};

//USING CALL METHOD
const emirates = { name: 'Emirates', code: 'EK', bookings: [] };

//USING APPLY METHOD
airline.book.call(emirates, 23, 'Soumya Manche');

console.log(emirates.bookings);

//////////////////////////////////////////////
//The bind method
const bookEmirates = airline.book.bind(emirates);
bookEmirates(101, 'Soumya Manche');
bookEmirates(202, 'Alex');

//////////////////////////////////////////////
//IIFE
(function () {
  const emirates = { name: 'Emirates', code: 'EK', bookings: [] };
  emirates.book = function (flight, passenger) {
    this.bookings.push({ flight: `${this.code}${flight}`, passenger });
    console.log(`${passenger} booked ${this.code}${flight}`);
  };
  emirates.book(303, 'Liam');
  emirates.book(404, 'Emma');
})();
//////////////////////////////////////////////
//Closures
//basic example
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();
inc(); // 1
inc(); // 2
inc(); // 3

//practical example

function secureBooking() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}

const booker = secureBooking();

booker();
booker();
booker();
//////////////////////////////////////////////
//More Closure Examples

let f;

function g() {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
}

function h() {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
}

g();
f(); // 46

h();
f();
// 1554

//////////////////////////////////////////////
