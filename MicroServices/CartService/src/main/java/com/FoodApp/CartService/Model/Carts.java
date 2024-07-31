package com.FoodApp.CartService.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.Set;



@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class Carts {

    @Id
    private int cartId;
    @NotBlank(message = "userToken is required")
    private String userToken;
    private boolean isActiveCart;

    @OneToMany(mappedBy = "carts", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @EqualsAndHashCode.Exclude private Set<CartItems> CartItems;


}
