export interface WeatherAlert {
    id?: number; //autogenerated on server
    weatherAlertTypeId?: number; //id from weather alert types
    city?: string; //name of the city
    latitude?: string; //city latitude
    longitude?: string; //city longitude
    description?: string; //description of weather alert
    reporterName?: string; //name of the person who reported weather alert
    reportDate?: string; //autogenerated on server
}

export class WeatherAlert  {
  constructor(
    public id?: number,
    public weatherAlertTypeId?: number,
    public city?: string,
    public latitude?: string,
    public longitude?: string,
    public description?: string,
    public reporterName?: string,
    public reportDate?: string
  ) {}
}
