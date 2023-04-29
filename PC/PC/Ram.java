package PC;
public class Ram extends Memory{

private int module;
private Boolean XMP;
private String colour;

    public Ram(int Capacity, int Frequency, String Latency, int module, Boolean xmp, String colour) {
        super(Capacity, Frequency, Latency);
        this.module = module;
        this.XMP = xmp;
        this.colour = colour;
    }

    public String getColour(){
        return colour;
    }

    public void RGB(String colour){
        this.colour = colour;
    }

    public int getModule() {
        return module;
    }

    public void setModule(int module) {
        this.module = module;
    }

    public Boolean getXMP() {
        return XMP;
    }

    public void setXMPProfile(Boolean xMP) {
        this.XMP = xMP;
    }
 
    public String toString(){
        return super.toString() + " Number of modules: " + this.module + this.XMP + this.colour;
    }
}

