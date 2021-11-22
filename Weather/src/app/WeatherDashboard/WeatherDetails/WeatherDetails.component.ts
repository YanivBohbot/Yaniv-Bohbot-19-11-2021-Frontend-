import { Component, OnInit } from '@angular/core';
import { Citie } from 'src/app/models/Citie';
import { CurrentCondition } from 'src/app/models/CurrentCondition';
import { Temperature } from 'src/app/models/Temperature';
import { WeatherService } from 'src/app/services/Weather.service';

@Component({
  selector: 'app-WeatherDetails',
  templateUrl: './WeatherDetails.component.html',
  styleUrls: ['./WeatherDetails.component.css']
})
export class WeatherDetailsComponent implements OnInit {


  data_display!: CurrentCondition;
  data_citie!: string;

  constructor(private weatherservice : WeatherService) { }

  ngOnInit() {

    // the service return all the data of the item from Weatheritem once we click on it
  this.weatherservice.getDataEmitter().subscribe(
    data=>{
      this.data_display = data ;
    }
  )

 // the service return title of the item from Weatheritem on the WeatherList once we click on it
  this.weatherservice.name_citie_clicked().subscribe(
    data=>{
      this.data_citie = data ;
    }
  )
  }

}
