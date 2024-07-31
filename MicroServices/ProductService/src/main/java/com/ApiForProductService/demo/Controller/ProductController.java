package com.ApiForProductService.demo.Controller;
import com.ApiForProductService.demo.DTO.Mapper.ProductMapper;
import com.ApiForProductService.demo.DTO.ProductDTO;
import com.ApiForProductService.demo.DTO.Response.BasicResponse;
import com.ApiForProductService.demo.Model.Product;
import com.ApiForProductService.demo.Service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController extends AbstractController{
    private final ProductService productService;

    @GetMapping("/{productId}")
    public ResponseEntity<BasicResponse<Product>> getProductById(@PathVariable("productId") Long productId) {
        return successResponse(productService.getProduct(productId));
    }

    @GetMapping
    public ResponseEntity<BasicResponse<List<Product>>> getAllProducts() {
        return successResponse(productService.getProducts());
    }

    @PostMapping
    public ResponseEntity<BasicResponse<Product>> createProduct(@Valid  @RequestBody ProductDTO productDTO)  {
        Product product= ProductMapper.toEntity(productDTO);
        return createdResponse(productService.createProduct(product));
    }

    @PutMapping("/{productId}")
    public ResponseEntity<BasicResponse<Product>> updateProduct(@PathVariable Long productId,@Valid @RequestBody ProductDTO productDTO) {
        Product product= ProductMapper.toEntity(productDTO);
        return successResponse(productService.updateProduct(productId,product));
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProductById(@PathVariable("productId") Long productId) {
        productService.deleteProduct(productId);
        return noContent();
    }



}
