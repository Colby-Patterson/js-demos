// Objects can be used to describe things
// Can also be used as dictionary


let paul = {name: 'Paul', age: 22};
let george = {name: 'George', age: 22};
let joe = {name: 'Joe', age: 35};

let people = [paul, george, joe];

// Find the average age
let sum1 = 0;
people.forEach((person)=>{
  sum1 += person.age
})

let average = sum1 / people.length;
console.log(average);

// Get an array of strings that say
// 'Hi I am 'name' and I am 'age years old'
// expecting person to be an object
// writing the function

const getInfo = (person)=>{
  return `Hi I am ${person.name} and I am ${person.age} years old.`
}

//calling the function
let paulInfo = getInfo(paul);
let georgeInfo = getInfo(george);
let joeInfo = getInfo(joe);
console.log(paulInfo);
console.log(georgeInfo);

let peopleStrings = [];
people.forEach((person)=>{
  peopleStrings.push(`<p>Hi I am ${person.name} and I am ${person.age} years old.</p>`)
})
console.log(peopleStrings)

// forEach returns undefined
/*
let nums = [10, 20, 30];
// find average; sum of all / length
// I need to loop through and add up all numbers
// I need to keep track of the sum

let sum = 0;
nums.forEach((num)=> {
  sum += num
})
let average = sum / nums.length
console.log('The average is: ' + average)

let total = nums.reduce((accum, num)=>{
  return accum + num
}, 0)

let average1 = total /nums.length
console.log(average1)

console.log(paul['name']);
console.log(paul.name);

//change a value
paul.age = 45;
console.log(paul.age);

// add a value
paul.newValue = "hello";
console.log(paul.newValue);
console.log(paul);

// delete a value
delete(paul.newValue);
console.log(paul);

// get the keys
console.log(Object.keys(paul));
console.log(Object.values(paul));
*/