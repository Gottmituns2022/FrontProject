import { useCustomSelector } from "../hooks/hooks";
import { WeatherBlock } from "../types/types";
import moment from 'moment';
import 'moment/locale/ru';

interface Props{
    weather:WeatherBlock;
    NumberOfDay:number;
}

const Day = ({weather, NumberOfDay}:Props) => {
    let {amountPrecipitationScale} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    let today = new Date();
    let day = new Date(today); day.setDate(today.getDate() + NumberOfDay);
    return( <>  
                <div className="day">
                    <div className="INB">{moment().add(NumberOfDay, 'day').format('ddd')[0].toUpperCase()}{moment().add(NumberOfDay, 'day').format('ddd')[1]}</div>
                    <div>{moment().add(NumberOfDay, 'day').format('D MMM').slice(0,6)}</div>
                </div>
                <div className="icon">
                    <img src={`${weather.weather.icon}.svg`} alt={weather.weather.description} />
                </div>
                <div className="phw Block">
                    <div className="INB ValBlock">{`${Math.round(weather.temp)}°`}</div>
                    <div>{`${Math.round(weather.precip*10)/10} ${amountPrecipitationScale}`}</div>
                </div>
                <div className="phw annotation">
                    <div className="ValBlock">{weather.weather.description}</div>
                </div>
            </>
    );
}

export default Day;