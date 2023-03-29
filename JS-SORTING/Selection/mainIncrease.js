let counter  = 0;
let array = [];

console.time('selection');

for(let i = 0; i < 100000; i++){
    array[i] = Math.floor(Math.random()*10000);
    counter++;
    }

for(let i = 0; i < array.length; i++) {
  let min = i;
  for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
          min = j;
          counter++;
      }
  }
  if(min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      counter++;
  }
}

console.timeEnd('selection');
console.log("Number of iterations: " + counter);
console.log(array);