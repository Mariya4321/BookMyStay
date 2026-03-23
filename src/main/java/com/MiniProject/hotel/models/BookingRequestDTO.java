package com.MiniProject.hotel.models;

import lombok.Data;

import java.time.LocalDate;

@Data
public class BookingRequestDTO {

    private Integer roomId;
    private Integer userId;
    private LocalDate checkIn;
    private LocalDate checkOut;
}
