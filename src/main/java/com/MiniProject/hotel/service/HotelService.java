package com.MiniProject.hotel.service;

import com.MiniProject.hotel.entities.Hotel;
import com.MiniProject.hotel.models.Hoteldetails;
import com.MiniProject.hotel.repository.HotelRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HotelService {
    private final HotelRepo hotelRepo;

    public HotelService(HotelRepo hotelRepo)
    {
        this.hotelRepo=hotelRepo;
    }

    public String create(Hoteldetails hoteldetails)
    {
        System.out.println(hoteldetails);
        Hotel hotel = new Hotel();
        hotel.setName(hoteldetails.getName());
        hotel.setDescription(hoteldetails.getDescription());
        hotel.setEmail(hoteldetails.getEmail());
        hotel.setImageUrl(hoteldetails.getImageUrl());
        hotelRepo.save(hotel);
        return "New Hotel Created";
    }

    public List<Hoteldetails> getHotels()
    {
        List<Hotel> hotelList = hotelRepo.findAll();
        List<Hoteldetails> hoteldetails = new ArrayList<>();

        for(Hotel hotel : hotelList)
        {
            Hoteldetails dto = new Hoteldetails();
            dto.setId(hotel.getId());
            dto.setName(hotel.getName());
            dto.setDescription(hotel.getDescription());
            dto.setEmail(hotel.getEmail());
            dto.setImageUrl(hotel.getImageUrl());
            dto.setCreatedAt(hotel.getCreatedAt());
            hoteldetails.add(dto);
        }
        return hoteldetails;
    }

    public Hoteldetails getHotelById(Integer id) {

        Hotel hotel = hotelRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        Hoteldetails dto = new Hoteldetails();
        dto.setId(hotel.getId());
        dto.setName(hotel.getName());
        dto.setDescription(hotel.getDescription());
        dto.setEmail(hotel.getEmail());
        dto.setImageUrl(hotel.getImageUrl());
        dto.setCreatedAt(hotel.getCreatedAt());

        return dto;
    }

    public Hoteldetails updateHotel(Integer id, Hoteldetails newHotel) {

        Hotel existing = hotelRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        existing.setName(newHotel.getName());
        existing.setEmail(newHotel.getEmail());
        existing.setDescription(newHotel.getDescription());
        existing.setImageUrl(newHotel.getImageUrl());

        Hotel saved = hotelRepo.save(existing);

        Hoteldetails response = new Hoteldetails();

        response.setId(saved.getId());
        response.setName(saved.getName());
        response.setEmail(saved.getEmail());
        response.setDescription(saved.getDescription());
        response.setImageUrl(saved.getImageUrl());
        response.setCreatedAt(saved.getCreatedAt());

        return response;
    }

    public void deleteHotel(Integer id) {
        hotelRepo.deleteById(id);
    }
}
