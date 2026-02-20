package com.MiniProject.hotel.service;

import com.MiniProject.hotel.entities.Booking;
import com.MiniProject.hotel.entities.Room;
import com.MiniProject.hotel.entities.User;
import com.MiniProject.hotel.enums.BookingStatus;
import com.MiniProject.hotel.models.BookingRequestDTO;
import com.MiniProject.hotel.models.BookingResponseDTO;
import com.MiniProject.hotel.models.RoomDTO;
import com.MiniProject.hotel.repository.BookingRepo;
import com.MiniProject.hotel.repository.RoomRepo;
import com.MiniProject.hotel.repository.UserRepo;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookingService {
    private final BookingRepo bookingRepo;
    private final RoomRepo roomRepo;
    private final UserRepo userRepo;

    public BookingService(BookingRepo bookingRepo, RoomRepo roomRepo, UserRepo userRepo) {
        this.bookingRepo = bookingRepo;
        this.roomRepo = roomRepo;
        this.userRepo = userRepo;
    }

    public String create(BookingRequestDTO bookingRequestDTO)
    {
        System.out.println(bookingRequestDTO);
        Booking booking = new Booking();

        Room room = roomRepo.findById(bookingRequestDTO.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));
        booking.setRoom(room);

        User user = userRepo.findById(bookingRequestDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        booking.setUser(user);

        long days = ChronoUnit.DAYS.between(bookingRequestDTO.getCheckIn(), bookingRequestDTO.getCheckOut());
        if (days <= 0) {
            throw new RuntimeException("Check-out date must be after check-in date");
        }
        BigDecimal totalPrice = room.getPrice().multiply(BigDecimal.valueOf(days));
        booking.setTotalPrice(totalPrice);
        booking.setStatus(BookingStatus.CONFIRMED);
        booking.setCheckIn(bookingRequestDTO.getCheckIn());
        booking.setCheckOut(bookingRequestDTO.getCheckOut());

        bookingRepo.save(booking);

        return "Room Booked";
    }

    public List<BookingResponseDTO> getBooking()
    {
        List<Booking> bookingList = bookingRepo.findAll();
        List<BookingResponseDTO> bookingResponseDTO = new ArrayList<>();

        for(Booking booking : bookingList)
        {
            BookingResponseDTO bookingResponseDTO1 = new BookingResponseDTO();
            bookingResponseDTO1.setBookingId(booking.getId());
            bookingResponseDTO1.setRoomId(booking.getRoom().getId());
            bookingResponseDTO1.setUserId(booking.getUser().getId());
            bookingResponseDTO1.setRoomType(booking.getRoom().getRoomType().toString());
            bookingResponseDTO1.setRoomPrice(booking.getRoom().getPrice().floatValue());
            bookingResponseDTO1.setUserName(booking.getUser().getFname()+" "+booking.getUser().getLname());
            bookingResponseDTO1.setCheckIn(booking.getCheckIn());
            bookingResponseDTO1.setCheckOut(booking.getCheckOut());
            bookingResponseDTO1.setTotalPrice(booking.getTotalPrice());
            bookingResponseDTO1.setStatus(booking.getStatus().toString());
            bookingResponseDTO1.setCreatedAt(booking.getCreatedAt());

            bookingResponseDTO.add(bookingResponseDTO1);
        }
        return bookingResponseDTO;
    }

}
