package iuh;

public class Employee {
    private String name;
    private WorkStrategy workStrategy;

    public Employee(String name, WorkStrategy workStrategy) {
        this.name = name;
        this.workStrategy = workStrategy;
    }

    public void performWork() {
        System.out.print(name + " đang làm việc: ");
        workStrategy.work();
    }
}