package observer;

import java.util.ArrayList;
import java.util.List;

public class LopHoc {
	private String tenLop;
    private List<Observer> sinhVienList = new ArrayList<>();

    public LopHoc(String tenLop) {
        this.tenLop = tenLop;
    }

    public void register(Observer sv) {
        sinhVienList.add(sv);
    }

    public void unregister(Observer sv) {
        sinhVienList.remove(sv);
    }

    public void notifyAllObservers(String message) {
        for (Observer sv : sinhVienList) {
            sv.update(message);
        }
    }
}
