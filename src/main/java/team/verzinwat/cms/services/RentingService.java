package team.verzinwat.cms.services;

import team.verzinwat.cms.domain.Product;

import java.util.ArrayList;
import java.util.List;

public class RentingService {

    private final List<Product> products = new ArrayList<>();
    private int nextId = 1;

    public RentingService() {
        addProduct(new Product( "De snelste kano"));
        addProduct(new Product( "De sloomste kano"));
    }
    public List<Product> getAllProdcucts() {
        return products;
    }
    public Product addProduct(Product product) {
        if (product.getId() == 0) {
            product.setId(nextId++);
        }
        products.add(product);
        return product;
    }
}
