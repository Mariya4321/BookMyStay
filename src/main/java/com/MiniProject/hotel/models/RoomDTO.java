package com.MiniProject.hotel.models;

import com.MiniProject.hotel.enums.RoomType;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class RoomDTO {
    private Integer id;
    private RoomType roomType;
    private BigDecimal price;
    private Integer totalRooms;
    private Integer availableRooms;
    private Integer capacity;
    private String imageUrl;
    private Boolean isActive;
    private Integer branchId;
}
