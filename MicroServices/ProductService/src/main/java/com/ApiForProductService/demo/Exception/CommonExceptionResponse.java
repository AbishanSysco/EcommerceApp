package com.ApiForProductService.demo.Exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class CommonExceptionResponse {
    private final String message;
    private final HttpStatus http;
}
