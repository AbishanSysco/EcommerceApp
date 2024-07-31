package com.FoodApp.CartService.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class CartItemDTO {
    private String userToken;
    private CartItemsDTO CartItem;
}
