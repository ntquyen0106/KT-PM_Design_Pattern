package iuh;


public class Main {
    public static void main(String[] args) {
    	System.setProperty("file.encoding", "UTF-8");
        Employee emp1 = new TeamLeader("Nguyen Van A");
        Employee emp2 = new Director("Tran Thi B");
        Employee emp3 = new OfficeStaff("Le Van C");
        Employee emp4 = new FactoryWorker("Pham Van D");
        Employee emp5 = new ChiefAccountant("Hoang Thi E");

        // In ra công việc của từng nhân viên
        emp1.work();
        emp2.work();
        emp3.work();
        emp4.work();
        emp5.work();
    } 
}