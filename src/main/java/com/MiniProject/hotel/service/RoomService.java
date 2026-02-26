package com.MiniProject.hotel.service;
import com.MiniProject.hotel.entities.HotelBranch;
import com.MiniProject.hotel.entities.Room;
import com.MiniProject.hotel.models.RoomDTO;
import com.MiniProject.hotel.repository.BranchRepo;
import com.MiniProject.hotel.repository.RoomRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {
    private final RoomRepo roomRepo;
    private final BranchRepo branchRepo;

    public RoomService(RoomRepo roomRepo, BranchRepo branchRepo) {
        this.roomRepo = roomRepo;
        this.branchRepo = branchRepo;
    }

    public String create(RoomDTO roomDTO)
    {
        if(roomDTO == null){
            throw new RuntimeException("Room data is required");
        }

        // Negative value validations
        if(roomDTO.getPrice() == null || roomDTO.getPrice().doubleValue() <= 0){
            throw new RuntimeException("Price must be greater than zero");
        }

        if(roomDTO.getTotalRooms() == null || roomDTO.getTotalRooms() <= 0){
            throw new RuntimeException("Total rooms must be greater than zero");
        }

        if(roomDTO.getCapacity() == null || roomDTO.getCapacity() <= 0){
            throw new RuntimeException("Capacity must be greater than zero");
        }

        if(roomDTO.getCapacity() > roomDTO.getTotalRooms() * 5){
            throw new RuntimeException("Capacity is too high for total rooms");
        }


        System.out.println(roomDTO);
        Room room = new Room();

        room.setRoomType(roomDTO.getRoomType());
        room.setPrice(roomDTO.getPrice());
        room.setTotalRooms(roomDTO.getTotalRooms());
        room.setCapacity(roomDTO.getCapacity());
        room.setImageUrl(roomDTO.getImageUrl());

        room.setAvailableRooms(roomDTO.getTotalRooms());
        room.setIsActive(true);

        HotelBranch branch = branchRepo.findById(roomDTO.getBranchId())
                .orElseThrow(() -> new RuntimeException("Branch not found"));

        room.setBranch(branch);
        roomRepo.save(room);

        return "Room Created";
    }

    public List<RoomDTO> getRoom()
    {
        List<Room> roomList = roomRepo.findAll();
        List<RoomDTO> roomDTO = new ArrayList<>();

        for(Room room : roomList)
        {
            RoomDTO dto = new RoomDTO();
            dto.setId(room.getId());
            dto.setRoomType(room.getRoomType());
            dto.setPrice(room.getPrice());
            dto.setTotalRooms(room.getTotalRooms());
            dto.setAvailableRooms(room.getAvailableRooms());
            dto.setCapacity(room.getCapacity());
            dto.setImageUrl(room.getImageUrl());
            dto.setIsActive(room.getIsActive());
            dto.setBranchId(room.getBranch().getId());
            roomDTO.add(dto);
        }
        return roomDTO;
    }
}
