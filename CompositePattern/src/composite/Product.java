package composite;

public class Product implements Component {
	private String ten;
    private double gia;

    public Product(String ten, double gia) {
        this.ten = ten;
        this.gia = gia;
    }

    @Override
    public double getPrice() {
        return gia;
    }
}