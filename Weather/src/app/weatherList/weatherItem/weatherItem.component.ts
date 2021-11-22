import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Citie } from 'src/app/models/Citie';
import { CurrentCondition } from 'src/app/models/CurrentCondition';
import { Cities } from 'src/app/models/interfaces/Cities';
import { CurrentWeather } from 'src/app/models/interfaces/CurrentWeather';
import { WeatherService } from 'src/app/services/Weather.service';


@Component({
  selector: 'app-weatherItem',
  templateUrl: './weatherItem.component.html',
  styleUrls: ['./weatherItem.component.css']
})
export class WeatherItemComponent implements OnInit {



  @Input()  citie :any ;
  @Output() CitieClicked = new EventEmitter<any>();

  constructor( private weatherservice : WeatherService) { }

  ngOnInit() {
  }


// Function get call on the click of the item send citie
// call the service to find the current weather of the specific city
// parameters : citie Citie
// Emitting the instance data of CurrentWEather to WeatherDetails via emitter
// Emittinh the specific key of the citie clicked to WeatherList
  GetCurrentWeather(citie : Cities){




     this.weatherservice.getcurrentweather(citie.Key).subscribe(
      (data :CurrentWeather[]) =>{

        this.CitieClicked.emit(citie.Key);

         const current_weather = new CurrentCondition(
          data[0].LocalObservationDateTime ,
          data[0].EpochTime,
          data[0].WeatherText,
          data[0].WeatherIcon,
          data[0].HasPrecipitation,
          data[0].PrecipitationType,
          data[0].IsDayTime,
          data[0].Temperature,
          data[0].MobileLink,
          data[0].Link)

        this.weatherservice.getDataEmitter().next(current_weather);
      }
    )


  }




}


