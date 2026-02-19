package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
}
