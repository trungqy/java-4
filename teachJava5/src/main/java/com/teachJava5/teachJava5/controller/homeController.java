/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.controller;

import com.teachJava5.teachJava5.dto.profileDTO;
import javax.websocket.server.PathParam;
import org.apache.el.stream.Optional;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


/**
 *
 * @author Hello
 */
@Controller

@RequestMapping("admin")

public class homeController {
  
    
   

@GetMapping("/profilee")
   
    public String profile(Model model){
        profileDTO dto = new profileDTO();
        dto.setName("Le Trung Quy");
        dto.setAge("19");
        dto.setSex("Nam");
        dto.setSoThich("Ngủ");
        model.addAttribute("profile",dto);
        return "profile";
    }
 

}
