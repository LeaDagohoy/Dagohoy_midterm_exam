import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../servicehome/weather.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService){}

  getWeather(){
    this.weatherData = null;
    this.errorMessage = '';

    this.weatherService.getWeather(this.city).subscribe({
      next: (data: any) => {
        this.weatherData = data;
      },
      error: () => {
        this.errorMessage = 'City Not found or API Error';
      }
    });
  }
}
