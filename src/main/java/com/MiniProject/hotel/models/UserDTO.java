package com.MiniProject.hotel.models;

import com.MiniProject.hotel.enums.Role;
import lombok.Data;

@Data
public class UserDTO {
    private Integer id;
    private String fname;
    private String lname;
    private String email;
    private String password;
    private String phoneNumber;
    private Role role;
}
