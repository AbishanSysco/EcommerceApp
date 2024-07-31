package com.ApiForProductService.demo.Error;

import com.ApiForProductService.demo.Exception.CommonExceptionResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@ControllerAdvice
@RestController
public class CustomErrorController implements ErrorController
{
    private final String PATH="/error";


    @RequestMapping(value = PATH)

    public ResponseEntity<Object> handle404Error() {
        CommonExceptionResponse productNotFoundException=new CommonExceptionResponse("Resource Not Found",HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(productNotFoundException,HttpStatus.NOT_FOUND);

    }



}
