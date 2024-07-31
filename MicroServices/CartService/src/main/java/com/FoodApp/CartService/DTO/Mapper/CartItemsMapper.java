package com.FoodApp.CartService.DTO.Mapper;

import com.FoodApp.CartService.DTO.CartsDTO;
import com.FoodApp.CartService.DTO.CartItemsDTO;
import com.FoodApp.CartService.Model.CartItems;
import com.FoodApp.CartService.Model.Carts;

import java.util.Set;
import java.util.stream.Collectors;

public class CartItemsMapper {
    public static CartsDTO toDTO(Carts carts)
    {
        CartsDTO cartsDTO = new CartsDTO();

        cartsDTO.setUserToken(carts.getUserToken());
        Set<CartItemsDTO> cartItemsDTO = carts.getCartItems().stream()
                        .map(cartItem -> new CartItemsDTO(cartItem.getProductId(),cartItem.getQty()))
                                .collect(Collectors.toSet());


        cartsDTO.setCartItems(cartItemsDTO);

        return cartsDTO;
    }


    public static Carts toEntity(CartsDTO cartsDTO)
    {
        Carts carts = new Carts();
        Set<CartItems> cartItems = cartsDTO.getCartItems().stream()
                .map(CartsItemsDTO ->
                new CartItems(CartsItemsDTO.getProductId(),CartsItemsDTO.getQty())
                )
                .collect(Collectors.toSet());

        carts.setUserToken(cartsDTO.getUserToken());
        carts.setCartItems(cartItems);

        return carts;
    }

}
