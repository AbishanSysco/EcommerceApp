package com.ApiForProductService.demo.repository;

import com.ApiForProductService.demo.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product,Long>
{
    @Query("SELECT p FROM Product p WHERE p.productCategory = :category" )
    List<Product> findAllByCategory(String category);
}
