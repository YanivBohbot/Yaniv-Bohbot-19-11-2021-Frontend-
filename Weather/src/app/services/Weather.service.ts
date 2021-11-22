import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Cities } from '../models/interfaces/Cities';
import { CurrentWeather } from '../models/interfaces/CurrentWeather';
import { CurrentCondition } from '../models/CurrentCondition';
// import { data_tel } from '../data';
import { Router } from '@angular/router';


@Injectable()
export class WeatherService {


  Base_URL :string;
  Listcities :any[]= [];


  private emitter_citieclicked = new Subject<CurrentCondition>();
  private name_citieclicked = new Subject<string>();

constructor(private _http: HttpClient, private router:Router) {
  this.Base_URL = environment.Base_URL;


 }

// function to return the names of city to display the autocomplete results with query params
// parameters: name_city :string
// return an array of result with format of Cities[]
getLocationAutocomplete(name_city : string)  :Promise<Cities[]> {

  let params = new HttpParams();
  params = params.set('city_name', name_city);



   return this._http.get<Cities[]>(this.Base_URL + "/Search",{params: params}).toPromise()
}


// function to get the current weather of the city selected and display the details on dashboard
// parameters: location_id :string
// return an array of result with format of CurrentWeather[]
getcurrentweather(location_id: string) :Observable<CurrentWeather[]>{


  return this._http.get<CurrentWeather[]>(this.Base_URL + `/GetCurrentWeather/${location_id}`);
}



displayCurrentDetailsWeather(citie_clicked: string){

console.log("service => " , citie_clicked);



}

// return emitter to emit the id of the city clicked from the weatherItem to the dashboard
// return emitter_citieclicked :Subject
getDataEmitter(){

  return this.emitter_citieclicked;
}



// return emitter to emit the name of the city clicked from the weatherItem to the dashboard
// return name_citieclicked :Subject
name_citie_clicked(){

  return this.name_citieclicked;
}

}



