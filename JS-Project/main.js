
//First=====================================

let result = document.getElementById("numSwitcher")

function NumberSwitcher(num){
 let  finalResult = 0;
 while (num > 0){

let digit = num % 10;

finalResult = finalResult * 10 + digit;

num = Math.floor(num / 10);
    }
   document.getElementById('result').innerHTML = ("Inverted Number: " + finalResult)
   
}

document.getElementById('btnEnter').addEventListener('click', function (event) {
  event.preventDefault();

  NumberSwitcher(result.value);

});

/*
event listener
document.getElementById('result').addEventListener('click', function(event){

  alert("omg you got hacked")
})

*/
//Second===========================

function PrintUserName(){

document.getElementById('nameout').innerHTML = ("OMG NICE TO MEET YOU! " + document.getElementById('name').value );

}

document.getElementById('btnEnter2').addEventListener ('click', function(event){

    event.preventDefault();
    PrintUserName();

});

//Third===========================

const [c1, c2, c3] = [1, 2, 3].map((i) => document.querySelector(`#c${i}`));

function RootCalculator (c1, c2, c3){
  
  if(c1 === 0){

    alert("coefficient a cannot be equal to 0")

  }else{

    let discriminant = Math.pow(c2, 2) -4*[(c1)*(c3)]

    if(discriminant < 0) {
      alert("There's no real solutions for this equation")
    } else {
  
      let FirstRoot = (-1*(c2) + Math.sqrt(discriminant))/2*(c1)
      let SecondRoot = (-1*(c2) - Math.sqrt(discriminant))/2*(c1)

      if (FirstRoot === SecondRoot){
          console.log("Both solutions are the same" + FirstRoot)       
      } else {

        console.log("first solution " + FirstRoot + " second solution" + SecondRoot)
      }
    }
  }
} 

document.querySelector('#output').addEventListener('click', function() {
    RootCalculator(c1.value, c2.value, c3.value);
});

//Fourth ==================================================


const[i1, i2, i3, i4] = ["name", "age", "career", "code"].map((i) => document.querySelector(`#BF${i}`))


function StudentForm(i1, i2, i3, i4){

document.getElementById('replacement').innerHTML = i1;
document.getElementById('replacement2').innerHTML = i2;
document.getElementById('replacement3').innerHTML = i3;
document.getElementById('replacement4').innerHTML = i4;

}

document.querySelector('#BFoutput').addEventListener('click', function(){
  StudentForm(BFname.value, BFage.value, BFcareer.value, BFcode.value)
})

//Fifth ==================================================

const base = document.getElementById('base')
const height = document.getElementById('height')

function TriangleArea(b, h){

let area = (b * h) / 2;

document.getElementById('area').innerHTML = area;

}

document.getElementById('Toutput').addEventListener('click', function(event){
event.preventDefault();
  TriangleArea(base.value, height.value);
});

//Sixth ==================================================


function ColorSwitcher (){

document.querySelector(".box").style.backgroundColor = "#DEFFFB"
TransitionEvent
}

document.querySelector("#colorchange").addEventListener('click', () => {

  document.getElementById('fav-color').innerHTML = ("Fav color!");  
  ColorSwitcher();

})


//Seventh ==================================================

let interval1 = document.getElementById('interval1')
let interval2 = document.getElementById('interval2')

function interval(a, b){

  a = parseInt(a);
  b = parseInt(b);

  if(a <= b){

    console.log(a)
    return interval(a + 1, b)
  }

}

document.querySelector("#interval-output").addEventListener('click', (event) =>{

event.preventDefault();
interval(interval1.value, interval2.value);

})

//Eighth ==================================================

let primeNumber = document.getElementById('primeInput')

function PrimeCalc(prime){

let counter = 0;
prime = parseInt(prime);
  
for(let i = 0; i <= prime; i++){

      if(prime % i == 0){
        counter ++;
      }
  }

  if(primeNumber = ""){
    document.getElementById('primeornot').innerHTML = ("a!")
  }

  if (counter > 2){
    document.getElementById('primeornot').innerHTML = ("Not a prime number!")
  } else {
    document.getElementById('primeornot').innerHTML = ("It's prime!")
  } 

}

document.querySelector("#primeOutput").addEventListener('click', (event) =>{
  event.preventDefault();

  if(!primeInput.value){
    alert("Imagine trolling with empty values!")
  } else{
    PrimeCalc(primeInput.value);
  }
})

//Ninth ==================================================

let temperature = document.getElementById('temps')

function findTemp (temp){

temperature = parseFloat(temperature);
let newtem = (5/9) * (temp-32);
document.getElementById('temoutput').innerHTML= newtem;
}

document.querySelector("#tempoutput").addEventListener('click', (event) =>{

 
  event.preventDefault();

  if(!temps.value){
    alert("Imagine trolling with empty values!")
  } else{
    findTemp(temps.value);
    }
  });

//Tenth==================================================


function SortingNumbers (arrSixParam){

//console.log(document.querySelector('data-ipt="dataIpt"'))

const SortArray = arrSixParam.map((i) => Number(i));
//console.log(SortArray);

let highest = SortArray[0];
for(let i = 1; i < SortArray.length; i++){

  if( SortArray[i] > highest ){

highest = SortArray[i];

    }
  }
document.getElementById('highOutput').innerHTML = ("The largest number is: " + highest)
}

document.querySelector('#sixoutput').addEventListener('click', (event) => {

const SortNumbers = document.querySelector("#sixnumbers").value;
let arrSix= SortNumbers.split(", ");


SortingNumbers(arrSix);  
 event.preventDefault();
});

