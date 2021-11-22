import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cities } from '../models/interfaces/Cities';
import { WeatherService } from '../services/Weather.service';


@Component({
  selector: 'app-weatherList',
  templateUrl: './weatherList.component.html',
  styleUrls: ['./weatherList.component.css']
})
export class WeatherListComponent implements OnInit {

  @Input()  Listcities :Cities[]= [];
  @Output()  CitieClickedtoDashboard = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  public displaythisCity(citie_clicked: any):void {

    this.CitieClickedtoDashboard.emit(citie_clicked);

}


}
