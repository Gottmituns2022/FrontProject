import React, { FunctionComponent, useEffect, useRef } from 'react';
import { fetchCurrentWeather } from '../thunks/fetchCurrentWeatherThunk';
import { useCustomDispatch, useCustomSelector } from '../hooks/hooks';
import { currentWeatherSlice } from '../slices/CurrentWeatherSlice';

const ChooseCity:FunctionComponent = () => {
  let {scale, city, currentCity} = useCustomSelector((state) => state.currentWeatherSliceReducer);
  const {updateAxiosCity, cityChange} = currentWeatherSlice.actions;

  const dispatch = useCustomDispatch();
  const handleCityChange = (e:string) => {dispatch(cityChange(e.trim()));};
  const handleAxiosCityUpdate = (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault(); dispatch(updateAxiosCity(city));};

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; return;}
    dispatch(fetchCurrentWeather(currentCity, scale));
    console.log(`useEffect/currentCity currentCity:${currentCity}, scale:${scale}`);
  }, [currentCity]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`Interval - Current city:${currentCity}`);
      dispatch(fetchCurrentWeather(currentCity, scale));
    }, 60000);
    return () => clearInterval(interval);
  }, [currentCity, scale, dispatch]);

  return (
    <div className="ChooseCity">
        <form onSubmit={handleAxiosCityUpdate}>
            <h3>
                <label htmlFor="city">Город</label>
                <input id="city" className="City" type="text" value={city} onChange={(e) => handleCityChange(e.target.value)}></input>
                <button type="submit">Обновить</button>
            </h3>
        </form>
    </div>
  );
}

export default ChooseCity;
