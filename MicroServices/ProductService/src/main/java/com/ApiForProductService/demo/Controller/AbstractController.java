package com.ApiForProductService.demo.Controller;


import com.ApiForProductService.demo.DTO.Response.BasicResponse;
import com.ApiForProductService.demo.Exception.DataIntegrityViolationException;
import com.ApiForProductService.demo.Exception.CommonExceptionResponse;
import com.ApiForProductService.demo.Exception.InternalServerError;
import com.ApiForProductService.demo.Exception.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestControllerAdvice
@RequestMapping("/api/v1")
public class AbstractController {

    protected <T> ResponseEntity<BasicResponse<T>> createdResponse(T response) {
        BasicResponse<T> basicResponse=new BasicResponse<>(true,response);
        return ResponseEntity.status(201).body(basicResponse);
    }


    protected <T> ResponseEntity<BasicResponse<T>> successResponse(T response) {
        BasicResponse<T> basicResponse=new BasicResponse<>(true,response);
        return ResponseEntity.status(HttpStatus.OK).body(basicResponse);
    }

    protected ResponseEntity<Void> noContent() {
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(value = {EntityNotFoundException.class})
    protected ResponseEntity<Object> HandleNotFoundException(EntityNotFoundException entityNotFoundException) {
        CommonExceptionResponse NotFoundException=new CommonExceptionResponse(
                entityNotFoundException.getMessage(),
                HttpStatus.NOT_FOUND
        );
        return new ResponseEntity<>(NotFoundException,HttpStatus.NOT_FOUND);

    }

    @ExceptionHandler(value = {DataIntegrityViolationException.class})
    protected ResponseEntity<Object> HandleDataViolationException(DataIntegrityViolationException productViolationException) {
        CommonExceptionResponse DataViolationException=new CommonExceptionResponse(
                productViolationException.getMessage(),
                HttpStatus.CONFLICT
        );
        return new ResponseEntity<>(DataViolationException,HttpStatus.CONFLICT);

    }

    @ExceptionHandler(value = {InternalServerError.class})
    protected ResponseEntity<Object> HandleInternalServerException(InternalServerError ex) {
        CommonExceptionResponse internalServerException=new CommonExceptionResponse(
                ex.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR
        );
        return new ResponseEntity<>(internalServerException,HttpStatus.INTERNAL_SERVER_ERROR);

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

    @ExceptionHandler(NumberFormatException.class)
    protected ResponseEntity<Object> handleNumberFormatException(NumberFormatException ex) {
        CommonExceptionResponse NumberFormatException=new CommonExceptionResponse(ex.getMessage(),HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(NumberFormatException,HttpStatus.BAD_REQUEST);
    }
}
