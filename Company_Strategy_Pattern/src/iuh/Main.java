package iuh;

public class Main {
    public static void main(String[] args) {
        Employee emp1 = new Employee("Nguyen Van A", new TeamLeaderWork());
        Employee emp2 = new Employee("Tran Thi B", new DirectorWork());
        Employee emp3 = new Employee("Le Van C", new OfficeStaffWork());
        Employee emp4 = new Employee("Pham Van D", new FactoryWorkerWork());
        Employee emp5 = new Employee("Hoang Thi E", new ChiefAccountantWork());

        emp1.performWork();
        emp2.performWork();
        emp3.performWork();
        emp4.performWork();
        emp5.performWork();
    }
}