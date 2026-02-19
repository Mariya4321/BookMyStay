package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
}
