/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.controller;

import com.teachJava5.teachJava5.DAO.CategoryDAO;
import com.teachJava5.teachJava5.dto.categoryDTO;
import java.util.List;
import java.util.Locale.Category;
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
@CrossOrigin(origins="*")
public class categoryController {
     @Autowired
    private CategoryDAO categoryDAO;
     
     @GetMapping("/categories")
    public List<categoryDTO> getListCategory() {
        return categoryDAO.getAll();
    } 
    @GetMapping("/category/{id}")
    public categoryDTO getCategoryById(@PathVariable int id) {
        return categoryDAO.getById(id);
    }
    @PostMapping("category/add")
    public String saveCategory(@RequestBody categoryDTO cate) {
        return categoryDAO.add(cate)+ "Add Success!";
    }
    @PutMapping("category/update/{id}")
    public String updateCategory(@RequestBody categoryDTO cate, @PathVariable int id) {
        return categoryDAO.update(cate, id) + "Update Success!";
    }
    @DeleteMapping("category/delete/{id}")  
    public String deleteCategory( @PathVariable int id) {
        return categoryDAO.delete(id) + "Delete Successfully";
    }
}
