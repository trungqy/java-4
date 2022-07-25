/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.DAO;

import com.teachJava5.teachJava5.dto.accountDTO;
import java.util.List;

/**
 *
 * @author Hello
 */
public interface accountDAO {
    accountDTO login(accountDTO user);
    accountDTO add(accountDTO user);
    int update(accountDTO user,int id);
    List<accountDTO> getAll();
    accountDTO getById(int id);
    public int delete(int id);
    int sendPass(String email);
    
}
