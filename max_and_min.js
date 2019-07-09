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


function min (numbers) {

  let min = numbers[0];
  let i=0 ;
  while (i<numbers.length){
    if (numbers [i] < min ){
      min = numbers[i] ;
    }
    i ++;
  }
  return min ;
}



// console.log(max([1, 3, 7, 4, 6, 5]));
// console.log(max([]));

console.log(min([1, 3, 7, 4, 6, 5]));
console.log(min([]));


