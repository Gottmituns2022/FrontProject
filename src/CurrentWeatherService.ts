import axios from 'axios';
import { WeatherMinutely } from "./store/types";

const API_key = '50bba416fc084de8bd101571b9063ba1';
const BASE_URL = 'https://api.weatherbit.io/v2.0';


export class CurrentWeatherService{
    static getCurrentWeatherMinutely(city:string, scale:string):Axios.IPromise<Axios.AxiosXHR<WeatherMinutely>>{
        return axios.get<WeatherMinutely>(`${BASE_URL}/current?city=${city}&key=${API_key}&units=${scale}&lang=ru`);
    }
}

//vchur
//50bba416fc084de8bd101571b9063ba1