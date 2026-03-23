package com.MiniProject.hotel.service;

import com.MiniProject.hotel.entities.User;
import com.MiniProject.hotel.enums.Role;
import com.MiniProject.hotel.models.UserDTO;
import com.MiniProject.hotel.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo)
    {
        this.userRepo=userRepo;
    }

    public String create(UserDTO userDTO)
    {
        System.out.println(userDTO);
        User user = new User();
        user.setFname(userDTO.getFname());
        user.setLname(userDTO.getLname());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setPhoneNumber(userDTO.getPhoneNumber());

        if(userDTO.getRole() != null){
            user.setRole(userDTO.getRole());
        }
        else{
            user.setRole(Role.CUSTOMER); // default role
        }

        userRepo.save(user);
        return "User Registered Successfully";
    }

    public UserDTO login(UserDTO userDTO) {

        User user = userRepo.findByEmail(userDTO.getEmail());

        if(user == null){
            throw new RuntimeException("User not found");
        }

        if(!user.getPassword().equals(userDTO.getPassword())){
            throw new RuntimeException("Invalid password");
        }

        UserDTO dto = new UserDTO();

        dto.setId(user.getId());
        dto.setFname(user.getFname());
        dto.setLname(user.getLname());
        dto.setEmail(user.getEmail());
        dto.setPhoneNumber(user.getPhoneNumber());

        // ⭐ VERY IMPORTANT
        dto.setRole(user.getRole());

        return dto;
    }

    public List<UserDTO> getUser()
    {
        List<User> userList = userRepo.findAll();
        List<UserDTO> userDTO = new ArrayList<>();

        for(User user : userList)
        {
            UserDTO dto = new UserDTO();
            dto.setFname(user.getFname());
            dto.setLname(user.getLname());
            dto.setEmail(user.getEmail());
            dto.setPhoneNumber(user.getPhoneNumber());
            userDTO.add(dto);
        }
        return userDTO;
    }
}
