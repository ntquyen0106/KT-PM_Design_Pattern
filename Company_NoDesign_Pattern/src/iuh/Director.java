package iuh;

class Director extends Employee {
    public Director(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(name + " quản lý toàn bộ công ty.");
    }
}