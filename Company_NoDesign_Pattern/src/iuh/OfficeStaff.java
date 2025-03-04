package iuh;
class OfficeStaff extends Employee {
    public OfficeStaff(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(name + " pha cà phê và phê duyệt tài liệu.");
    }
}