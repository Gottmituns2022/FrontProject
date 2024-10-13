import axios from 'axios';
import { Weather } from './store/types';

const API_key = '5f4877ef1f1743178e284f1b81c412bc';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';

export class WeatherService{
    static getCurrentWeather(city:string, scale:string):Axios.IPromise<Axios.AxiosXHR<Weather>>{
        return axios.get<Weather>(`${BASE_URL}/daily?city=${city}&key=${API_key}&units=${scale}&lang=ru&days=7`);
    }
}