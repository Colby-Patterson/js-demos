// https://codesandbox.io/s/js-array-y73m66?file=/src/index.js
let nums = [10, 20, 30, 40, -10, 100, 45];

// What is an array?
// list of items; it can hold any type of data in js
// General rule, don't have mismatched data in array
// Normally we like to loop through arrays
console.log(typeof nums[0]);
console.log(typeof(nums));

// For loop
for (let i = 0; i <= 9; i+=2) {
  // execute this block
  console.log(i);
}

console.log('Show me things in the array');

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// A better way to loop over an array
// foreach loop
// Part 1 is a function that has one parament
const logThing = (thing)=>(
  console.log(thing)
)

logThing('Hello');

// Goes through each thing in the array and calls the function you give it.
// Part 2 is call function in forEach loop
nums.forEach(logThing)

// write as an anonymous function
// Works the same
nums.forEach((num) => {
  console.log(num)
})

console.log('Finding highest value');
// Going to look through all of these items in array and keep track of the highest number

let highestValue = nums[0];

// loop through
nums.forEach((num)=>{
  if (num > highestValue) {
    highestValue = num;
  }
})
console.log(highestValue);

const findHighest = (numbers) => {
  let highestValue = numbers[0];
  //loop through
  numbers.forEach((num) => {
    if (num > highestValue) {
      highestValue = num;
    }
  });
  console.log(highestValue);
};

console.log('------')
findHighest([4,3,2,1]) //4
findHighest(nums) //100

const findLowest = (numbers)=>{
  console.log('Logging numbers ' + numbers)
  let lowest = numbers[0]
  numbers.forEach((num)=>{
    if(num < lowest){
      lowest = num
    }
  })
  console.log(lowest)
}

findLowest(nums);