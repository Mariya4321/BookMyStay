package com.MiniProject.hotel.repository;

import com.MiniProject.hotel.entities.HotelBranch;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchRepo extends JpaRepository<HotelBranch, Integer> {
}
