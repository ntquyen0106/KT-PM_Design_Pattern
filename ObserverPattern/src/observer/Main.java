package observer;

public class Main {
	public static void main(String[] args) {
        LopHoc lop = new LopHoc("Lop 12A1");

        SinhVien sv1 = new SinhVien("Nguyen Van A");
        SinhVien sv2 = new SinhVien("Tran Thi B");

        lop.register(sv1);
        lop.register(sv2);

        // Lớp trưởng gửi thông báo
        lop.notifyAllObservers("Mai nghi hoc nhe!");
    }
}
