package com.FoodApp.CartService.DTO.Response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommonException {
    private final boolean isSuccess;
    private final String message;
    private final int statusCode;

}
