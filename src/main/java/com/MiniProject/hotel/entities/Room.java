package com.MiniProject.hotel.entities;

import com.MiniProject.hotel.enums.RoomType;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
@Table(name = "room")
public class Room {
    @Id
    @SequenceGenerator(name = "room_id_seq", sequenceName = "seq_id_room", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "room_id_seq")
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(name = "room_type", nullable = false)
    private RoomType roomType;

    @Column(name = "price", nullable = false)
    private BigDecimal price;
    @Column(name = "total_rooms", nullable = false)
    private Integer totalRooms;
    @Column(name = "available_rooms", nullable = false)
    private Integer availableRooms;
    @Column(name = "capacity")
    private Integer capacity;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "is_active", nullable = false)
    private Boolean isActive = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id", referencedColumnName = "id", nullable = false)
    private HotelBranch branch;
}
