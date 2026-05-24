import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { HotelListComponent } from './hotel-management/hotel-list/hotel-list.component';
import { RoomListComponent } from './room-management/room-list/room-list.component';
import { BranchListComponent } from './branch-management/branch-list/branch-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'hotel-management', component: HotelListComponent },
  { path: 'room-management', component: RoomListComponent },
  { path: 'branch-management', component: BranchListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
