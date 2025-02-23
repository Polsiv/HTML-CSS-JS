let counter  = 0;
let array = [];

console.time('random');

for(let i = 0; i < 100000; i++){
    array[i] = Math.floor(Math.random()*10000);
    counter++;
    }

console.timeEnd('random')
console.log("Number of iterations: " + counter)
console.log(array)

