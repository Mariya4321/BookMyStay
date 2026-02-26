package com.MiniProject.hotel.service;

import com.MiniProject.hotel.entities.Hotel;
import com.MiniProject.hotel.entities.HotelBranch;
import com.MiniProject.hotel.models.HotelBranchDTO;
import com.MiniProject.hotel.repository.BranchRepo;
import com.MiniProject.hotel.repository.HotelRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BranchService {
    private final BranchRepo branchRepo;
    private final HotelRepo hotelRepo;

    public BranchService(BranchRepo branchRepo, HotelRepo hotelRepo){
        this.branchRepo = branchRepo;
        this.hotelRepo = hotelRepo;
    }

    public String create(HotelBranchDTO hotelBranchDTO)
    {
        System.out.println(hotelBranchDTO);

        if (hotelBranchDTO.getHotelId() == null) {
            throw new RuntimeException("Hotel Id is required");
        }

        Hotel hotel = hotelRepo.findById(hotelBranchDTO.getHotelId())
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        HotelBranch hotelBranch = new HotelBranch();
        hotelBranch.setName(hotelBranchDTO.getName());
        hotelBranch.setCity(hotelBranchDTO.getCity());
        hotelBranch.setAddress(hotelBranchDTO.getAddress());
        hotelBranch.setP_no(hotelBranchDTO.getP_no());
        hotelBranch.setEmail(hotelBranchDTO.getEmail());
        hotelBranch.setImageUrl(hotelBranchDTO.getImageUrl());
        hotelBranch.setRating(hotelBranchDTO.getRating());

        hotelBranch.setHotel(hotel);

        branchRepo.save(hotelBranch);

        return "Branch created successfully";
    }
    public List<HotelBranchDTO> getBranch()
    {
        List<HotelBranch> branchList = branchRepo.findAll();
        List<HotelBranchDTO> hotelBranchDTO = new ArrayList<>();

        for(HotelBranch branch : branchList)
        {
            HotelBranchDTO dto = new HotelBranchDTO();
            dto.setName(branch.getName());
            dto.setCity(branch.getCity());
            dto.setAddress(branch.getAddress());
            dto.setP_no(branch.getP_no());
            dto.setEmail(branch.getEmail());
            dto.setImageUrl(branch.getImageUrl());
            dto.setRating(branch.getRating());
            dto.setHotelId(branch.getHotel().getId());
            hotelBranchDTO.add(dto);
        }

        return hotelBranchDTO;
    }

}
