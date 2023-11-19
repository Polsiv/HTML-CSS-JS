class Memory {
    constructor(capacity, frequency, latency) {
      this.capacity = capacity;
      this.frequency = frequency;
      this.latency = latency;
    }
  //getters
    getCapacity() {
      return this.capacity;
    }
  
    getFrequency() {
      return this.frequency;
    }
  
    getLatency() {
      return this.latency;
    }
  //setters
    setCapacity(capacity) {
      this.capacity = capacity;
    }
  
    setFrequency(frequency) {
      this.frequency = frequency;
    }
  
    setLatency(latency) {
      this.latency = latency;
    }
  
    toString() {
      return `(Memory: \n Frequency: ${this.frequency} Capacity: ${this.capacity} Latency: ${this.latency})`;
    }
  }
  
//8==============================================================================D

class Ram extends Memory {
    constructor(capacity, frequency, latency, modules, xmps, color) {
      super(capacity, frequency, latency);
      this.modules = modules;
      this.XMPs = xmps;
      this.color = color;
    }
  
    getColor() {
      return this.color;
    }
  
    RGB(color) {
      this.colour = color;
    }
  
    getModules() {
      return this.modules;
    }
  
    setModules(modules) {
      this.module = modules;
    }
  
    getXMPs() {
      return this.XMPs;
    }
  
    setXMPProfile(xmps) {
      this.XMPs = xmps;
    }
  
    toString() {
      return super.toString() + ` Number of modules: ${this.module} XMP: ${this.XMP}`;
    }
  }
  
  //8==============================================================================

  class Storage extends Memory {
    constructor(Capacity, Frequency, Latency, slots, type, buswidth) {
      super(Capacity, Frequency, Latency);
      this.slots = slots;
      this.type = type;
      this.defineBusWidth(buswidth);
    }
  
    setNumberSlots(slots) {
      this.slots = slots;
    }
  
    getBusWidth() {
      return this.busWidth;
    }
  
    defineBusWidth(busWidth) {
      if (busWidth < 0) {
        console.log("DAWG YOURE SO DUMB!");
        this.busWidth = 400;
      } else {
        this.busWidth = busWidth;
      }
    }
  
    getSlots() {
      return this.slots;
    }
  
    getType() {
      return this.type;
    }
  
    defineType(type) {
      this.type = type;
    }
  
    toString() {
      return super.toString() + " Slots: " + this.slots + " Type:" + this.type + " BusWidth: " + this.busWidth;
    }
  }

  //8==============================================================================D
  
  class Cpu {
    constructor(frequency, cores, threads) {
      this.frequency = frequency;
      this.cores = cores;
      this.threads = threads;
    }
  
    getFrequency() {
      return this.frequency;
    }
  
    getCores() {
      return this.cores;
    }
  
    getThreads() {
      return this.threads;
    }

    // Setters
    setFrequency(frequency) {
      this.frequency = frequency;
    }
  
    setCores(cores) {
      this.cores = cores;
    }
  
    setThreads(threads) {
      this.threads = threads;
    }
  

    MemoryAccess(){
      return ("The cpu now has access to the memory!")
    }

    Overclock(){
      return ("The cpu has been overclocked!")
    }

    Write(){
      return ("The cpu has written to the memory!")
    }

    toString() {
      return `Cpu: [frequency=${this.frequency}, cores=${this.cores}, threads=${this.threads}]`;
    }
  }

  //8==============================================================================D
  
  
  class GPU {
    constructor(teraflops, vrmPhases, vram){
      this.teraflops = teraflops;
      this.vrmPhases = vrmPhases;
      this.vram = vram;
    }
    
    getTeraflops(){
      return this.teraflops;
    }
    
    getVrmPhases(){
      return this.vrmPhases;
    }
    
    getVram(){
      return this.vram;
    }

    setTeraflops(teraflops){
      this.teraflops = teraflops;
    }

    setVrhPhases(vrmphases){
      this.vrmPhases = vrmphases;
    }

    setVram(vram){
      this.vram = vram;
    }

    calculatePerformance(){
      return (this.teraflops * this.vrmPhases * this.vram) / 1000000;
    }

    overclock(){
        return this.teraflops * this.vrmPhases * this.vram;
    }

    checkTemperature(){
      return "Checking temperature"
    }
    
    toString(){
      return "GPU: " + this.teraflops + " Teraflops, " + this.vrmPhases + " VRM Phases, " + this.vram + " VRAM";
    }
  }

  class PSU{
    constructor(Power, Temperature, Model){
      this.power = Power;
      this.temperature = Temperature;
      this.model = Model;
    }

    getPower(){
      return this.power;
      }
    
    getTemperature(){
      return this.temperature;
    }

    getModel(){
      return this.model;
    }

    setPower(power){
      this.power = power;
    }

    setTemperature(temperature){
      this.temperature = temperature;
    }

    setModel(model){
      this.model = model;
    }

    isWorking(){
      return this.power > 0 && this.temperature <= 50;
    }

    increaseTemperature(increment){
      this.temperature += increment;
    }

    detectOverheating(){
      return this.temperature > 100;
    }
  }

//8==============================================================================D

class PC {

constructor(cases, fans, ram, cpu, gpu, psu){
this.Ram = ram;
this.Cases = cases;
this.Fans = fans;
this.cpu = cpu;
this.gpu = gpu;
this.psu = psu;
  }

  setStorage(storage){
    this.storage = storage;
  }

  overclockCpu() {
    if (this.cpu) {
      return this.cpu.Overclock();
    } else {
      return "No CPU is installed.";
    }
  }
}


const myPC = new PC("nzxt", 3, new Ram(32, 3200, "CL16", 2, 3600, "Black"), new Cpu("3.2Ghz", 4, 8), new GPU(1.3, 6, 10), new PSU ("700W", "50", "Modular"))

myPC.setStorage( new Storage(300, "1Tb", 30, "4", "ssd", "256 bits"))

//any mehtod
console.log(myPC.overclockCpu());
console.log(myPC)
