package com.MiniProject.hotel.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Hoteldetails {
    private Integer id;
    private String name;
    private String description;
    private String email;
    private String imageUrl;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private LocalDateTime createdAt;
}
