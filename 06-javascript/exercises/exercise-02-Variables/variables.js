// 1. Create a person object with name, age, and city properties
let person = {name: 'nikhil', age: 12, city:"hyderabad" };
// Your code

// 2. Add an email property to the person object
person.email="manikantanikhil5@gmail.com";

// 3. Update the age to 31
person.age=31;

// 4. Delete the city property
delete person.city;

// 5. Check if 'email' property exists in person
let isEmail = "email" in person;

// 6. Get all keys of the person object
let keyobj = Object.keys(person);

// 7. Get all values of the person object
let val = Object.values(person);