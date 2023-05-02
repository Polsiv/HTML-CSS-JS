console.log( typeof {});
console.log(typeof new RegExp());

function showname(){
   return "John ert"
}

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
        return this.name + " " + this.lastname;
     }
}

console.log(user.showname())
console.log(user)

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
console.log(account.amount);

account.withdraw(90);
console.log(account.amount);