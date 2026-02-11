package com.MiniProject.hotel.service;

import com.MiniProject.hotel.entities.Hotel;
import com.MiniProject.hotel.entities.HotelBranch;
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
        hotel.setImageURL(hoteldetails.getImageURL());
        hotel.setRating(hoteldetails.getRating());

        hotelRepo.save(hotel);
        return "New Hotel Created";
    }

    public List<Hoteldetails> getHotels()
    {
        List<Hotel> hotelList = hotelRepo.findAll();
        List<Hoteldetails> hoteldetails = new ArrayList<>();

        for(Hotel hotel : hotelList)
        {
            Hoteldetails hoteldetails1 = new Hoteldetails();
            hoteldetails1.setName(hotel.getName());
            hoteldetails1.setImageURL(hotel.getImageURL());
            hoteldetails1.setRating(hotel.getRating());
            hoteldetails.add(hoteldetails1);
        }
        return hoteldetails;
    }
}
