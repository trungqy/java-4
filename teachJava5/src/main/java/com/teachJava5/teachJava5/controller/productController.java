/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.controller;

import com.teachJava5.teachJava5.DAO.productDAO;
import com.teachJava5.teachJava5.dto.productDTO;
import com.teachJava5.teachJava5.dto.productWithCategory;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Hello
 */
@RestController
@CrossOrigin(origins = "*")
public class productController {

    @Autowired
    private productDAO productDAO;

   
    
     @GetMapping("/products")
    public List<productWithCategory> getListProduct() {
        return productDAO.getAll();
    } 
    @PostMapping("/product/search/{nameProduct}")
    public List<productDTO> search( @PathVariable String nameProduct) {
        return productDAO.search(nameProduct);
    } 
    
    @GetMapping("/products/{id}")
    public productDTO getProductById(@PathVariable int id) {
        return productDAO.getById(id);
    }
   @PostMapping("product/add")
    public String saveProduct(@RequestBody productDTO products) {
        return productDAO.add(products) + "Add Success!";
    }
    @PutMapping("product/update/{id}")
    public String updateProduct(@RequestBody productDTO products, @PathVariable int id) {
        return productDAO.update(products, id) + "Update Success!";
    }
    @DeleteMapping("product/delete/{id}")  
    public String deleteProduct( @PathVariable int id) {
        return productDAO.delete(id) + "Delete Successfully";
    }
}
