package composite;

public class Main {
	public static void main(String[] args) {
        // Tạo sản phẩm
        Product cafe = new Product("Coffe", 30000);
        Product nuocSuoi = new Product("Nuoc suoi", 10000);
        Product traSua = new Product("Tra sua", 40000);

        // Tạo bàn và thêm sản phẩm vào bàn
        Table ban1 = new Table();
        ban1.addProduct(cafe);
        ban1.addProduct(nuocSuoi);

        Table ban2 = new Table();
        ban2.addProduct(traSua);
        ban2.addProduct(cafe);

        // Tính tổng tiền của từng bàn
        System.out.println("Tong tien ban 1: " + ban1.getPrice() + " VND");
        System.out.println("Tong tien ban 2: " + ban2.getPrice() + " VND");

        // Tính tổng doanh thu quán cà phê
        double tongDoanhThu = ban1.getPrice() + ban2.getPrice();
        System.out.println("Tong doanh thu quan: " + tongDoanhThu + " VND");
    }
}
