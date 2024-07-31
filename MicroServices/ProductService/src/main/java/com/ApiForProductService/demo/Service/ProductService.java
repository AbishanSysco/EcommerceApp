package com.ApiForProductService.demo.Service;

import com.ApiForProductService.demo.Model.Product;


import java.util.List;
import java.util.Map;


public interface ProductService {

    Product createProduct(Product product);
    Product updateProduct(Long id, Product product);
    Product getProduct( Long id);
    List<Product> getProducts();
    List<Product> getProductsByCategory(String category);
    void deleteProduct(Long id);

}
