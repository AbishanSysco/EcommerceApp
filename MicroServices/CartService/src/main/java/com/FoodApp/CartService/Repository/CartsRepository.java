package com.FoodApp.CartService.Repository;

import com.FoodApp.CartService.Model.Carts;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface CartsRepository extends JpaRepository<Carts , Integer> {

    @Query("SELECT c FROM Carts c WHERE c.userToken = :userToken ORDER BY c.cartId DESC LIMIT 1")
    Carts findByUserToken(String userToken);

    @Query(value = "SELECT COALESCE(MAX(c.cartId), 0) FROM Carts c")
    int findLatestCartId();



}
