package com.MiniProject.hotel.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Test {

    @Id
    private Integer Id;
    private String name;
}
