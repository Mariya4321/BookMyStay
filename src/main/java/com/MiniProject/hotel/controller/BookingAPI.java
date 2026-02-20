package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.BookingRequestDTO;
import com.MiniProject.hotel.models.BookingResponseDTO;
import com.MiniProject.hotel.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingAPI {

    private final BookingService bookingService;
    public BookingAPI(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody BookingRequestDTO bookingRequestDTO)
    {
        String response = bookingService.create(bookingRequestDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get")
    public ResponseEntity<List<BookingResponseDTO>> get()
    {
        return new ResponseEntity<>(bookingService.getBooking(), HttpStatus.OK);
    }
}
