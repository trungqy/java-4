/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.DAO;

import com.teachJava5.teachJava5.dto.categoryDTO;
import java.util.List;
import java.util.Locale.Category;

/**
 *
 * @author Hello
 */
public interface CategoryDAO {
    int add(categoryDTO cate);
    int update(categoryDTO cate,int id);
    List<categoryDTO> getAll();
    categoryDTO getById(int id);
    public int delete(int id);
    
}
