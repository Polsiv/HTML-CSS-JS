package PC;
public class Storage extends Memory{
    private int slots, busWidth;
    private String type;


    public Storage(int Capacity, int Frequency, String Latency, int slots, String type, int buswidth) {
        super(Capacity, Frequency, Latency);
        this.slots = slots;
        this.type = type;
        this.defineBusWidth(buswidth);
    }
    public void setNumberSlots(int slots) {
        this.slots = slots;
    }

    public int getBusWidth(){
        return busWidth;
    }

    public void defineBusWidth(int busWidth){
        if(busWidth < 0){
            System.out.println("DAWG YOURE SO DUMB!");
            this.busWidth = 400;
        } else {
            this.busWidth = busWidth;
        }
    }

    public int getSlots() {
        return slots;
    }

    public String getType(){
        return type;
    }

    public void defineType(String type){
        this.type = type;
    }

    public String toString(){
        return super.toString() + " Slots: " + this.slots + " Type:" + this.type + this.busWidth ; 
    }
}
