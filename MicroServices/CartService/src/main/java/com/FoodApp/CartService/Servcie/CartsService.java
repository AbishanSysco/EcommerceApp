package com.FoodApp.CartService.Servcie;

import com.FoodApp.CartService.DTO.CartItemDTO;
import com.FoodApp.CartService.DTO.CartsDTO;
import com.FoodApp.CartService.Model.Carts;


public interface   CartsService
{
    Carts createCarts(Carts carts);
    CartsDTO getCartItems(String UserToken);
    Carts updateCartItem(int cartId, Long productId, CartItemDTO cartItemDTO);
    void deleteCartItem(int cartId,Long productId);
}
