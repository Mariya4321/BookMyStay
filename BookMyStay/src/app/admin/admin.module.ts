import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { HotelListComponent } from './hotel-management/hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-management/hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './hotel-management/hotel-form/hotel-form.component';
import { HotelDeleteComponent } from './hotel-management/hotel-delete/hotel-delete.component';
import { RoomListComponent } from './room-management/room-list/room-list.component';
import { RoomDetailComponent } from './room-management/room-detail/room-detail.component';
import { RoomFormComponent } from './room-management/room-form/room-form.component';
import { BranchListComponent } from './branch-management/branch-list/branch-list.component';
import { BranchFormComponent } from './branch-management/branch-form/branch-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminDashboardComponent,
    HotelListComponent,
    HotelDetailComponent,
    HotelFormComponent,
    HotelDeleteComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomFormComponent,
    BranchListComponent,
    BranchFormComponent,
    SidebarComponent
  ]
})
export class AdminModule {}
