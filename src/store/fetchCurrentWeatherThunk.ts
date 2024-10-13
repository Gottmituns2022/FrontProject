import { CurrentWeatherService } from "../CurrentWeatherService";
import { currentWeatherSlice } from "../CurrentWeatherSlice";
import { WeatherService } from "../WeatherService";
import { AppDispatch } from "./store"

export const fetchCurrentWeather = (payload:string, scale:string) => async (dispatch:AppDispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload, scale);
        const resMinutely = await CurrentWeatherService.getCurrentWeatherMinutely(payload, scale);
        if(res.status === 200){
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccessMinutely(resMinutely));
        }
        else{
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
        }
    } catch(error) {console.log(error)}
    
}