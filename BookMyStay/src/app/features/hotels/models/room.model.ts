export type RoomType = 'SINGLE' | 'DOUBLE' | 'DELUXE' | 'SUITE';

export interface HotelRoom {
  id: number;
  roomType: RoomType;
  price: number;
  totalRooms: number;
  availableRooms: number;
  capacity: number | null;
  imageUrl: string | null;
  isActive: boolean;
  hotelId: number;
}
