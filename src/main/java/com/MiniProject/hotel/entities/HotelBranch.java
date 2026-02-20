package com.MiniProject.hotel.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
@Table(name = "branch")
public class HotelBranch {
    @Id
    @SequenceGenerator(name = "hotel_branch_id_seq", sequenceName = "seq_id_branch", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hotel_branch_id_seq")
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "city", nullable = false)
    private String city;
    @Column(name = "address", nullable = false)
    private String address;
    @Column(name = "phone_number", nullable = false)
    private String p_no;
    @Column(name = "email")
    private String email;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "rating")
    private BigDecimal rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", referencedColumnName = "id", nullable = false)
    private Hotel hotel;
}
