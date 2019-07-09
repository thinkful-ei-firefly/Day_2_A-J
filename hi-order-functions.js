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

//console.log(filteredNames); // => ['Rich', 'Ray']
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

tornadoWarning('Florida');
tornadoWarning('Atlanta');

quakeWarning('Las Angeles');
quakeWarning('Dallas');


//turtle


const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];


const turtleFL = turtleSteps.filter(function (pair) {
  return (pair[0] >=0 && pair[1] >=0);

});

//console.log(turtleFL);


const turtsteps = turtleSteps.map(function (pair) {
  return Math.abs(pair[0]) + Math.abs(pair[1])
})

//console.log(turtsteps);


const turtMovement = turtsteps.forEach( function (step, i) {
  console.log(`Movement #${i+1}: ${step} steps`)
})



//reduce

const testString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const testArr = testString.split(' ');
//console.log(testString);
//console.log(testArr);

function decoder (word) {
  switch (word.length) {
  case 3:
    return ' ';
  default:
    return word.toUpperCase()[word.length-1];
  }
}

//console.log(decoder('cat'));
//console.log(decoder('tiger'));

let accum = [];
function stringDecode (accum, string) {

    return accum + decoder(string);

}


console.log(testArr.reduce(stringDecode, []));










