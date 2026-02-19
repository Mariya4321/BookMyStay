package com.MiniProject.hotel.models;

import com.MiniProject.hotel.enums.RoomType;
import lombok.Data;

@Data
public class RoomDTO {
    private RoomType roomType;
    private Float price;
    private Integer totalRooms;
    private Integer availableRooms;
    private Integer capacity;
    private String imageUrl;
    private Boolean isActive;
}
