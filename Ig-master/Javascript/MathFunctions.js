/* ABS Math.abs function returns the absolute value of a number*/

console.log(Math.abs(12))
//output: 12

console.log(Math.abs('-1'))
 //output: 1

console.log(Math.abs(-2))
//output: 2

console.log(Math.abs(null))
//output: 0

/*CEIL Math.ceil function rounds a number up to the next largest interger*/

console.log(Math.ceil(12.05));
//output: 13

console.log(Math.ceil(12.50));
//output: 13

console.log(Math.ceil(-12.05));
//output: -12

console.log(Math.ceil(-12.05));
//output: -12

/*FLOOR Math.floor function rounds a number down to its nearest integer*/

console.log(Math.floor(12.05));
//output: 12

console.log(Math.floor(12.50));
//output: 12

console.log(Math.floor(-12.05));
//output: -13

console.log(Math.floor(-12.50));
//output: -13

/*ROUND Math.rouns function rounds a number to its nearest integer*/

console.log(Math.round(12.05))
//output: 12

console.log(Math.round(12.50))
//output: 13

console.log(Math.round(-12.05))
//output: -12

console.log(Math.round(-12.50))
//output: -12

/*MAX Math.max function returns the number with the largest value*/

console.log(Math.max(12,5,1,2))
//output: 12

console.log(Math.max(-12, -5, -1, -2))
//output: -1

const arr = [1,3,5,7,10,15,25]
console.log(Math.max(...arr));
//output: 25    


/*MIN Math.min function returns the number with the lowest value*/

console.log(Math.min(12,5,1,2))
//output: 1

console.log(Math.min(-12, -5, -1, -2))
//output: -12

const arr2 = [1,3,5,7,10,12]
console.log(Math.min(...arr2));
//output 1

/*RANDOM Math.random return random number between 0 to 1*/

console.log(Math.random())

/*POW Math.pow function returns the base to the exponent power*/

console.log(Math.pow(8,2))
//output: 64

console.log(Math.pow(2,5))
//output: 32

console.log(Math.pow(7,2))
//output: 49


