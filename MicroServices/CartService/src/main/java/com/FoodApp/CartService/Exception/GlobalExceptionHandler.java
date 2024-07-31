package com.FoodApp.CartService.Exception;

import com.FoodApp.CartService.DTO.Response.CommonException;
import com.FoodApp.CartService.DTO.Response.CommonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<CommonException> CartNotFoundException(ResourceNotFoundException resourceNotFoundException)
    {
        CommonException commonResponse =new CommonException(
                false,
                resourceNotFoundException.getMessage(),
                HttpStatus.NOT_FOUND.value()
        );

        return  new ResponseEntity<>(commonResponse, HttpStatus.NOT_FOUND);
    }
}
