package iuh;

public class FactoryWorkerWork implements WorkStrategy {
    @Override
    public void work() {
        System.out.println("Làm việc trong xưởng sản xuất.");
    }
}