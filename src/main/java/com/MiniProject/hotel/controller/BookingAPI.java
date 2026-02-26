package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.BookingRequestDTO;
import com.MiniProject.hotel.models.BookingResponseDTO;
import com.MiniProject.hotel.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/booking")
public class BookingAPI {

    private final BookingService bookingService;
    public BookingAPI(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody BookingRequestDTO dto) {

        String message = bookingService.create(dto);

        Map<String, String> response = new HashMap<>();
        response.put("message", message);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BookingResponseDTO>> getByUser(@PathVariable Integer userId){
        return ResponseEntity.ok(bookingService.getBookingByUser(userId));
    }

    @PutMapping("/cancel/{id}")
    public ResponseEntity<Map<String, String>> cancelBooking(@PathVariable Integer id) {
        bookingService.cancelBooking(id);
        return ResponseEntity.ok(
                Map.of("message", "Cancelled Booking Successfully")
        );
    }
    @GetMapping("/all")
    public ResponseEntity<List<BookingResponseDTO>> getAllBookings(){
        return ResponseEntity.ok(bookingService.getBooking());
    }
}
