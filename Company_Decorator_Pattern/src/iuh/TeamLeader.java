package iuh;

public class TeamLeader extends EmployeeDecorator {
    public TeamLeader(Employee employee) {
        super(employee);
    }

    @Override
    public void work() {
        super.work();
        assignTasks();
    }

    private void assignTasks() {
        System.out.println(" -> Quản lý nhóm và giao việc.");
    }
}
