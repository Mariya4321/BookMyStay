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
        if(bookingRequestDTO == null){
            throw new RuntimeException("Booking request cannot be null");
        }
        User user = userRepo.findById(bookingRequestDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        booking.setUser(user);
        Room room = roomRepo.findById(bookingRequestDTO.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));
        booking.setRoom(room);

        if(room.getAvailableRooms() <= 0){
            throw new RuntimeException("Room is not available");
        }

        boolean alreadyBooked = bookingRepo.existsByUserIdAndRoomIdAndStatus(
                user.getId(),
                room.getId(),
                BookingStatus.CONFIRMED
        );

        if(alreadyBooked){
            throw new RuntimeException("You already have an active booking for this room");
        }


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
        return bookingRepo.findAll()
                .stream()
                .map(booking -> {

                    BookingResponseDTO dto = new BookingResponseDTO();

                    dto.setBookingId(booking.getId());
                    dto.setRoomId(booking.getRoom().getId());
                    dto.setUserId(booking.getUser().getId());
                    dto.setRoomType(booking.getRoom().getRoomType().toString());
                    dto.setRoomPrice(booking.getRoom().getPrice().floatValue());

                    dto.setUserName(
                            booking.getUser().getFname() + " " +
                                    booking.getUser().getLname()
                    );

                    dto.setCheckIn(booking.getCheckIn());
                    dto.setCheckOut(booking.getCheckOut());
                    dto.setTotalPrice(booking.getTotalPrice());
                    dto.setStatus(booking.getStatus().toString());

                    return dto;
                })
                .toList();
    }

    public List<BookingResponseDTO> getBookingByUser(Integer userId)
    {
        List<Booking> bookingList = bookingRepo.findByUserId(userId);

        List<BookingResponseDTO> responseList = new ArrayList<>();

        for(Booking booking : bookingList)
        {
            BookingResponseDTO dto = new BookingResponseDTO();

            dto.setBookingId(booking.getId());
            dto.setRoomId(booking.getRoom().getId());
            dto.setUserId(booking.getUser().getId());
            dto.setRoomType(booking.getRoom().getRoomType().toString());
            dto.setRoomPrice(booking.getRoom().getPrice().floatValue());
            dto.setUserName(
                    booking.getUser().getFname() + " " +
                            booking.getUser().getLname()
            );
            dto.setCheckIn(booking.getCheckIn());
            dto.setCheckOut(booking.getCheckOut());
            dto.setTotalPrice(booking.getTotalPrice());
            dto.setStatus(booking.getStatus().toString());

            responseList.add(dto);
        }

        return responseList;
    }
    public void cancelBooking(Integer id) {

        Booking booking = bookingRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        if (booking.getStatus() != BookingStatus.CONFIRMED) {
            throw new RuntimeException("Only booked reservations can be cancelled");
        }

        booking.setStatus(BookingStatus.CANCELLED);

        bookingRepo.save(booking);
    }

}
