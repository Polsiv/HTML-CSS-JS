const pc = {

cpu: "intel",
ram: 32, 
board: "gigabyte",
storage: 500,
gpu: "Nvidia", 
psu : "Evga",
PsuWattage: 500,
Switch : true,
MouseClick : true, 

energy: function(){
    return this.psu + " " + this.PsuWattage;
},

core: function (){
return this.cpu + " " + this.ram + this.turnOn();
    },

turnOn: function(){
    return this.Switch;
    },

TurnOff: function(){
this.Switch = false;
return this.Switch;
    },

Click : function(){
return this.MouseClick;

    }
}

/*=====2ND=================================*/

    let human = {

    name: "Jean",
    height : 164,
    weight : 54,
    gender: "Male",
    age: 18,

    Meet : function (){
    return ("OMG nice to meet you! " + this.name) 
        },  

    PassHeight : function (){
        return this.height/100
        },

    IMC : function (){
        return (this.height * 2)/this.weight;
        },

    DisplayGender : function (){
        return this.gender; 
        },

    DisplayAge : function(){
        return this.age;
        }
    }

/*=====3rd=================================*/

let triangle = {

base : 3,
height : 4,
hypotenuse : 5,
angles : "45, 45, 90",
area: 0,

displayArea : function(){
this.area = (this.base * this.height)/2
return this.area;
    },

displayBaseAndHeight : function (){
return ("the base is: " + this.base + " the height is: " + this.height)
    },

displayAngles : function(){
    return this.angles;
    },

displayHype : function (){
    return this.hypotenuse;
},

displayPitagoras : function(){
    return(this.base + "²" + " + " + this.height + "²" + " = " + this.hypotenuse + "²")
    }
}

/*=====4th=================================*/

let car = {

speed : 60,
brand : "kia",
model : "picanto",
color : "black",
horsePower : 67,

IncreaseSpeed : function (){
    return this.speed++;
    },
decreaseSpeed : function (){
    return this.speed--;
    },
displayModel : function (){
    return ("brand: " + this.brand + " model: " + this.model)
    }, 
displaySpeed : function (){
    return ("Speed: " + this.speed + " horsePower: " + this.horsePower)
    },
displayColor : function (){
    return ("My car should be: " + this.color)
    }    

}

/*====5TH================*/

let tablet = {

Inches : 10,
Panel : "Oled, 120hz",
Memory : 500,
volume : 50,
cpu : "intel", 

turnOffvolume : function (){
    this.volume = 0;
    return this.volume;
    },
displayPanel (){
    return this.Panel;  
    },
LargerMemory : function(){
    return this.Memory + 500;
    },
displayCpu : function (){
    return this.cpu;
    },
displayInches : function (){
    return this.Inches;
    }

}

/*====CLASS=================================================*/

class Tablet {
    constructor() {
      this.Inches = 10;
      this.Panel = "Oled, 120hz";
      this.Memory = 500;
      this.volume = 50;
      this.cpu = "intel";
    }
  
    turnOffvolume() { 
      this.volume = 0;
      console.log(this.volume);
    }
  
    displayPanel() {
      console.log(this.Panel);
    }
  
    largerMemory() {
      console.log(this.Memory + 500);
    }
  
    displayCpu() {
      return this.cpu;
    }
  
    displayInches() {
      return this.Inches;
    }
  }
  const myTablet = new Tablet();

/*================2ND CLASS======================*/
class PC {
    constructor() {
      this.cpu = "intel";
      this.ram = 32;
      this.board = "gigabyte";
      this.storage = 500;
      this.gpu = "Nvidia";
      this.psu = "Evga";
      this.PsuWattage = 500;
      this.Switch = true;
      this.MouseClick = true;
    }
  
    energy() {
      console.log(this.psu + " " + this.PsuWattage);
    }
  
    core() {
      console.log(this.cpu + " " + this.ram + this.turnOn());
    }
  
    turnOn() {
      console.log(this.Switch);
    }
  
    turnOff() {
      this.Switch = false;
      console.log(this.Switch);
    }
  
    click() {
      console.log(this.MouseClick);
    }
  }
  const myPC = new PC();

/*================3RD CLASS======================*/

class Human {
    constructor() {
      this.name = "Jean";
      this.height = 164;
      this.weight = 54;
      this.gender = "Male";
      this.age = 18;
    }
  
    meet() {
      console.log("OMG nice to meet you! " + this.name);
    }
  
    passHeight() {
      console.log(this.height / 100);
    }
  
    imc() {
      console.log((this.height * 2) / this.weight);
    }
  
    displayGender() {
      console.log(this.gender);
    }
  
    displayAge() {
      console.log(this.age);
    }
  }
const me = new Human();

/*===================4TH CLASS ================*/
class Triangle {
    constructor() {
      this.base = 3;
      this.height = 4;
      this.hypotenuse = 5;
      this.angles = "45, 45, 90";
      this.area = 0;
    }
  
    displayArea() {
      this.area = (this.base * this.height) / 2;
      console.log(this.area);
    }
  
    displayBaseAndHeight() {
      console.log("the base is: " + this.base + " the height is: " + this.height);
    }
  
    displayAngles() {
      console.log(this.angles);
    }
  
    displayHype() {
      console.log(this.hypotenuse);
    }
  
    displayPitagoras() {
      console.log(this.base + "²" + " + " + this.height + "²" + " = " + this.hypotenuse + "²");
    }
  }
  const newtriangle = new Triangle();

/*===================5th class ================*/
  
class Car {
    constructor() {
      this.speed = 60;
      this.brand = "kia";
      this.model = "picanto";
      this.color = "black";
      this.horsePower = 67;
    }
  
    increaseSpeed() {
      this.speed++;
      console.log(this.speed);
    }
  
    decreaseSpeed() {
      this.speed--;
      console.log(this.speed);
    }
  
    displayModel() {
      console.log("brand: " + this.brand + " model: " + this.model);
    }
  
    displaySpeed() {
      console.log("Speed: " + this.speed + " horsePower: " + this.horsePower);
    }
  
    displayColor() {
      console.log("My car should be: " + this.color);
    }
  }
let MyCar = new Car();