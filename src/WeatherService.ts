import axios from 'axios';
import { Weather } from './store/types';

const API_key = '50bba416fc084de8bd101571b9063ba1';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';

export class WeatherService{
    static getCurrentWeather(city:string, scale:string):Axios.IPromise<Axios.AxiosXHR<Weather>>{
        return axios.get<Weather>(`${BASE_URL}/daily?city=${city}&key=${API_key}&units=${scale}&lang=ru&days=7`);
    }
}

//vchur
//50bba416fc084de8bd101571b9063ba1
//6b4778e8b9c24849a318c5100dcadd2e