/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.teachJava5.teachJava5.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author Hello
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class productDTO {
    private int id;
    private String images;
    private String nameProduct;
    private String categoryId;
    private double price;
    
}
