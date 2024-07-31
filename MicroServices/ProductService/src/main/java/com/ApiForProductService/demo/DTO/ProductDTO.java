package com.ApiForProductService.demo.DTO;


import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class ProductDTO {

    @NotBlank(message= "product name is required")
    @Column(unique = true)
    private String productName;

    @NotBlank(message= "product description is required")
    private String productDescription;

    @NotBlank(message= "product category is required")
    private String productCategory;

    @NotBlank(message= "product price is required")
    @PositiveOrZero(message = "price is not be negative")
    private float productPrice;

}
