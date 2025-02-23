
//I HATE DRY SO MUCH 1
//I HATE DRY SO MUCH 2
//I HATE DRY SO MUCH 3
//I HATE DRY SO MUCH 4
//I HATE DRY SO MUCH 5 
//I HATE DRY SO MUCH 6
//I HATE DRY SO MUCH 7 
//I HATE DRY SO MUCH 8
//I HATE DRY SO MUCH 9 
//I HATE DRY SO MUCH 10

class PC {
    constructor(cpu, ram, storage){
        this.Cpu = cpu;
        this.Ram = ram;
        this.Storage = storage;
    }

getCpu(){
    return this.Cpu;
    }
setCpu(cpu){
    this.Cpu = cpu;
    }
           
getRam(){
    return this.Ram;
    }
setRam(ram){
    this.Ram = ram;
    }
                    
getStorage(){
    return this.Storage;
    }
setStorage(storage){
    this.Storage = storage;
    }
                
Turnoff (){
    console.log("Shut down") 
    }

BootUp(){
    console.log("Turn up")
    }
}

//First subclass
class Mac extends PC {
        constructor(cpu, ram, storage, display, inches){
        super(cpu, ram, storage)
        this.display = display; 
        this.inches = inches;
    }

getDisplay(){
    return this.display;
    }
setDisplay(display){
    this.display = display;
    }
getInches(){
    return this.inches;
    }
setInches(inches){
    this.inches = inches;
    }


displayInches(){
    console.log("Inches: " + this.inches)
    }

showDisplay(){
    console.log(this.display);
}

}

//Second subclass
class HP extends PC {

constructor(cpu, ram, storage, keyboard, mouse){
    super(cpu, ram, storage)
    this.keyboard = keyboard;
    this.mouse = mouse;
    }

//Set get
getKeyboard(){
    return this.keyboard;
    }
setKeyboard(keyboard){
    this.keyboard = keyboard;
    }
getMouse(){
    return this.mouse;
}
setMouse(mouse){
    this.mouse = mouse;
    }

//Set Methods 
mouseDisplay(x, y){
    console.log("Mouse at " + x + "," + y);
    }
keyboardDisplay(){
    console.log("Keyboard: " + this.keyboard);
    }
}

//Third subclass
class laptop extends PC{

    constructor(cpu, ram, storage, gpu, hz){
        super(cpu, ram, storage)
        this.gpu = gpu;
        this.hz = hz;
    }

    getGPU(){
        return this.gpu;
        }
    setGPU(gpu){
        this.gpu = gpu;
        }
    getHZ(){
        return this.hz;
        }
    setHZ(hz){
        this.hz = hz;
        }

    displayHZ(){
        this.hz = 144;
        console.log("Display at " + this.hz);
        }
    displayAll(){
        console.log("cpu: " + this.Cpu + "ram" + this.Ram + "Storage: " + this.Storage  + "GPU: " + this.getGPU());
    }
}

//4Th sublasss
class Lenovo extends PC {

    constructor(cpu, ram, storage, keyboard1, color){
        super(cpu, ram, storage)
        this.keyboard = keyboard;
        this.color = color;
        }
    
    //Set get
    getKeyboard(){
        return this.keyboard;
        }
    setKeyboard(keyboard){
        this.keyboard = keyboard;
        }
    getColor(){
        return this.color;
    }
    
   setColor(color){
    this.color =  color;
   }
    
    //Set Methods 
   displayColor(){
    console.log(getColor());
   }
    keyboardDisplay(){
        console.log("Keyboard: " + this.keyboard);
        }
}

//Fifth subclass
class prebuild extends PC{

    constructor(cpu, ram, storage, gpu, psu){
        super(cpu, ram, storage)
        this.gpu = gpu;
        this.psu = psu;
    }

    getGPU(){
        return this.gpu;
        }
    setGPU(gpu){
        this.gpu = "RTX 4090";
        }
    getPSU(){
        return this.psu;
        }
    setPSU(psu){
        this.psu = psu;
        }

    displayPSU(){
        console.log("PSU: " + this.psu);
    }

    displayAll(){
        console.log("cpu: " + this.Cpu + "ram" + this.Ram + "Storage: " + this.Storage  + "GPU: " + this.getGPU() + "PSU: " + this.psu);
    }
}

//Sixth subclass
class Custom extends PC{

    constructor(cpu, ram, storage, gpu, psu, Cooling){
        super(cpu, ram, storage)
        this.gpu = gpu;
        this.psu = psu;
        this.cooling = Cooling
    }

    getCooling(){
        return this.cooling;
    }

    setCooling(cooling){
        this.cooling = "Wateer loop";
    }

    getGPU(){
        return this.gpu;
        }
    setGPU(gpu){
        this.gpu = "RTX 4090";
        }
    getPSU(){
        return this.psu;
        }
    setPSU(psu){
        this.psu = psu;
        }

    displayPSU(){
        console.log("PSU: " + this.psu);
    }

    displayAll(){
        console.log("cpu: " + this.Cpu + "ram" + this.Ram + "Storage: " + this.Storage  + "GPU: " + this.getGPU() + "PSU: " + this.psu, + "Cooling System" + this.cooling);
    }
}

//Seventh subclass
class CustomCase extends PC{

    constructor(cpu, ram, storage, gpu, psu, Case){
        super(cpu, ram, storage)
        this.gpu = gpu;
        this.psu = psu;
        this.case = Case;
    }

    getGPU(){
        return this.gpu;
        }
    setGPU(gpu){
        this.gpu = "RTX 4090";
        }
    getPSU(){
        return this.psu;
        }
    setPSU(psu){
        this.psu = psu;
        }
    setCase(Case){
        this.case = Case;
    }
    getCase(){
        return this.case;
    }
        

    
    displayCase(){
        console.log("Case: " + this.case);
        }

    displayAll(){
        console.log("cpu: " + this.Cpu + "ram" + this.Ram + "Storage: " + this.Storage  + "GPU: " + this.getGPU() + "PSU: " + this.psu + "Custom case: " + this.case);
    }
}

//Eighth subclass
class vitalComponents extends PC {
    constructor(cpu, ram, motherboard, psu){
    super(cpu, ram,)
    this.motherboard = motherboard;
    this.psu = psu;
}

getmotherboard() {
    return this._motherboard;
  }

setmotherboard(motherboard) {
this._motherboard = motherboard;
  }

getpsu() {
    return this._psu;
  }

setpsu(psu) {
    this._psu = psu;
  }

  checkAllComponents() {
    return Boolean(this.cpu && this.ram && this._motherboard && this._psu);
  }

  displayAllComponents() {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`Motherboard: ${this._motherboard}`);
    console.log(`Power Supply Unit: ${this._psu}`);
  }
}

//Ninth subclass 
class APU extends PC {
    constructor(cpu, ram, storage, apu, core){
        super(cpu, ram, storage)
        this.apu = apu;
        this.core = core;
    }

    getapu() {
        return this.setapu();
      }
    
      setapu(apu) {
        this.apu = "Radeon vega8";
      }
    
      getcore() {
        return this.setcore();
      }
    
      setcore(core) {
        this.core = 2;
      }

      displayAPU(){
        console.log("APU: " + this.getapu() + "Cores: " + this.getcore())
      }

      displayTired(){
        console.log("I'm done")
      }
}

//Tenth subclass
class FanPC extends PC {
    constructor(cpu, ram, storage, fan1, fan2){
        super(cpu, ram, storage)
        this.firstFan = fan1;
        this.secondfan = fan2;
    }

getfirstfan(){
    return this.setfirstfan();
    }
    
setFirstfan(fan1){
    this.firstFan = fan1;
}

getSecondFan(){
    return this.setSecondFan();
}

setSecondfan(fan2){
    this.secondfan = fan2;
    }
DisplayFans(){
    console.log (this.firstFan + this.secondfan)
}

DisplayAll(){
    console.log("I'm done v2");
    }

}