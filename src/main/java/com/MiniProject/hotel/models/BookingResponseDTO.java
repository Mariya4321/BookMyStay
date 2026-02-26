package com.MiniProject.hotel.models;

import com.MiniProject.hotel.entities.Room;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class BookingResponseDTO {
    private Integer bookingId;

    private Integer roomId;
    private String roomType;
    private Float roomPrice;

    private Integer userId;
    private String userName;

    private LocalDate checkIn;
    private LocalDate checkOut;

    private BigDecimal totalPrice;
    private String status;
}
