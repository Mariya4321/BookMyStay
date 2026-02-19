package com.MiniProject.hotel.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "branch")
public class HotelBranch {
    @Id
    @SequenceGenerator(name = "hotel_branch_id_seq", sequenceName = "seq_id_branch", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hotel_branch_id_seq")
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "city")
    private String city;
    @Column(name = "address")
    private String address;
    @Column(name = "phone_number")
    private String p_no;
    @Column(name = "email")
    private String email;
    @Column(name = "rating")
    private Float rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", referencedColumnName = "id")
    private Hotel hotel;
}
