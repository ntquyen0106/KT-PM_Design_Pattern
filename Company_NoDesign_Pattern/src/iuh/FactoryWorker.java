package iuh;

class FactoryWorker extends Employee {
    public FactoryWorker(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(name + " làm việc trong xưởng sản xuất.");
    }
}