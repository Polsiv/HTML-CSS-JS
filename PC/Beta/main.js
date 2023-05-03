//console.log( typeof {});
//console.log(typeof new RegExp());

const user = {
    name: 'John',
    age: 30,
    lastname: 'ert',
    hobbies: ['read', 'prog', 'run'],
    address: {
        street: "Some",
        city: "City"
    },
    
    //this obtains the value of all the object, but it can also specify the value from 1 variable
    showname: function (){
        return `${this.lastname} ${this.name}`
     }
}

//console.log(user.showname())
//console.log(user)

//----------------------------methods

const account = {
    number: "498495674",
    amount: 100,
    
    deposit(quantity){
        this.amount += quantity;
    },
    withdraw(quantity){
        this.amount -= quantity;
    }
}

account.deposit(30);
//console.log(account.amount);

account.withdraw(90);
//console.log(account.amount);

//----------constructor

function Person(){
    this.name = "";
    this.age = 0;
    this.lastname = "";
    this.showname = function (){
        return `${this.name} ${this.lastname}`
    }
}

const user2 = new Person();
user2.name = "JOE";
user2.lastname = "JONES";
user2.age = 3;
//console.log(user2.showname());

//---------------------class

class Human{
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    greet(){
        return `Hi yall! I'm ${this.name} ${this.lastname}`
    }
}

const Silv = new Human("Silve", "S")
const Silvia = new Human("Siliva", "Bruh")


//Relation = asociacion
Silvia.parent = Silv;

//console.log(Silv)
//console.log(Silvia)

//--------------------agregacion. 

const Company = {
    name: "Silv Emmerce",
    employees: []
}

Company.employees.push(Silv)
Company.employees.push(Silvia)

console.log(Company)

//-------------------Composicion