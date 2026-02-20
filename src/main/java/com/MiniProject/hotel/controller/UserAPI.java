package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.UserDTO;
import com.MiniProject.hotel.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserAPI {
    private final UserService userService;
    public UserAPI(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody UserDTO userDTO)
    {
        String response = userService.create(userDTO);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get")
    public ResponseEntity<List<UserDTO>> get()
    {
        return new ResponseEntity<>(userService.getUser(), HttpStatus.OK);
    }

    @PostMapping("/admin")
    public ResponseEntity<String> createAdmin(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.createAdmin(userDTO));
    }
}
