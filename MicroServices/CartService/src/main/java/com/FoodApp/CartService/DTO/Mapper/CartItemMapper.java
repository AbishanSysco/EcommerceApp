package com.FoodApp.CartService.DTO.Mapper;

import com.FoodApp.CartService.DTO.CartItemDTO;
import com.FoodApp.CartService.DTO.CartItemsDTO;
import com.FoodApp.CartService.DTO.CartsDTO;
import com.FoodApp.CartService.Model.CartItems;
import com.FoodApp.CartService.Model.Carts;

import java.util.HashSet;
import java.util.Set;



public class CartItemMapper {

    public static Carts toEntity(CartItemDTO cartItemDTO)
    {
        Carts cart =new Carts();
        cart.setUserToken(cartItemDTO.getUserToken());

        Set<CartItems> cartItemsSet = new HashSet<>();
        cartItemsSet.add(new CartItems(cartItemDTO.getCartItem().getProductId(), cartItemDTO.getCartItem().getQty()));


        cart.setCartItems(cartItemsSet);
        return cart;
    }

}
