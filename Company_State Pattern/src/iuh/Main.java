package iuh;

public class Main {
    public static void main(String[] args) {
        Employee emp1 = new Employee("Nguyen Van A");
        Employee emp2 = new Employee("Tran Thi B");
        Employee emp3 = new Employee("Le Van C");
        Employee emp4 = new Employee("Pham Van D");
        Employee emp5 = new Employee("Hoang Thi E");

        // Gán trạng thái công việc cho từng nhân viên
        emp1.setState(new TeamLeaderState());
        emp2.setState(new DirectorState());
        emp3.setState(new OfficeStaffState());
        emp4.setState(new FactoryWorkerState());
        emp5.setState(new ChiefAccountantState());

        // In ra công việc của từng nhân viên
        emp1.work();
        emp2.work();
        emp3.work();
        emp4.work();
        emp5.work();
    }
}