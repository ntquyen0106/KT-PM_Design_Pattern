package iuh;

class ChiefAccountant extends Employee {
    public ChiefAccountant(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(name + " quản lý tài chính và kế toán.");
    }
}