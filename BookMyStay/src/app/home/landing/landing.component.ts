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
  states: string[] = ['New York', 'California', 'Illinois', 'Texas', 'Florida', 'Dubai', 'Singapore'];
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'Dubai', 'Singapore'];
  starOptions: number[] = [3, 4, 5, 6, 7];
  preferenceOptions: string[] = ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Parking', 'Spa', 'Business Center', 'Balcony'];

  // Hotels data
  allHotels: Hotel[] = [
    {
      id: 1,
      name: 'Luxury Plaza Hotel',
      state: 'New York',
      city: 'New York',
      stars: 5,
      price: 250,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa'],
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: 'Downtown Business Hotel',
      state: 'Illinois',
      city: 'Chicago',
      stars: 4,
      price: 150,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      amenities: ['Free WiFi', 'Business Center', 'Gym', 'Parking'],
      rating: 4.6,
      reviews: 218
    },
    {
      id: 3,
      name: 'Tropical Paradise Resort',
      state: 'Florida',
      city: 'Miami',
      stars: 5,
      price: 280,
      image: 'https://images.unsplash.com/photo-1561501900-d3fee53d55364e2b5ad0d180e0ae2e25c51eebed?w=400&h=300&fit=crop',
      amenities: ['Pool', 'Beach Access', 'Spa', 'Restaurant', 'Water Sports'],
      rating: 4.9,
      reviews: 456
    },
    {
      id: 4,
      name: 'Modern Stay LA',
      state: 'California',
      city: 'Los Angeles',
      stars: 4,
      price: 180,
      image: 'https://images.unsplash.com/photo-1618191407832-4e10b75ffb51?w=400&h=300&fit=crop',
      amenities: ['Free WiFi', 'Gym', 'Parking', 'Balcony'],
      rating: 4.5,
      reviews: 187
    },
    {
      id: 5,
      name: 'Heritage Palace',
      state: 'Dubai',
      city: 'Dubai',
      stars: 7,
      price: 400,
      image: 'https://images.unsplash.com/photo-1544456723-318236b1c5b4?w=400&h=300&fit=crop',
      amenities: ['Pool', 'Spa', 'Fine Dining', 'Concierge', 'Valet Parking'],
      rating: 4.9,
      reviews: 892
    },
    {
      id: 6,
      name: 'Budget Comfort Inn',
      state: 'Texas',
      city: 'Houston',
      stars: 3,
      price: 80,
      image: 'https://images.unsplash.com/photo-1559599810-46d1c52494ee?w=400&h=300&fit=crop',
      amenities: ['Free WiFi', 'Parking'],
      rating: 4.2,
      reviews: 145
    },
    {
      id: 7,
      name: 'Elegant City Center',
      state: 'New York',
      city: 'New York',
      stars: 5,
      price: 320,
      image: 'https://images.unsplash.com/photo-1520142536410-7705cfdc7fb5?w=400&h=300&fit=crop',
      amenities: ['Restaurant', 'Gym', 'Business Center', 'Spa', 'Balcony'],
      rating: 4.7,
      reviews: 567
    },
    {
      id: 8,
      name: 'Sunset Beach Resort',
      state: 'Florida',
      city: 'Miami',
      stars: 6,
      price: 350,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003cdd72f?w=400&h=300&fit=crop',
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

