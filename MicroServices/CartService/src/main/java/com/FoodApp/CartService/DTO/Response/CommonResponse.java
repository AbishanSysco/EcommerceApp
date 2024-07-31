package com.FoodApp.CartService.DTO.Response;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class CommonResponse<T> {


    private Boolean isSuccess;
    private HttpStatus httpStatus;
    private T response;


}
