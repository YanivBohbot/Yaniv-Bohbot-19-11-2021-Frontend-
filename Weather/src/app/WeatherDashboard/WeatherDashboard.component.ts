import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cities } from '../models/interfaces/Cities';
import { WeatherService } from '../services/Weather.service';




@Component({
  selector: 'app-WeatherDashboard',
  templateUrl: './WeatherDashboard.component.html',
  styleUrls: ['./WeatherDashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {



  private city_LocalizedName : string ="" ;

  Listcities :Cities[]=[];
  condition:boolean =false ;
  // data : any[] =[];

  constructor( private weatherservice : WeatherService) { }

  ngOnInit() {}


  onSubmit(value:any){

   // once submit the data we receive from the service data from api call
  this.weatherservice.getLocationAutocomplete(value.city).then(
      (data:Cities[]) => {

        if (data.length==0) {
          // alert.("the city doesnt exist , type again")
          console.log("nothing");
      }
        this.Listcities = data;
      }) ;
  }


  //Function to emit the Title of the city to WeatherDetails
  // Get params ID from output of WeatherList
  //paramaters : citie_clicked
  // Send with subject the name of city to WeatherDetails
    public Emit_City_ID (citie_clicked: any):void {

      for (let citie of this.Listcities) {

        if(citie['Key'] == citie_clicked){

          this.city_LocalizedName = citie['LocalizedName']

          this.weatherservice.name_citie_clicked().next(this.city_LocalizedName);
        }

      }


  }



}
