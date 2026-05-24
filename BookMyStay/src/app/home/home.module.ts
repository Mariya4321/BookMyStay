import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, LandingComponent]
})
export class HomeModule {}
