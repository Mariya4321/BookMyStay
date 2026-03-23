package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.HotelBranchDTO;
import com.MiniProject.hotel.service.BranchService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/branch")
public class BranchAPI {
    private final BranchService branchService;

    public BranchAPI(BranchService branchService){
        this.branchService = branchService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody HotelBranchDTO hotelBranchDTO)
    {
        String response = branchService.create(hotelBranchDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get")
    public ResponseEntity<List<HotelBranchDTO>> get()
    {
        return new ResponseEntity<>(branchService.getBranch(), HttpStatus.OK);
    }
}
