import React from 'react';
import { Weather, WeatherMinutely } from './store/types';
import { useCustomSelector } from './hooks';
import { Property } from 'csstype';

interface Props {
    weather:Weather;
    weatherMinutely:WeatherMinutely;
}

const getCurrentTime = ():string => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

const updateTime = () => {
    let timeElement = document.getElementById("1099");
    if(timeElement) timeElement.textContent = getCurrentTime();
}
setInterval(updateTime, 10);

function getMarginTop(icon: string): Property.MarginTop<string> {
    if(icon==="d01d" || icon==="d01n" || icon==="d02d" || icon==="d02n" || icon==="d03d" || icon==="d03n"
    || icon==="f01d" || icon==="f01n" || icon==="r01d" || icon==="r01n" || icon==="r02d" || icon==="r02n" 
    || icon==="r03d" || icon==="r03n" || icon==="r04d" || icon==="r04n" || icon==="r05d" || icon==="r05n" 
    || icon==="r06d" || icon==="r06n" || icon==="s01d" || icon==="s01n" || icon==="s02d" || icon==="s02n" 
    || icon==="s03d" || icon==="s03n" || icon==="s04d" || icon==="s04n" || icon==="s05d" || icon==="s05n" 
    || icon==="t01d" || icon==="t01n" || icon==="t02d" || icon==="t02n" || icon==="t03d" || icon==="t03n" 
    || icon==="t04d" || icon==="t04n" || icon==="t05d" || icon==="t05n" || icon==="" || icon==="") return "20px";
    else return "0px";
}

let today = new Date();
let day1 = new Date(today); day1.setDate(today.getDate() + 1);
let day2 = new Date(today); day2.setDate(today.getDate() + 2);
let day3 = new Date(today); day3.setDate(today.getDate() + 3);
let day4 = new Date(today); day4.setDate(today.getDate() + 4);
let day5 = new Date(today); day5.setDate(today.getDate() + 5);
let day6 = new Date(today); day6.setDate(today.getDate() + 6);

const Content = ({weather, weatherMinutely}: Props) => {
    let {windSpeedScale, amountPrecipitationScale, pressureScale, pressureN} = useCustomSelector((state) => state.currentWeatherSliceReducer);

    return (
            <div className="content">
                <div className="NowBlock FirstMainUnit">
                    <div className="day">
                        <div className="INB">Сейчас</div>
                        <div id="1099">{getCurrentTime()}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weatherMinutely.data[0].weather.icon}.svg`} style={{marginTop:getMarginTop(weatherMinutely.data[0].weather.icon)}} alt={`${weather.data[0].weather.description}`} />
                    </div>
                    <div className="phw Block">
                        <div className="ValBlock">Давление</div>
                        <div>Влажность</div>
                        <div>Ветер</div>
                    </div>
                    <div className="phw annotation firstAnnotation">
                        <div className="ValBlock">{weatherMinutely.data[0].weather.description}</div>
                    </div>
                    <div className="tempnow">
                        <div>{`${Math.round(weather.data[0].temp)}°`}</div>
                    </div>
                    <div className="phw I-values">
                        <div className="ValBlock">{`${Math.round(weatherMinutely.data[0].pres * pressureN)} ${pressureScale}`}</div>
                        <div>{weatherMinutely.data[0].rh}%</div>
                        <div>{`${Math.round(weatherMinutely.data[0].wind_spd * 10)/10} ${windSpeedScale}`}</div>
                    </div>
                </div>
                <div className="MainUnit TodayBlock">
                    <div className="day">
                        <div className="INB">Сегодня</div>
                        <div>{`${new Date().getDate()} ${new Date().toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weather.data[0].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[0].weather.icon)}} alt={weather.data[0].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[0].temp)}°`}</div>
                        <div id="Osadki">{`Осадки - ${Math.round(weather.data[0].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[0].weather.description}</div>
                    </div>
                </div>
                <div className="MainUnit ThirddayBlock">
                    <div className="day">
                        <div className="INB">{`${day1.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day1.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day1.getDate()} ${day1.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon">
                        <img src={`${weather.data[1].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[1].weather.icon)}} alt={weather.data[1].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[1].temp)}°`}</div>
                        <div>{`${Math.round(weather.data[1].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[1].weather.description}</div>
                    </div>
                </div>
                <div className="MainUnit FourthdayBlock">
                    <div className="day">
                        <div className="INB">{`${day2.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day2.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day2.getDate()} ${day2.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weather.data[2].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[2].weather.icon)}} alt={weather.data[2].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[2].temp)}°`}</div>
                        <div>{`${Math.round(weather.data[2].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[2].weather.description}</div>
                    </div>
                </div>
                <div className="MainUnit FifthdayBlock">
                    <div className="day">
                        <div className="INB">{`${day3.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day3.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day3.getDate()} ${day3.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weather.data[3].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[3].weather.icon)}} alt={weather.data[3].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[3].temp)}°`}</div>
                        <div>{`${Math.round(weather.data[3].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[3].weather.description}</div>
                    </div>
                </div>
                <div className="MainUnit SixthdayBlock">
                    <div className="day">
                        <div className="INB">{`${day4.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day4.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day4.getDate()} ${day4.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon">
                        <img src={`${weather.data[4].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[4].weather.icon)}} alt={weather.data[4].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[4].temp)}°`}</div>
                        <div>{`${Math.round(weather.data[4].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[4].weather.description}</div>
                    </div>
                </div>
                <div className="MainUnit SeventhdayBlock">
                    <div className="day">
                        <div className="INB">{`${day5.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day5.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day5.getDate()} ${day5.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weather.data[5].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[5].weather.icon)}} alt={weather.data[5].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[5].temp)}°`}</div>
                        <div>{`${Math.round(weather.data[5].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[5].weather.description}</div>
                    </div>
                </div>
                <div className="MainUnit EighthdayBlock">
                    <div className="day">
                        <div className="INB">{`${day6.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day6.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day6.getDate()} ${day6.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weather.data[6].weather.icon}.svg`} style={{marginTop:getMarginTop(weather.data[6].weather.icon)}} alt={weather.data[6].weather.description} />
                    </div>
                    <div className="phw Block">
                        <div className="INB ValBlock">{`${Math.round(weather.data[6].temp)}°`}</div>
                        <div>{`${Math.round(weather.data[6].precip*10)/10} ${amountPrecipitationScale}`}</div>
                    </div>
                    <div className="phw annotation">
                        <div className="ValBlock">{weather.data[6].weather.description}</div>
                    </div>
                </div>
            </div>
  );
}

export default Content;
