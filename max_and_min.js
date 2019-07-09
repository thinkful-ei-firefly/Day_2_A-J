'use strict';

function max (numbers) {

  let max = numbers[0];
  let i=0;

  while (i<numbers.length) {
    if (numbers[i]>max) {
      max=numbers[i];
    }
    i++;
  }

  return max;


}

console.log(max([1, 3, 7, 4, 6, 5]));
console.log(max([]));

