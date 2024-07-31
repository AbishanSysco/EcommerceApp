package com.ApiForProductService.demo.DTO.Response;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.AllArgsConstructor;
import lombok.Data;



@Data
@AllArgsConstructor
public class BasicResponse<T> {

    private boolean isSuccess;
    private T body;

}
