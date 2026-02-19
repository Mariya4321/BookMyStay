package com.MiniProject.hotel.models;

import lombok.Data;

import java.util.List;

@Data
public class HotelBranchDTO {
    private String name;
    private String city;
    private String address;
    private String p_no;
    private String email;
    private Integer rating;
    private List<RoomDTO> room;
}
