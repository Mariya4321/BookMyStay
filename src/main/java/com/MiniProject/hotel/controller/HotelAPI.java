package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.Hoteldetails;
import com.MiniProject.hotel.service.HotelService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/hotel")
public class HotelAPI {

    private final HotelService hotelService;    // dependency injection
    public HotelAPI(HotelService hotelService)
    {
        this.hotelService=hotelService;
    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> create(@RequestBody Hoteldetails hoteldetails)
    {
        String response = hotelService.create(hoteldetails);
        return ResponseEntity.ok(
                Map.of("message", "Hotel Created Successfully")
        );
    }

    @GetMapping("/get")
    public ResponseEntity<List<Hoteldetails>> get() {
        return ResponseEntity.ok(hotelService.getHotels());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hoteldetails> getById(@PathVariable Integer id) {
        return ResponseEntity.ok(hotelService.getHotelById(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Hoteldetails> updateHotel(
            @PathVariable Integer id,
            @RequestBody Hoteldetails hoteldetails) {

        return ResponseEntity.ok(hotelService.updateHotel(id, hoteldetails));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,String>> deleteHotel(@PathVariable Integer id) {

        hotelService.deleteHotel(id);

        return ResponseEntity.ok(
                Map.of("message","Hotel Deleted Successfully")
        );
    }

}
