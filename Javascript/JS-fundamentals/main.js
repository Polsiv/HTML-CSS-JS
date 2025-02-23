
document.write("<h1>Hello World, I guess this sentence is showing too</h1>");


document.write("this sentcence is showing too");


console.log("this is a string")
console.log("13")
console.log("true")
console.log([1, 2, 3])

//variable (to create variables i should put "var" or "let") this is a rule

let Username = "MermorEsPepega";
console.log(Username)

const PI = 3.1415;

console.log(PI)


//CamelCase ThisIsSomethingLiKeCamelCase

/* This is another way to write commentary

yep so good

/

/Llevo
1. COMENTARIOS
2. TIPOS DE DATOS
3. VARIABLES /


//Operadores

let number1 = 60;
let number2 = 120;

let result = number1 + number2;

console.log(result);

// con string  "Concatenación" unión de strings


//Aquí es con espacio (let LastName = Name1 + " " + lastname;)


let Name1 = "Hat"
let lastname = "Kid"

let LastName = Name1 + " " + lastname;

console.log(LastName)

//Comparaciones

let Number3 = 100;
let Number4 = 200;

let Result2 = Number3 != Number4;

console.log(Result2);

//Signo de diferencia "!="

//Comparación 

let passwordBD = "Hatkidispepega"
let input = "Hatkidispepega"

let result23 = input == passwordBD;

console.log(result23)


// Condicionales   control de flujo

if (result23 == true) {
    console.log("contraseña correcta!");
} else {
    console.log("contraseña incorrecta!")
}

// cuando hay varias variables

let score20 = 27

if (score20 > 25) {
    console.log ("practice a little bit more");
} else if (score20 > 20) {
    console.log("vas bien!");
}
else {
    console.log("anda a jugar al free fire hdp")
} 

// control de flujo "swtich" conformado por 3 palabras (switch, case, break)

let typecard = "debid card";

switch(typecard){
    case "debid card":
          console.log("this is a debid card");
          break;
    case "credit card":
          console.log("this is a credit card")
          break;
    default:
        console.log("u dont have any card")
        }


// bucles

let count20 = 0;


while(count20 > 50) {
    console.log(count20);
    count20++;
}



let names10 = ["Hat", "Kid", "yep"]

console.log(names10[0])


/esa es la forma abreviada de:
let count20 = 0;

while(count < 50) [
    console.log(count20);
    count20 + 1;

/

/ let names10 = ["Hat", "Kid", "yep"]

console.log(names10[2])

ese["2"] es el elemento que quiero elegir
 */


let names11 = ["hat2", "kid2", "yep2", "pepega"];

console.log(names11.length);

for(let Indice = 0; Indice < names11.length; Indice++) {
    console.log(names11[Indice]);

}

// Funciones        de alguna manera eso se desarrolla al revés

function greeting(username1) {

    console.log("hello" + " " + username1);

}

greeting("Marcus");  // se puede colocar cuantas veces quiera

greeting("mom")

// yep

function add(n1, n2) {
    console.log(n1 + n2);
}

add(3, 2);
add(1, 200); 




let LoveFeelings = "Real"
let Loyality = "Real"
let  MyHeart= LoveFeelings == Loyality;
console.log(MyHeart)

if (MyHeart == true) {
    console.log("<3");
} else {
    console.log("go fuck ur self")
}