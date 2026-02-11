package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotelRepo extends JpaRepository<Hotel, Integer> {

}
