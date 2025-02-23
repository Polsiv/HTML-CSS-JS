package PC;

public class Memory{
    private int capacity, frequency;
    private String latency;

    public Memory(int Capacity, int Frequency, String Latency) {
        this.capacity = Capacity;
        this.frequency = Frequency;
        this.latency = Latency;
    }

    public int getCapacity() {
        return capacity;
    }

    public int getFrequency() {
        return frequency;
    }

    public String getLatency() {
        return latency;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setFrequency(int frequency) {
        this.frequency = frequency;
    }

    public void setLatency(String latency) {
        this.latency = latency;
    }

    public String toString(){
        return "(Memory: \n Frequency:" + this.frequency + " Capacity: " + this.capacity  +" Latency: "  +this.latency + ")" ;
    }
} 