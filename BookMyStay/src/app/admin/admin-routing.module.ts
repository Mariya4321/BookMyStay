import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { HotelListComponent } from './hotel-management/hotel-list/hotel-list.component';
import { RoomListComponent } from './room-management/room-list/room-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'hotel-management', component: HotelListComponent },
  { path: 'room-management', component: RoomListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
