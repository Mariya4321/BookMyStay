import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingCreateComponent } from './bookings/booking-create/booking-create.component';
import { BookingHistoryComponent } from './bookings/booking-history/booking-history.component';
import { BookingCancelComponent } from './bookings/booking-cancel/booking-cancel.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowseHotelsComponent } from './browse-hotels/browse-hotels.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CustomerDashboardComponent,
    BookingListComponent,
    BookingCreateComponent,
    BookingHistoryComponent,
    BookingCancelComponent,
    ProfileComponent,
    BrowseHotelsComponent
  ]
})
export class CustomerModule {}
