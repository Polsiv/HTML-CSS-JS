let counter  = 0;
let array = [];

console.time('Insertion');

for(let i = 0; i < 100; i++){
    array[i] = Math.floor(Math.random()*10000);
    
    }

for(let i = 1; i < array.length; i++){

    let j = i - 1;
    let temp = array[i];

    while(j >= 0 && array[j] < temp){
        array[j + 1] = array[j];
        j--;
        counter++
    }
    array[j + 1] = temp;
}

console.timeEnd('Insertion');
console.log("Number of iterations: " + counter);
console.log(array);

