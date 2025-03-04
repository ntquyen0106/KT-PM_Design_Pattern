package iuh;

class FactoryWorkerState implements WorkState {
    public void doWork(String name) {
        System.out.println(name + " làm việc trong xưởng sản xuất.");
    }
}