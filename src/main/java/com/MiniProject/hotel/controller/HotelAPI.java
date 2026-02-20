package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.Hoteldetails;
import com.MiniProject.hotel.service.HotelService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotel")
public class HotelAPI {

    private final HotelService hotelService;    // dependency injection
    public HotelAPI(HotelService hotelService)
    {
        this.hotelService=hotelService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody Hoteldetails hoteldetails)
    {
        String response = hotelService.create(hoteldetails);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Hoteldetails>> get()
    {
        return new ResponseEntity<>(hotelService.getHotels(), HttpStatus.OK);
    }
}
