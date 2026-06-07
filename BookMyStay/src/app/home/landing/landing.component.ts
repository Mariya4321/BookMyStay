import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

export interface Hotel {
  id: number;
  name: string;
  state: string;
  city: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  checkIn: string = '';
  checkOut: string = '';
  adults: number = 1;
  children: number = 0;

  // Filter properties
  selectedState: string = '';
  selectedCity: string = '';
  selectedStars: number = 0;
  preferences: string[] = [];
  states: string[] = ['Maharashtra', 'Karnataka', 'Rajasthan', 'Kerala', 'Gujarat', 'Assam', 'Madhya Pradesh', 'Delhi', 'Tamil Nadu', 'Bihar', 'Kashmir'];
  cities: string[] = ['Mumbai', 'Bangalore', 'Jaipur', 'Trivandrum', 'Ahmedabad', 'Guwahati', 'Kochi', 'Indore', 'Delhi', 'Chennai', 'Patna', 'Srinagar'];
  starOptions: number[] = [3, 4, 5, 6, 7];
  preferenceOptions: string[] = ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Parking', 'Spa', 'Business Center', 'Balcony'];

  // Hotels data
  allHotels: Hotel[] = [
    {
      id: 1,
      name: 'Luxury Plaza Hotel',
      state: 'Maharashtra',
      city: 'Mumbai',
      stars: 5,
      price: 250,
      image: 'https://www.dellaresorts.com/new-images/camp-della-exterior-7-new-jan-9.webp',
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa'],
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: 'Downtown Business Hotel',
      state: 'Karnataka',
      city: 'Bangalore',
      stars: 4,
      price: 150,
      image: 'https://images.trvl-media.com/lodging/24000000/23280000/23272000/23271987/3bc45b7a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
      amenities: ['Free WiFi', 'Business Center', 'Gym', 'Parking'],
      rating: 4.6,
      reviews: 218
    },
    {
      id: 3,
      name: 'Tropical Paradise Resort',
      state: 'Tamil Nadu',
      city: 'Chennai',
      stars: 5,
      price: 280,
      image: 'https://www.trulyclassy.com/wp-content/uploads/2023/02/k1.jpg',
      amenities: ['Pool', 'Beach Access', 'Spa', 'Restaurant', 'Water Sports'],
      rating: 4.9,
      reviews: 456
    },
    {
      id: 4,
      name: 'Modern Stay LA',
      state: 'Kashmir',
      city: 'Srinagar',
      stars: 4,
      price: 180,
      image: 'https://images.trvl-media.com/lodging/2000000/1460000/1457900/1457890/61bb88d3.jpg?impolicy=fcrop&w=1200&h=800&quality=medium',
      amenities: ['Free WiFi', 'Gym', 'Parking', 'Balcony'],
      rating: 4.5,
      reviews: 187
    },
    {
      id: 5,
      name: 'Heritage Palace',
      state: 'Rajasthan',
      city: 'Jaipur',
      stars: 7,
      price: 400,
      image: 'https://images.trvl-media.com/lodging/16000000/15690000/15685200/15685196/9b148651.jpg?impolicy=resizecrop&rw=1200&ra=fit',
      amenities: ['Pool', 'Spa', 'Fine Dining', 'Concierge', 'Valet Parking'],
      rating: 4.9,
      reviews: 892
    },
    {
      id: 6,
      name: 'Budget Comfort Inn',
      state: 'Bihar',
      city: 'Patna',
      stars: 3,
      price: 80,
      image: 'https://www.dellaresorts.com/new-images/enclave-ex-new-2-feb-1.webp',
      amenities: ['Free WiFi', 'Parking'],
      rating: 4.2,
      reviews: 145
    },
    {
      id: 7,
      name: 'Elegant City Center',
      state: 'Maharashtra',
      city: 'Mumbai',
      stars: 5,
      price: 320,
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/554411320.jpg?k=094f6903b9a49790464b5244eb71da33076ef1ac1660f5a70e14f8fe1a1cfdd5&o=',
      amenities: ['Restaurant', 'Gym', 'Business Center', 'Spa', 'Balcony'],
      rating: 4.7,
      reviews: 567
    },
    {
      id: 8,
      name: 'Sunset Beach Resort',
      state: 'Tamil Nadu',
      city: 'Chennai',
      stars: 6,
      price: 350,
      image: 'https://images.trvl-media.com/lodging/118000000/117810000/117808800/117808728/a730fb7c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
      amenities: ['Pool', 'Beach Access', 'Restaurant', 'Gym', 'Water Sports'],
      rating: 4.8,
      reviews: 612
    }
  ];

  filteredHotels: Hotel[] = this.allHotels;

  constructor(public router: Router) {}

  get availableCities(): string[] {
    if (!this.selectedState) {
      return this.cities;
    }

    return Array.from(
      new Set(
        this.allHotels
          .filter(hotel => hotel.state === this.selectedState)
          .map(hotel => hotel.city)
      )
    );
  }

  filterHotels() {
    this.filteredHotels = this.allHotels.filter(hotel => {
      // Filter by state
      if (this.selectedState && hotel.state !== this.selectedState) {
        return false;
      }
      // Filter by city
      if (this.selectedCity && hotel.city !== this.selectedCity) {
        return false;
      }
      // Filter by stars
      if (this.selectedStars && hotel.stars < this.selectedStars) {
        return false;
      }
      // Filter by preferences (hotel must have at least one selected preference)
      if (this.preferences.length > 0) {
        const hasPreference = this.preferences.some(pref => hotel.amenities.includes(pref));
        if (!hasPreference) {
          return false;
        }
      }
      return true;
    });
  }

  togglePreference(preference: string) {
    const index = this.preferences.indexOf(preference);
    if (index > -1) {
      this.preferences.splice(index, 1);
    } else {
      this.preferences.push(preference);
    }
    this.filterHotels();
  }

  onStateChange() {
    if (this.selectedCity && !this.availableCities.includes(this.selectedCity)) {
      this.selectedCity = '';
    }
    this.filterHotels();
  }

  onCityChange() {
    this.filterHotels();
  }

  onStarsChange() {
    this.filterHotels();
  }

  onSubmit() {
    console.log({
      checkIn: this.checkIn,
      checkOut: this.checkOut,
      adults: this.adults,
      children: this.children
    });
    // Navigate to browse hotels or search results
    this.router.navigate(['/customer/browse-hotels'], {
      queryParams: {
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        adults: this.adults,
        children: this.children
      }
    });
  }

  viewHotelDetails(hotelId: number) {
    this.router.navigate(['/customer/browse-hotels'], {
      queryParams: { hotelId }
    });
  }
}

