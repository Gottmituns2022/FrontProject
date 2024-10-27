import { useCustomSelector } from "../hooks/hooks";
import { WeatherMinutely } from "../types/types";
import moment from 'moment';

interface Props{
    weatherMinutely:WeatherMinutely
}

const updateTime = () => {
    let timeElement = document.getElementById("CurrentTime");
    if(timeElement) timeElement.textContent = getCurrentTime();
}
setInterval(updateTime, 1000);  

const getCurrentTime = ():string => {
    return moment().format('HH:mm');
}

const CurrentDay = ({weatherMinutely}:Props) => {  
    let {windSpeedScale, pressureScale, pressureN} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    return(<>
                    <div className="day">
                        <div className="INB">Сейчас</div>
                        <div id="CurrentTime">{getCurrentTime()}</div>
                    </div>
                    <div className="icon NoMarginTop">
                        <img src={`${weatherMinutely.data[0].weather.icon}.svg`} alt={`${weatherMinutely.data[0].weather.description}`} />
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
                        <div>{`${Math.round(weatherMinutely.data[0].temp)}°`}</div>
                    </div>
                    <div className="phw I-values">
                        <div className="ValBlock">{`${Math.round(weatherMinutely.data[0].pres * pressureN)} ${pressureScale}`}</div>
                        <div>{weatherMinutely.data[0].rh}%</div>
                        <div>{`${Math.round(weatherMinutely.data[0].wind_spd * 10)/10} ${windSpeedScale}`}</div>
                    </div>
            </>
    );
}

export default CurrentDay;