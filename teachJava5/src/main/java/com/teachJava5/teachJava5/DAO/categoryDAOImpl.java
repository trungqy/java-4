/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.DAO;

import com.teachJava5.teachJava5.dto.categoryDTO;
import java.util.List;
import java.util.Locale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Hello
 */
@Repository
public class categoryDAOImpl implements CategoryDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int add(categoryDTO cate) {
       return jdbcTemplate.update("INSERT INTO category(nameCate) VALUES (?) ",
                new Object[]{ cate.getNameCate()});

    }

    @Override
    public int update(categoryDTO cate, int id) {
        return jdbcTemplate.update("UPDATE category SET nameCate=? WHERE id=? ",
                new Object[]{cate.getNameCate(), id});
    }

 

    @Override
    public List<categoryDTO> getAll() {
        return jdbcTemplate.query("select * from category", new BeanPropertyRowMapper<categoryDTO>(categoryDTO.class));
    }

    @Override
    public categoryDTO getById(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM category where id=?", new BeanPropertyRowMapper<categoryDTO>(categoryDTO.class), id);
    }

    @Override
    public int delete(int id) {
         return jdbcTemplate.update("DELETE from category where id=?", id);
    }

    
  

}
