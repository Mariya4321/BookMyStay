package com.MiniProject.hotel.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "hotel")
public class Hotel {

    @Id
    @SequenceGenerator(name = "hotel_id_seq", sequenceName = "seq_id_hotel", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hotel_id_seq")
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "email")
    private String email;

    @Column(name = "created_at", nullable = false, updatable = false)    // Cannot be NULL in DB and Cannot be modified after creation
    private LocalDateTime createdAt = LocalDateTime.now();
}
