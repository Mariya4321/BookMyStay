package com.MiniProject.hotel.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "HotelBranch")
public class HotelBranch {
    @Id
    @SequenceGenerator(name = "Hotel_Branch_id_seq", sequenceName = "seq_id_Branch", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Hotel_Branch_id_seq")
    private Integer id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "rating")
    private Integer rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", referencedColumnName = "id")
    private Hotel hotel;
}
