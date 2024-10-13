import axios from 'axios';
import { WeatherMinutely } from "./store/types";

const API_key = '5f4877ef1f1743178e284f1b81c412bc';
const BASE_URL = 'https://api.weatherbit.io/v2.0';


export class CurrentWeatherService{
    static getCurrentWeatherMinutely(city:string, scale:string):Axios.IPromise<Axios.AxiosXHR<WeatherMinutely>>{
        return axios.get<WeatherMinutely>(`${BASE_URL}/current?city=${city}&key=${API_key}&units=${scale}&lang=ru`);
    }
}