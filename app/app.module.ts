import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}