import axios from 'axios';
import { Weather } from '../types/types';

const API_key = '3ff7993e2dbe4c7c82cda2b210865dda';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';

export class WeatherService{
    static getCurrentWeather(city:string, scale:string):Axios.IPromise<Axios.AxiosXHR<Weather>>{
        return axios.get<Weather>(`${BASE_URL}/daily?city=${city}&key=${API_key}&units=${scale}&lang=ru&days=7`);
    }
}