package PC;

public class Gpu extends Cpu {

private int vrmPhases;

    public Gpu(int frequency, int cores, int threads, int vrmPhases) {
        super(frequency, cores, threads);
        this.vrmPhases = vrmPhases;   
    }

    public int getVrmPhases() {
        return vrmPhases;
    }

    public void setVrmPhases(int vrmPhases) {
        if(vrmPhases < 0){
            System.out.println("U cant set a negative value");
        }
    }
    

    
}
