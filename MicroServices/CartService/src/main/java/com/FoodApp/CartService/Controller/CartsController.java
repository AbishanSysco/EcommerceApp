package com.FoodApp.CartService.Controller;


import com.FoodApp.CartService.DTO.CartItemDTO;
import com.FoodApp.CartService.DTO.CartsDTO;
import com.FoodApp.CartService.DTO.Mapper.CartItemsMapper;
import com.FoodApp.CartService.Model.Carts;
import com.FoodApp.CartService.DTO.Response.CommonResponse;
import com.FoodApp.CartService.Servcie.CartsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/carts")
public class CartsController extends AbstractController{

    private static final Logger logger= LoggerFactory.getLogger(CartsController.class);
    private final CartsService cartsService;


    @PostMapping
    public ResponseEntity<CommonResponse<Carts>> createCarts(@Valid @RequestBody CartsDTO cartsDTO)
    {
            Carts carts = CartItemsMapper.toEntity(cartsDTO);
            logger.info("Creating carts for userToken: {}", carts.getUserToken());
            return createdResponse(cartsService.createCarts(carts));
    }

    @GetMapping
    public ResponseEntity<CommonResponse<CartsDTO>> getCartItems(@RequestParam String UserToken)
    {
        return successResponse(cartsService.getCartItems(UserToken));
    }

    @PutMapping("/{cartId}/items/{productId}")
    public ResponseEntity<CommonResponse<Carts>> updateCartItem(@PathVariable int cartId, @PathVariable Long productId, @Valid @RequestBody CartItemDTO cartItemDTO)
    {
        return successResponse(cartsService.updateCartItem(cartId,productId, cartItemDTO));
    }

    @DeleteMapping("/{cartId}/items/{productId}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable int cartId, @PathVariable Long productId)
    {
        cartsService.deleteCartItem(cartId,productId);
        return noContent();
    }

}
