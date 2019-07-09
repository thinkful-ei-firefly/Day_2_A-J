'use strict';

//repeat

function repeat (fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function hello () {
  console.log('Hello world');
}

function goodbye () {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


//filter

function filter(arr, fn) {
  let newArry = [];
  for (let i = 0; i <arr.length; i++){
    if (fn (arr[i]) === true) {
      newArry.push(arr[i]);
    }
  }
  return newArry;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
console.log(filter(myNames, name => name[0] === 'R'));




//hazard

function hazardWarningCreator (typeOfWarning) {
  let warningCounter =0;
  return function (location) {
    warningCounter +=1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);

    switch (warningCounter) {
    case 1:
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
      break;
    default:
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);

    }
        
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const tornadoWarning = hazardWarningCreator('Tornado Warning');
const quakeWarning = hazardWarningCreator('Earthquake Warning');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
rocksWarning('Atlanta');
rocksWarning('Dallas');

tornadoWarning('Florida');

quakeWarning('Las Angeles');


//turtle


const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
console.log(turtleSteps);

const turtleFL = turtleSteps.filter(function (pair) {
  return (pair[0] >=0 && pair[1] >=0);

});

console.log(turtleFL[0]);
console.log(turtleFL[1]);
console.log(turtleFL[2]);







//reduce