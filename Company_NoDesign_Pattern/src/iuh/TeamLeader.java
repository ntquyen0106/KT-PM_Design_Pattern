package iuh;
class TeamLeader extends Employee {
    public TeamLeader(String name) {
        super(name);
    }

    @Override
    public void work() {
        System.out.println(name + " đi tuần tra và giao việc cho nhân viên.");
    }
}