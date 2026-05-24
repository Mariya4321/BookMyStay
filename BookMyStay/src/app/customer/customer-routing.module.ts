import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';
import { BookingCreateComponent } from './bookings/booking-create/booking-create.component';
import { BookingHistoryComponent } from './bookings/booking-history/booking-history.component';
import { BookingCancelComponent } from './bookings/booking-cancel/booking-cancel.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowseHotelsComponent } from './browse-hotels/browse-hotels.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: CustomerDashboardComponent },
  { path: 'bookings', component: BookingListComponent },
  { path: 'bookings/create', component: BookingCreateComponent },
  { path: 'bookings/history', component: BookingHistoryComponent },
  { path: 'bookings/cancel', component: BookingCancelComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'browse-hotels', component: BrowseHotelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
