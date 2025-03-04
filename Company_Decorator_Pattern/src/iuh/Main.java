package iuh;

public class Main {
    public static void main(String[] args) {
        Employee emp1 = new TeamLeader(new BaseEmployee("Nguyen Van A"));
        Employee emp2 = new Director(new BaseEmployee("Tran Thi B"));

        emp1.work();
        emp2.work();
    }
}