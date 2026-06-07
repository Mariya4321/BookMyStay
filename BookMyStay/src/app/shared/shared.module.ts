import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, HeaderComponent, FooterComponent],
  exports: [CommonModule, HeaderComponent, FooterComponent]
})
export class SharedModule {}

