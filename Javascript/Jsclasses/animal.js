class Animal {

constructor(Name, Type, Voice){
this.name = Name,
this.type= Type,
this.voice= Voice;
    }

    present(){
    return "HELLOW IM: " + this.name;
    }

    especify(){
   return "MY TYPE: " + this.type;
    }

    speak(){    
    return "I SPEAK " + this.voice + " LANGUAGE!"
    }

    all(){
    return this.speak() + this.especify() + this.present();
    }
}



class Dog extends animal {
    constructor (Name, Type, Voice, Hair){

        super(Name, Type, Voice),
        this.hair = Hair;
    }

    show(){
        return this.present() + " AND IM " + this.hair;
    }

    showAll(){
        return this.all()  + " AND IM "  + this.hair;
     }
}

let newAnimal = new Dog ("Pucky", "pincher", "Bark", "Black");

let newAnimal1 = new Dog ("HORACIO", "RACE", "MUA", "BLACK")

document.getElementById('output').innerHTML = newAnimal.show();

document.getElementById('horse').innerHTML = newAnimal1.showAll();