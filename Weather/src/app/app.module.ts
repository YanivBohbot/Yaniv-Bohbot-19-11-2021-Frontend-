import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherDashboardComponent } from './WeatherDashboard/WeatherDashboard.component';
import { WeatherService } from './services/Weather.service';
import { FormsModule } from '@angular/forms';
import { WeatherListComponent } from './weatherList/weatherList.component';
import { WeatherItemComponent } from './weatherList/weatherItem/weatherItem.component';
import { WeatherDetailsComponent } from './WeatherDashboard/WeatherDetails/WeatherDetails.component';



@NgModule({
  declarations: [
    AppComponent,
      WeatherDashboardComponent,
      WeatherListComponent,
      WeatherItemComponent,
      WeatherDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
