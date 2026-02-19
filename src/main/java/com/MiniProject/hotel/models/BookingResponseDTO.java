package com.MiniProject.hotel.models;

import com.MiniProject.hotel.entities.Room;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class BookingResponseDTO {
    private Integer bookingId;

    private Integer roomId;
    private Room roomType;
    private Float roomPrice;

    private Integer userId;
    private String userName;

    private LocalDate checkIn;
    private LocalDate checkOut;

    private Float totalPrice;
    private String status;

    private LocalDateTime createdAt;
}
