package com.MiniProject.hotel.models;

import lombok.Data;

import java.util.List;

@Data
public class Hoteldetails {
//    private String name;
//    private int age;
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
    public String name;
    public String imageURL;
    public Integer rating;
    public List<HotelBranchDTO> branch;
}
