/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.controller;


import Utils.EmailUtil;
import Utils.HashPass;
import com.teachJava5.teachJava5.DAO.accountDAO;
import com.teachJava5.teachJava5.dto.accountDTO;
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
public class accountController {

    @Autowired
    private accountDAO accountDAO;

    @PostMapping("login")
    public accountDTO userLogin(@RequestBody accountDTO user) {
        String hash_pass = HashPass.encrypt(user.getPassWord());
        user.setPassWord(hash_pass);
        return accountDAO.login(user);
    }
        
    @PostMapping("register")
    public accountDTO add(@RequestBody accountDTO user) {
        String hash_pass = HashPass.encrypt(user.getPassWord());
        user.setPassWord(hash_pass);
        
     
            return accountDAO.add(user);
       
        
    }

    @PutMapping("admin/users/update/{id}")
    public String update(@RequestBody accountDTO user, @PathVariable int id) {
         String hash_pass = HashPass.encrypt(user.getPassWord());
        user.setPassWord(hash_pass);
        return accountDAO.update(user, id)  +" update success";
    }
    
     @GetMapping("admin/users")
    public List<accountDTO> getListUser() {
        List<accountDTO> user = accountDAO.getAll();
        for (int i = 0; i < user.size(); i++) {
            user.get(i).setPassWord(HashPass.decrypt(user.get(i).getPassWord()));
        }
        return user;
    }

    
    @GetMapping("admin/users/{id}")
    public accountDTO getListUserById(@PathVariable int id) {
        return accountDAO.getById(id);
    }

    @DeleteMapping("admin/users/delete/{id}")  
    public String deleteUser( @PathVariable int id) {
        return accountDAO.delete(id) + "Delete Successfully";
    }
    
    @GetMapping("forgot/{email}")
     public int forgotPass( @PathVariable String email) {
        return accountDAO.sendPass(email);
    }

}
