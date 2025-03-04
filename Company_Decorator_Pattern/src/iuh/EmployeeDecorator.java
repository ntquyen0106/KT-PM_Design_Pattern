package iuh;

public abstract class EmployeeDecorator implements Employee {
    protected Employee decoratedEmployee;

    public EmployeeDecorator(Employee employee) {
        this.decoratedEmployee = employee;
    }

    @Override
    public void work() {
        decoratedEmployee.work();
    }
}