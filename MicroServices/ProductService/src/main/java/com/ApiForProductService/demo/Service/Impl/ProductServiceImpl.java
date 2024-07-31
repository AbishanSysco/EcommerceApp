package com.ApiForProductService.demo.Service.Impl;
import com.ApiForProductService.demo.Controller.ProductController;
import com.ApiForProductService.demo.DTO.Mapper.ProductMapper;
import com.ApiForProductService.demo.DTO.ProductDTO;
import com.ApiForProductService.demo.Exception.DataIntegrityViolationException;
import com.ApiForProductService.demo.Exception.InternalServerError;
import com.ApiForProductService.demo.Exception.EntityNotFoundException;
import com.ApiForProductService.demo.Model.Product;
import com.ApiForProductService.demo.Service.ProductService;
import com.ApiForProductService.demo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;



@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductController.class);

    @Override
    public Product createProduct(Product product){
        try {
            return productRepository.save(product);
        } catch (org.springframework.dao.DataIntegrityViolationException exception) {
            LOGGER.error("Duplicate product name is entered: {}", exception.getMessage());
            throw new DataIntegrityViolationException("Duplicate product name is entered");
        } catch (Exception exception) {
            LOGGER.error("Error happens in creating products: {}", exception.getMessage());
            throw new InternalServerError();
        }
    }
    @Override
    public Product updateProduct(Long id, Product product) {
        Optional<Product> Product=productRepository.findById(id);
        if(Product.isPresent()){
            ProductDTO productDTO= ProductMapper.toDTO(product);
            Product product1=ProductMapper.toEntity(productDTO);
            return productRepository.save(product1);
        }
        throw  new EntityNotFoundException("Id is Not Found");
    }

    @Override
    public Product getProduct( Long id) {
        return productRepository.findById(id)
                .orElseThrow(() ->new EntityNotFoundException("Product Id is not found"));
    }

    @Override
    public List<Product> getProducts() {
        List<Product> products=productRepository.findAll();
        if(products.isEmpty()){
            LOGGER.warn("products are not found");
            throw new EntityNotFoundException("No products are available");
        }
        return products;
    }

    @Override
    public List<Product> getProductsByCategory(String category) {
        if (productRepository.findAllByCategory(category).isEmpty()) {
            throw new EntityNotFoundException("Products are not found ");
        }
        return  productRepository.findAllByCategory(category);
    }

    @Override
    public void deleteProduct(Long id) {
        try {
            Optional<Product> productOptional = productRepository.findById(id);
            if (productOptional.isEmpty()) {
                throw new EntityNotFoundException("Product with id " + id + " not found");
            }
            productRepository.deleteById(id);
        } catch (EntityNotFoundException ex) {
            LOGGER.error("Product not found: {}", ex.getMessage());
          } catch (Exception ex) {
            LOGGER.error("Error deleting product: {}", ex.getMessage());
            throw new InternalServerError();
           }
    }
}
