'use strict';

function average (numbers) {

  let sum = 0;
  numbers.forEach(function(element) {sum = sum + element});

  return sum/numbers.length;


}


console.log(average([1, 2, 3, 4, 5, 6]));
console.log(average([10, 10, 10]));
console.log(average([-1, 1, -2, -5]));
console.log(average([]));