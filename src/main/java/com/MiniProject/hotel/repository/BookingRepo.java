package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.Booking;
import com.MiniProject.hotel.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
    List<Booking> findByUserId(Integer userId);
    boolean existsByUserIdAndRoomIdAndStatus(
            Integer userId,
            Integer roomId,
            BookingStatus status
    );
}
