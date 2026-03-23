package com.MiniProject.hotel.entities;

import com.MiniProject.hotel.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "hoteluser")
public class User {
    @Id
    @SequenceGenerator(name = "user_id_seq", sequenceName = "seq_id_user", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
    private Integer id;
    @Column(name = "fname", nullable = false)
    private String fname;
    @Column(name = "lname", nullable = false)
    private String lname;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false)
    private Role role;
}
