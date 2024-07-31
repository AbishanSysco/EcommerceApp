package com.FoodApp.CartService.Model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class CartItems {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int itemsId;

    @NotBlank(message = "product id is required")
    private Long productId;

    @NotBlank(message = "product quantity is required")
    private int qty;

    @ManyToOne
    @JoinColumn(name = "cartId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private  Carts carts;

    public CartItems(Long productId, int qty) {
        this.productId = productId;
        this.qty = qty;
    }
}
