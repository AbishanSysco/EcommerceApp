package com.FoodApp.CartService.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CartItemsDTO {
    private Long productId;
    private int qty;
}
