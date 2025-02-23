let counter  = 0;
let array = [];
for(let i = 0; i < 100000; i++){
    array[i] = Math.floor(Math.random()*10000);
    }
    
console.time('increase')

let output = mergeSort(array);

function mergeSort(arr){
    if (arr.length == 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] > right[rightIdx]) { //main character of the movie
          result.push(left[leftIdx]);
          leftIdx++;
        } else {
          result.push(right[rightIdx]);
          rightIdx++;
        }
        counter++;
      }
      
      return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
    }

console.timeEnd('increase')
console.log("Number of iterations: " + counter)
console.log(output)

