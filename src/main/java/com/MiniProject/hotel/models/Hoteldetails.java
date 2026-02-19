package com.MiniProject.hotel.models;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class Hoteldetails {
    private String name;
    private String description;
    private String email;
    private LocalDateTime createdAt;
}
