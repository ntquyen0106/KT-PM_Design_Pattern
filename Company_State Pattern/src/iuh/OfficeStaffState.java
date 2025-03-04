package iuh;

class OfficeStaffState implements WorkState {
    public void doWork(String name) {
        System.out.println(name + " pha cà phê và phê duyệt tài liệu.");
    }
}