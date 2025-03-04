package iuh;

class Employee {
    private String name;
    private WorkState state; // Trạng thái hiện tại của nhân viên

    public Employee(String name) {
        this.name = name;
    }

    public void setState(WorkState state) {
        this.state = state;
    }

    public void work() {
        if (state != null) {
            state.doWork(name);
        } else {
            System.out.println(name + " chưa có chức vụ cụ thể.");
        }
    }
}
