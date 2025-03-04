package iuh;

class DirectorState implements WorkState {
    public void doWork(String name) {
        System.out.println(name + " quản lý toàn bộ công ty.");
    }
}
