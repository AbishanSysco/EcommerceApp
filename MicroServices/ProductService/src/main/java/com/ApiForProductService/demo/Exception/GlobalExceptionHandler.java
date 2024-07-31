package com.ApiForProductService.demo.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;



@ControllerAdvice
public class GlobalExceptionHandler
{
    @ExceptionHandler(value = {EntityNotFoundException.class})
    public ResponseEntity<Object> HandleNotFoundException(EntityNotFoundException entityNotFoundException)
    {
        CommonExceptionResponse productException=new CommonExceptionResponse(
                entityNotFoundException.getMessage(),
                HttpStatus.NOT_FOUND
        );
        return new ResponseEntity<>(productException,HttpStatus.NOT_FOUND);

    }

    @ExceptionHandler(value = {DataIntegrityViolationException.class})
    public ResponseEntity<Object> HandleDataViolationException(DataIntegrityViolationException productViolationException)
    {
        CommonExceptionResponse productException=new CommonExceptionResponse(
                productViolationException.getMessage(),
                HttpStatus.CONFLICT
        );
        return new ResponseEntity<>(productException,HttpStatus.CONFLICT);

    }
    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<Object> handleNumberFormatException(NumberFormatException ex) {

       CommonExceptionResponse productNotFoundException=new CommonExceptionResponse(ex.getMessage(),HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(productNotFoundException,HttpStatus.BAD_REQUEST);
    }


}
