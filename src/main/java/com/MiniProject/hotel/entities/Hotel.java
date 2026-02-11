package com.MiniProject.hotel.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Hotel")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "image_url")
    private String imageURL;
    @Column(name = "rating")
    private Integer rating;
}
