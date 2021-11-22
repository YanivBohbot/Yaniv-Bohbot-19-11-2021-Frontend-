import { Temperature } from "./Temperature";

export class CurrentCondition {

  LocalObservationDateTime: string;
  EpochTime: Date;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: null;
  IsDayTime: boolean;
  Temperature: Temperature;
  MobileLink: string;
  Link: string


/**
 *
 */
constructor(
    LocalObservationDateTime: string,
    EpochTime: Date,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: null,
    IsDayTime: boolean,
    Temperature: Temperature,
    MobileLink: string,
    Link: string) {


    this.LocalObservationDateTime = LocalObservationDateTime;
    this.EpochTime =  EpochTime;
    this.WeatherText =  WeatherText;
    this.WeatherIcon =  WeatherIcon;
    this.HasPrecipitation =  HasPrecipitation;
    this.PrecipitationType =  PrecipitationType;
    this.IsDayTime =  IsDayTime;
    this.Temperature =  Temperature;
    this.MobileLink = MobileLink;
    this.Link =  Link

}
}


