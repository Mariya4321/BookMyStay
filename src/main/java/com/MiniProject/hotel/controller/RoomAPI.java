package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.RoomDTO;
import com.MiniProject.hotel.service.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomAPI {
    private final RoomService roomService;    // dependency injection
    public RoomAPI(RoomService roomService)
    {
        this.roomService=roomService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody RoomDTO roomDTO)
    {
        String response = roomService.create(roomDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get")
    public ResponseEntity<List<RoomDTO>> get()
    {
        return new ResponseEntity<>(roomService.getRoom(), HttpStatus.OK);
    }
}
