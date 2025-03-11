package composite;

import java.util.ArrayList;
import java.util.List;

public class Table implements Component {
	private List<Component> danhSachSanPham = new ArrayList<>();

    public void addProduct(Component product) {
        danhSachSanPham.add(product);
    }

    @Override
    public double getPrice() {
        double total = 0;
        for (Component product : danhSachSanPham) {
            total += product.getPrice();
        }
        return total;
    }
}
