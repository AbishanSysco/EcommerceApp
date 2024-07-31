package com.ApiForProductService.demo.DTO.Mapper;

import com.ApiForProductService.demo.DTO.ProductDTO;
import com.ApiForProductService.demo.Model.Product;

public class ProductMapper {

    public static ProductDTO toDTO(Product product) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductName(product.getProductName());
        productDTO.setProductCategory(product.getProductCategory());
        productDTO.setProductDescription(product.getProductDescription());
        productDTO.setProductPrice(product.getProductPrice());

        return productDTO;
    }

    public static Product toEntity(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductName(productDTO.getProductName());
        product.setProductCategory(productDTO.getProductCategory());
        product.setProductDescription(productDTO.getProductDescription());
        product.setProductPrice(productDTO.getProductPrice());

        return product;
    }
}
