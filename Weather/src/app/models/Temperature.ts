import { Imperial } from "./Imperial";
import { Metric } from "./Metric";

export class Temperature {


    Metric: Metric;
    Imperial: Imperial;


  constructor( Metric: Metric,  Imperial: Imperial) {

      this.Metric =Metric;
      this.Imperial =  Imperial
  }



}


