package com.FoodApp.CartService.Repository;

import com.FoodApp.CartService.Model.CartItems;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface CartsItemsRepository extends JpaRepository<CartItems,Integer> {
    @Transactional
    @Modifying
    @Query("DELETE FROM CartItems ci WHERE ci.carts.cartId = :cartId AND ci.productId = :productId")
    void deleteByCartIdAndProductId(int cartId,Long productId);
}
