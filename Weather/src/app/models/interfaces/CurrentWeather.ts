import { Temperature } from "../interfaces/Temperature";

export interface CurrentWeather {

  LocalObservationDateTime: string,
  EpochTime: Date,
  WeatherText: string,
  WeatherIcon: number,
  HasPrecipitation: boolean,
  PrecipitationType: null,
  IsDayTime: boolean,
  Temperature: Temperature,
  MobileLink: string,
  Link: string



}
