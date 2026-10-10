import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { HotelService } from '../data-access/hotel.service';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-hotel-search-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hotel-search-page.component.html',
  styleUrl: './hotel-search-page.component.css'
})
export class HotelSearchPageComponent implements OnInit {
  private readonly hotelService = inject(HotelService);
  private readonly destroyRef = inject(DestroyRef);

  readonly hotels = signal<Hotel[]>([]);
  readonly searchTerm = signal('');
  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly filteredHotels = computed(() => {
    const query = this.searchTerm().trim().toLocaleLowerCase();
    if (!query) {
      return this.hotels();
    }

    return this.hotels().filter((hotel) =>
      `${hotel.name} ${hotel.description ?? ''}`.toLocaleLowerCase().includes(query)
    );
  });

  ngOnInit(): void {
    this.loadHotels();
  }

  updateSearchTerm(value: string): void {
    this.searchTerm.set(value);
  }

  loadHotels(): void {
    this.loading.set(true);
    this.errorMessage.set(null);

    this.hotelService.getHotels()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (hotels) => {
          this.hotels.set(hotels);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set('Hotels could not be loaded. Please try again.');
          this.loading.set(false);
        }
      });
  }
}
