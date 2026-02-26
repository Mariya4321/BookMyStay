package com.MiniProject.hotel.controller;

import com.MiniProject.hotel.models.LoginResponseDTO;
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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO) {

        UserDTO user = userService.login(userDTO);

        if (user != null) {
            return ResponseEntity.ok(user);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body("Invalid email or password");
    }

    @GetMapping("/get")
    public ResponseEntity<List<UserDTO>> get()
    {
        return new ResponseEntity<>(userService.getUser(), HttpStatus.OK);
    }

}
