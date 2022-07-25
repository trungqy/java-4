/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.DAO;

import com.teachJava5.teachJava5.dto.categoryDTO;
import com.teachJava5.teachJava5.dto.productDTO;
import com.teachJava5.teachJava5.dto.productWithCategory;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Hello
 */
@Repository
public class productDAOImpl implements productDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int add(productDTO products) {
        return jdbcTemplate.update("INSERT INTO product(images,nameProduct,categoryId,price) VALUES (?,?,?,?) ",
                new Object[]{products.getImages(), products.getNameProduct(), products.getCategoryId(), products.getPrice()});
    }

    @Override
    public int update(productDTO products, int id) {
        return jdbcTemplate.update("UPDATE product SET images=?, nameProduct=? ,categoryId=?,price=? WHERE id=? ",
                new Object[]{products.getImages(), products.getNameProduct(), products.getCategoryId(), products.getPrice(), id});
    }

    @Override
    public List<productWithCategory> getAll() {
        return jdbcTemplate.query("SELECT product.id,product.nameProduct,product.images,product.categoryId,product.price,category.nameCate\n"
                + "FROM product\n"
                + "JOIN category ON category.id=product.categoryId",
                new BeanPropertyRowMapper<productWithCategory>(productWithCategory.class));
    }

    @Override
    public productDTO getById(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM product where id=?", new BeanPropertyRowMapper<productDTO>(productDTO.class), id);
    }

    @Override
    public int delete(int id) {
        return jdbcTemplate.update("DELETE from product where id=?", id);
    }

    @Override
    public List<productDTO> search(String nameProduct) {
        return jdbcTemplate.query("SELECT * FROM product where nameProduct like '%" + nameProduct + "%'"
        ,new BeanPropertyRowMapper<productDTO>(productDTO.class));

    }

}
