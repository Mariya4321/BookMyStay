package com.MiniProject.hotel.models;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class HotelBranchDTO {
    private Integer id;
    private String name;
    private String city;
    private String address;
    private String p_no;
    private String email;
    private String imageUrl;
    private BigDecimal rating;
    private Integer hotelId;
}
