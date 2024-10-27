import axios from 'axios';
import { WeatherMinutely } from "../types/types";

const API_key = '3ff7993e2dbe4c7c82cda2b210865dda';
const BASE_URL = 'https://api.weatherbit.io/v2.0';


export class CurrentWeatherService{
    static getCurrentWeatherMinutely(city:string, scale:string):Axios.IPromise<Axios.AxiosXHR<WeatherMinutely>>{
        return axios.get<WeatherMinutely>(`${BASE_URL}/current?city=${city}&key=${API_key}&units=${scale}&lang=ru`);
    }
}