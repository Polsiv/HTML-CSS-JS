let myArray = [];
for (let i = 0; i < 100; i++){
    let x = Math.floor((Math.random() * 10000) + 1)
    myArray.push(x);
}

console.log(myArray)

for(let j = 1; j < myArray.length; j++){
    
    for(let i = 0; i < myArray.length; i++){

        let temp = [];
        if(myArray[i] > myArray[j]){
            temp[i] = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp[i];
            
        }
    }
}




document.getElementById('LOL').innerHTML = myArray;