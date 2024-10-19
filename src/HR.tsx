import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useCustomDispatch, useCustomSelector } from './hooks';
import { fetchCurrentWeather } from './store/fetchCurrentWeatherThunk';
import { currentWeatherSlice } from './CurrentWeatherSlice';

const HR:FunctionComponent = () =>{
  let {scale, currentCity} = useCustomSelector((state) => state.currentWeatherSliceReducer);
  const { scaleChangeMetric, scaleChangeImperial } = currentWeatherSlice.actions;

  const dispatch = useCustomDispatch();
  const handleActionMetric = () => {dispatch(scaleChangeMetric());};
  const handleActionImperial = () => {dispatch(scaleChangeImperial());};

  const firRen = useRef(2);
  useEffect(()=>{
    if (firRen.current > 0){firRen.current = firRen.current - 1; return;}
    console.log(`Scale - ${scale}`);
    dispatch(fetchCurrentWeather(currentCity, scale));
  },[scale]);

  return (
    <div className="HR">
                <div className="FirstHR">
                    <h1>Прогноз погоды</h1>
                </div>
                <div className="ChooseScale">
                    <h3>Система единиц
                        <input className="FI" id="Celsius" type="radio" value="Celsius" name="scale" onClick={handleActionMetric} defaultChecked/>
                            <label htmlFor="Celsius">Метрическая</label>
                        <input type="radio" id="Fahrenheit" value="Fahrenheit" name="scale" onClick={handleActionImperial}/>
                            <label htmlFor="Fahrenheit">Имперская</label>
                    </h3>
                </div>
      </div>
  );
}

export default HR;
