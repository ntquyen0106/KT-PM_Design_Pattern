package iuh;

public class TeamLeaderState implements WorkState {
    public void doWork(String name) {
        System.out.println(name + " đi tuần tra và giao việc cho nhân viên.");
    }
}