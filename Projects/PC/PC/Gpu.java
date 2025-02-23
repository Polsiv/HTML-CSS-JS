package PC;

public class Gpu  {

private int vrmPhases;

        public Gpu(int frequency, int cores, int threads, int vrmPhases) {
            
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
