/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.DAO;

import Utils.EmailUtil;
import Utils.HashPass;
import Utils.SendPass;
import com.teachJava5.teachJava5.dto.accountDTO;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 * 
 *
 * @author Hello
 */
@Repository
public class accountDAOImpl implements accountDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public accountDTO isExisted(accountDTO user) {
        try {
           return jdbcTemplate.queryForObject("select * from user where email=?", new BeanPropertyRowMapper<accountDTO>(accountDTO.class), user.getEmail());
        } catch (Exception e) {
            return null;
        }

    }

    @Override
    public accountDTO login(accountDTO user) {
        return jdbcTemplate.queryForObject("select userName , email , role from user where  passWord=? and email=?",
                new BeanPropertyRowMapper<accountDTO>(accountDTO.class), user.getPassWord(), user.getEmail());
    }

    @Override
    public accountDTO add(accountDTO user) {
        if (isExisted(user) == null) {
            try {
                EmailUtil.sendEmail(user.getEmail());
            jdbcTemplate.update("INSERT INTO user(userName, passWord, email, role) VALUES (?,?,?,?) ",
                    new Object[]{"", user.getPassWord(), user.getEmail(), "user"});
            return login(user);
            } catch (Exception e) {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public int update(accountDTO user, int id) {
        return jdbcTemplate.update("UPDATE user SET userName=?,passWord=?,email=?,role=? WHERE id=? ",
                new Object[]{user.getUserName(), user.getPassWord(), user.getEmail(), user.getRole(), id});
    }

    @Override
    public List<accountDTO> getAll() {
        return jdbcTemplate.query("select * from user", new BeanPropertyRowMapper<accountDTO>(accountDTO.class));
    }

    @Override
    public accountDTO getById(int id) {
        return jdbcTemplate.queryForObject("SELECT * FROM user where id=?", new BeanPropertyRowMapper<accountDTO>(accountDTO.class), id);
    }

    @Override
    public int delete(int id) {
        return jdbcTemplate.update("DELETE from user where id=?", id);
    }

    @Override
    public int sendPass(String email) {
       try {
            String newPass = "123456";
            String password_hash = HashPass.encrypt(newPass);
            SendPass.sendPass(email, newPass);
            return jdbcTemplate.update("update user set password=? where email=?",
                    new Object[]{password_hash, email});
        } catch (Exception e) {
            return 0;
        }
    }

}
