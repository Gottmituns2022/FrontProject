export type Weather = {
    data: {
      temp:number;
      precip:number;
      weather: {
        description: string;
        icon: string;
      };
  }[];
}

export type WeatherBlock = {
    temp:number;
    precip:number;
    weather: {
      description: string;
      icon: string;
    };
}

export type WeatherMinutely = {
  data: {
    wind_spd:number;
    temp:number;
    pres:number;
    rh:number;
    weather: {
      description: string;
      icon: string;
    };
}[];
}