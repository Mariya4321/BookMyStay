package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.Hoteldetails;
import com.MiniProject.hotel.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
public class testAPI {

//    @Autowired
    private final TestService testService;

    public testAPI(TestService testService)
    {
        this.testService = testService;
    }

    @GetMapping("")
    public String Hello()
    {
        return ("Hello World!");
    }
    @GetMapping("/hello")
    public String Print()
    {
        return ("Hello World!");
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody Hoteldetails hoteldetails)
    {
        String response = testService.Print();
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
