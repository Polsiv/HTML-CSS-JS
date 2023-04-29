class Memory {
    constructor(capacity, frequency, latency) {
      this.capacity = capacity;
      this.frequency = frequency;
      this.latency = latency;
    }
  
    getCapacity() {
      return this.capacity;
    }
  
    getFrequency() {
      return this.frequency;
    }
  
    getLatency() {
      return this.latency;
    }
  
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
    constructor(capacity, frequency, latency, module, xmp, colour) {
      super(capacity, frequency, latency);
      this.module = module;
      this.XMP = xmp;
      this.colour = colour;
    }
  
    getColour() {
      return this.colour;
    }
  
    RGB(colour) {
      this.colour = colour;
    }
  
    getModule() {
      return this.module;
    }
  
    setModule(module) {
      this.module = module;
    }
  
    getXMP() {
      return this.XMP;
    }
  
    setXMPProfile(xmp) {
      this.XMP = xmp;
    }
  
    toString() {
      return super.toString() + ` Number of modules: ${this.module} XMP: ${this.XMP}`;
    }
  }
  
  //8==============================================================================D

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
  
    toString() {
      return `Cpu: [frequency=${this.frequency}, cores=${this.cores}, threads=${this.threads}]`;
    }
  }