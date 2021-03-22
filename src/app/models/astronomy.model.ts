import { Location } from './location.model';

export class Astronomy {
  constructor() {}

  public sunrise: string;
  public sunset: string;
  public moonrise: string;
  public moonset: string;
  public moon_phase: string;
  public moon_illumination: string;
}

export class AstronomyData {
  public location: Location;
  public astronomy: {
    astro: Astronomy;
  };
}
