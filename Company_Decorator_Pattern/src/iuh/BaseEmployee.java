package iuh;

public class BaseEmployee implements Employee {
    private String name;

    public BaseEmployee(String name) {
        this.name = name;
    }

    @Override
    public void work() {
        System.out.println(name + " đang làm việc.");
    }
}