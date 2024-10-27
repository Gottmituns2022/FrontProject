/*import React from 'react';
import { Weather, WeatherMinutely } from '../types/types';

interface Props {
    weather:Weather;
    weatherMinutely:WeatherMinutely;
}

let today = new Date();
let day1 = new Date(today); day1.setDate(today.getDate() + 1);
let day2 = new Date(today); day2.setDate(today.getDate() + 2);
let day3 = new Date(today); day3.setDate(today.getDate() + 3);
let day4 = new Date(today); day4.setDate(today.getDate() + 4);
let day5 = new Date(today); day5.setDate(today.getDate() + 5);
let day6 = new Date(today); day6.setDate(today.getDate() + 6);

const Content = ({weather, weatherMinutely}: Props) => {
    return (
            <div className="content">
                
                
                <div className="MainUnit FourthdayBlock">
                    <div className="day">
                        <div className="INB">{`${day2.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day2.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                        <div>{`${day2.getDate()} ${day2.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weather.data[2].weather.icon}.svg`} alt={weather.data[2].weather.description} />
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
                        <img src={`${weather.data[3].weather.icon}.svg`} alt={weather.data[3].weather.description} />
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
                        <img src={`${weather.data[4].weather.icon}.svg`} alt={weather.data[4].weather.description} />
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
                        <img src={`${weather.data[5].weather.icon}.svg`} alt={weather.data[5].weather.description} />
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
                        <img src={`${weather.data[6].weather.icon}.svg`} alt={weather.data[6].weather.description} />
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

export default Content;*/
