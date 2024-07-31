package com.FoodApp.CartService.DTO;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartsDTO {

    private String userToken;
    private Set<CartItemsDTO> CartItems;


}
