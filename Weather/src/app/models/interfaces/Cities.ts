import { AdministrativeArea } from "./AdministrativeArea";
import { Country } from "./Country";

export interface Cities {

  Version: string,
  Key: string,
  Type: string,
  Rank: number,
  LocalizedName: string,
  Country: Country,
  AdministrativeArea: AdministrativeArea

  }

