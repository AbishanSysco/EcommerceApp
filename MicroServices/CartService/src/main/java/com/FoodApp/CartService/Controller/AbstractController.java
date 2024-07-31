package com.FoodApp.CartService.Controller;


import com.FoodApp.CartService.DTO.Response.CommonException;
import com.FoodApp.CartService.Exception.DataIntegrityViolation;
import com.FoodApp.CartService.Exception.InternalServerError;
import com.FoodApp.CartService.Exception.ResourceNotFoundException;
import com.FoodApp.CartService.DTO.Response.CommonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RequestMapping("/api/v1")
@ControllerAdvice
public   class AbstractController{

    protected <T> ResponseEntity<CommonResponse<T>> createdResponse(T response)
    {
        CommonResponse<T> commonResponse =new CommonResponse<>(true, HttpStatus.CREATED,response);
        return new ResponseEntity<>(commonResponse,HttpStatus.CREATED);
    }

    protected <T> ResponseEntity<CommonResponse<T>> successResponse(T response)
    {
        CommonResponse<T> commonResponse =new CommonResponse<>(true, HttpStatus.OK,response);
        return new ResponseEntity<>(commonResponse,HttpStatus.OK);
    }

    protected ResponseEntity<Void> noContent()
    {
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    protected ResponseEntity<CommonException> handleResourceNotFoundException(ResourceNotFoundException resourceNotFoundException)
    {
        CommonException commonResponse =new CommonException(
                false,
                resourceNotFoundException.getMessage(),
                401
        );

        return  new ResponseEntity<>(commonResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataIntegrityViolation.class)
    protected ResponseEntity<CommonException> handleDataIntegrityViolation(DataIntegrityViolation dataIntegrityViolation)
    {
        CommonException commonResponse =new CommonException(
                false,
                dataIntegrityViolation.getMessage(),
                HttpStatus.BAD_REQUEST.value()
        );

        return  new ResponseEntity<>(commonResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InternalServerError.class)
    protected ResponseEntity<CommonException> handleInternalServerError(InternalServerError internalServerError) {
        CommonException commonResponse =new CommonException(
                false,
                "Server Error",
                HttpStatus.INTERNAL_SERVER_ERROR.value()
        );

        return  new ResponseEntity<>(commonResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody

    protected Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        BindingResult bindingResult = ex.getBindingResult();
        Map<String, String> errors = new HashMap<>();

        bindingResult.getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage()));
        return errors;
    }

}
