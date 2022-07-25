/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.DAO;

import com.teachJava5.teachJava5.dto.productDTO;
import com.teachJava5.teachJava5.dto.productWithCategory;
import java.util.List;

/**
 *
 * @author Hello
 */
public interface productDAO {

    int add(productDTO products);

    int update(productDTO products, int id);

    List<productWithCategory> getAll();

    List< productDTO> search(String nameProduct);

    productDTO getById(int id);

    public int delete(int id);
}
