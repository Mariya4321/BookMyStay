package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepo extends JpaRepository<Room, Integer> {
}
