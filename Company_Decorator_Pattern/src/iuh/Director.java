package iuh;

public class Director extends EmployeeDecorator {
    public Director(Employee employee) {
        super(employee);
    }

    @Override
    public void work() {
        super.work();
        manageCompany();
    }

    private void manageCompany() {
        System.out.println(" -> Quản lý toàn bộ công ty.");
    }
}