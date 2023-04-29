package PC;
public class Cpu {
    private int frequency, cores, threads;

    public Cpu(int frequency, int cores, int threads) {
        this.frequency = frequency;
        this.cores = cores;
        this.threads = threads;
    }

    public int getFrequency() {
        return frequency;
    }

    public int getCores() {
        return cores;
    }

    public int getThreads() {
        return threads;
    }

    //Setters

    public void setFrequency(int frequency) {
        this.frequency = frequency;
    }

    public void setCores(int cores) {
        this.cores = cores;
    }

    public void setThreads(int threads) {
        this.threads = threads;
    }


    public String toString() {
        return "Cpu: [frequency=" + frequency + ", cores=" + cores + ", threads=" + threads + "]";
    } 
}
