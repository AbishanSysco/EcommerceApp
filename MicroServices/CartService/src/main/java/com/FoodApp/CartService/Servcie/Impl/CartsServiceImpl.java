package com.FoodApp.CartService.Servcie.Impl;

import com.FoodApp.CartService.Controller.CartsController;
import com.FoodApp.CartService.DTO.CartItemDTO;
import com.FoodApp.CartService.DTO.CartsDTO;
import com.FoodApp.CartService.DTO.Mapper.CartItemsMapper;
import com.FoodApp.CartService.Exception.InternalServerError;
import com.FoodApp.CartService.Exception.ResourceNotFoundException;
import com.FoodApp.CartService.Exception.DataIntegrityViolation;
import com.FoodApp.CartService.Model.CartItems;
import com.FoodApp.CartService.Model.Carts;
import com.FoodApp.CartService.Repository.CartsItemsRepository;
import com.FoodApp.CartService.Repository.CartsRepository;
import com.FoodApp.CartService.Servcie.CartsService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class CartsServiceImpl implements CartsService {

    private static final Logger logger = LoggerFactory.getLogger(CartsController.class);
    private final CartsRepository cartsRepository;
    private final CartsItemsRepository cartsItemsRepository;


    private void setRelationships(Carts carts) {
        for (CartItems cartItem : carts.getCartItems()) {
            cartItem.setCarts(carts);
        }
    }

    private void checkAndHandleDuplicateItems(Carts carts) {
        Carts existingCart = cartsRepository.findByUserToken(carts.getUserToken());
        if (existingCart != null && existingCart.isActiveCart()) {
            for (CartItems newItem : carts.getCartItems()) {
                for (CartItems existItem : existingCart.getCartItems()) {
                    if (newItem.getProductId().equals(existItem.getProductId()))
                        throw new DataIntegrityViolation("You are try to adding same item again");
                }
            }
            carts.setCartId(existingCart.getCartId());
        } else {
            int cartId = cartsRepository.findLatestCartId();
            carts.setCartId(cartId + 1);
        }
    }

    private Carts findActiveCartById(int cartId) {
        Optional<Carts> existingCart = cartsRepository.findById(cartId);
        if (existingCart.isEmpty()) {
            throw new ResourceNotFoundException("Failed to delete cart item with cartId " + cartId);
        }
        Carts cart = existingCart.get();
        if (!cart.isActiveCart()) {
            throw new ResourceNotFoundException("Failed to delete cart item with cartId " + cartId);
        }
        return cart;
    }

    public Carts createCarts(Carts carts) {
        try {
            checkAndHandleDuplicateItems(carts);
            setRelationships(carts);
            carts.setActiveCart(true);
            return cartsRepository.save(carts);
        } catch (DataIntegrityViolation exception) {
            throw new DataIntegrityViolation("you are entering same product");
        } catch (Exception exception) {
            logger.error("Error while creating carts: {}", exception.getMessage());
            throw new InternalServerError();
        }

    }

    public CartsDTO getCartItems(String UserToken) {
        try{
            Carts carts = cartsRepository.findByUserToken(UserToken);
        if (carts == null) {
            logger.info("Cart not found for UserToken: {}", UserToken);
            throw new ResourceNotFoundException("Cart not found for the provided UserToken");
        }
        return CartItemsMapper.toDTO(carts);
        }catch (ResourceNotFoundException except){
            logger.error(except.getMessage());
            throw except;
        }catch (Exception except){
            throw  new InternalServerError();
        }
    }

    public Carts updateCartItem(int cartId, Long productId, CartItemDTO cartItemDTO) {
        Carts carts = cartsRepository.findByUserToken(cartItemDTO.getUserToken());
        logger.error("update query start here:");
        boolean found = false;
        if (carts != null && carts.isActiveCart()) {
            for (CartItems existingCart : carts.getCartItems()) {
                if (existingCart.getProductId().equals(productId)) {
                    existingCart.setQty(cartItemDTO.getCartItem().getQty());
                    found = true;
                    break;
                }
            }
            if (!found)
                throw new ResourceNotFoundException("Product Id is not found");
            return cartsRepository.save(carts);
        } else {
            logger.error("cart id is not found");
            throw new ResourceNotFoundException("Cart Id is not found");
        }
    }

    public void deleteCartItem(int cartId, Long productId) {
        try {
            Carts cart = findActiveCartById(cartId);
            for (CartItems existItem : cart.getCartItems()) {
                if (!existItem.getProductId().equals(productId))
                    throw new ResourceNotFoundException("Failed to delete cart item with productId " + productId);
            }
            cartsItemsRepository.deleteByCartIdAndProductId(cartId, productId);
        } catch (ResourceNotFoundException exception) {
            logger.error("Not found exception: {}", exception.getMessage());
        } catch (Exception exception) {
            logger.error("Product not found: {}", exception.getMessage());
            throw new InternalServerError();
        }
    }
}
