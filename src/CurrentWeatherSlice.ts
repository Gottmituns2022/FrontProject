import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather, WeatherMinutely } from "./store/types";

type CurrentWeather = {
    weather:Weather;
    weatherMinutely:WeatherMinutely;
    isLoading:boolean;
    scale:string;
    response:TypeResponse;
    city:string;
    windSpeedScale:string;
    amountPrecipitationScale:string;
    pressureScale:string;
    pressureN:number;
    currentCity:string;
}

type TypeResponse = {
    status:number;
    message:string;
}

const initialState:CurrentWeather = {
    weather:{
        data: [{
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            },
            {
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            },
            {
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            },
            {
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            },
            {
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            },
            {
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            },
            {
                temp:0,
                precip:0,
                weather:{ description:"No data", icon:"No data"}
            }]
    },
    weatherMinutely:{
            data:[{
                wind_spd:0,
                temp:0,
                pres:0,
                rh:0,
                weather: {
                  description:"No data",
                  icon:"No data"
                }
            }]
    },
    isLoading:false,
    scale:'M',
    response:{
        status:0,
        message:''
    },
    city:"Hamburg",
    windSpeedScale:"м/с",
    amountPrecipitationScale:"мм.",
    pressureScale:"мм.рт.ст.",
    pressureN:0.75006156,
    currentCity:"Hamburg"
};

export const currentWeatherSlice = createSlice({
    name:'current_weather',
    initialState,
    reducers:{
        fetchCurrentWeather(state){
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action:PayloadAction<Axios.AxiosXHR<Weather>>){
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherSuccessMinutely(state, action:PayloadAction<Axios.AxiosXHR<WeatherMinutely>>){
            state.weatherMinutely = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchCurrentWeatherError(state, action:PayloadAction<Axios.AxiosXHR<Weather>>){
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        scaleChangeMetric(state){
            state.scale = 'M'; 
            state.windSpeedScale = "м/с";
            state.amountPrecipitationScale = "мм.";
            state.pressureScale = "мм.рт.ст.";
            state.pressureN = 0.75006156;
        },
        scaleChangeImperial(state){
            state.scale = 'I'; 
            state.windSpeedScale = "mph";
            state.amountPrecipitationScale = "in.";
            state.pressureScale = "psi";
            state.pressureN = 1;
        },
        cityChange(state, action:PayloadAction<string>){state.city = action.payload;},
        updateAxiosCity(state, action:PayloadAction<string>){state.currentCity = action.payload;},
    }
});

export default currentWeatherSlice.reducer;