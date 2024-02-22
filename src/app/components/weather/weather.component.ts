import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  obj: any = {};
  weatherResult: any ;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  searchWeather() {
    console.log("Here weather ", this.obj);
    this.weatherService.searchWeather(this.obj.city).subscribe(
      (response) => {
        console.log("Here weather response", response);
        this.weatherResult = response.result;
      }
    )
  } 
}
