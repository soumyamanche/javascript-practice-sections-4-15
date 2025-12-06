'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderpasta: function (i1, i2, i3) {
    console.log('order recived ${i1},${i2},${i3}');
  },
  /*
  persons: {
    person1: {
      name: 'Soumya',
      age: 25,
    },
    person2: {
      name: 'Anita',
      age: 28,
    },
    person3: {
      name: 'Ravi',
      age: 30,
    },
  },
};
*/

  //destructing[] -->it is a way of unpacking values
  //ex:  in arrays,to retrive values form an array
  /*
const arr = [1, 2, 3, 4, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const groups = {
  teamA: ['Alice', 'Bob', 'Charlie'],
  teamB: ['David', 'Eve', 'Frank'],
  teamC: ['Grace', 'Heidi', 'Ivan'],
  t1(indexA, indexB) {
    return [this.teamA[indexA], this.teamB[indexB]];
  },
  event: function (obj) {
    console.log('Object received:', obj);*/
};
/*

group.event({
  name: "Music Concert",
  timing: "7:00 PM",
  address: "City Hall",
}),

  demo: {
    person1: { name: 'Soumya', age: 25 },
    person2: { name: 'Anita', age: 28 },
    person3: { name: 'Ravi', age: 30 },
  },*/
/*
  teamA: {
    members: ['Alice', 'Bob', 'Charlie'],
    lead: 'Alice',
    score: 89,
    project: { title: 'AI Assistant', techStack: ['JS', 'Node', 'TensorFlow'] },
  },
};
*/
/*
const [e, f] = groups.teamA;
console.log(e, f); //alice,bob
const [g, , h] = groups.teamA;
console.log(g, h); //alice,charlie
//we we leave a blank space ,it will skip a value and prints next value

//actually swaping a variable by noram -->using temp
let [first, second] = groups.teamB;
console.log(first, second);

/*const temp = first;
first = second;
second = temp;
console.log(first, second);

-->//in destruing
[first, second] = [second, first];
console.log(first, second);

//in functions
let [m, n] = groups.t1(2, 0);
console.log(m, n); //refer to fun above t1

//nested array
let nested = [2, 3, [4, 5]];
//let [r, , s] = nested;
//console.log(r, s);

const [r, , [s, t]] = nested;
console.log(r, s, t);

//defalut values
const [p, o, u] = [4, 5];
console.log(p, o, u); 

-->//destrcturing object{}

const person={
name:"soumya",
age:21,
address:{
city:"banglore",
pincode:123456
}
};
const{age,name}=person;
console.log(name,age);

//renaming var
const{age:personAge}=person;
console.log(personAge);

//defalut values
const{age=21,name}=person;
console.log(name,age);

//nested obj
const{address:{city,pincode}}=person;
console.log(city);


-->//spread opertaor(...)

/*const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);


//copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); 

//join 2 arrays
const mainMenu = [...restaurant.mainMenu, 'sarad'];
console.log(mainMenu);

//cpy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//actually spreead op works on arrays but it not always true it shloud work on iterables:arrays,string,sets
const str = 'soumya';
const letters = [...str, ' ', '.M'];
console.log(letters);

//join 2 arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);

// Spread
const arr = [1, 2, 3];
console.log([...arr, 4]); // [1, 2, 3, 4]

// Rest
const [first, ...rest] = arr;
console.log(first); // 1
console.log(rest);  //[2,3]*/

//logical Operator
const rest1 = {
  name: 'cary',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'lin',
  owner: 'roy',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
//rest1.numGuests ??= 10;
//rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

//for of loop
const letters = ['a', 'b', 'c', 'd', 'e'];
for (const letter of letters) {
  console.log('i select', letter);
}
