import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: any;
 location : any;

  constructor(private weathers:WeatherService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.location) {
      console.log('hi weather component');
      console.log(this.location);
      //this.weatherData = 
      this.weathers.getWeatherDetails(this.location).subscribe(
        (data) => this.weatherData =data);
      console.log('hi weather service return');
      console.log( this.weatherData );

    }
  }
  
  

  

}
