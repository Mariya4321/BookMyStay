package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepo extends JpaRepository<Room, Integer> {
    List<Room> findByHotel_Id(Integer hotelId);
}
