import { useCustomSelector } from "../hooks/hooks";
import { Weather } from "../types/types";

interface Props{
    weather:Weather;
    NumberOfDay:number;
}

const Day = ({weather, NumberOfDay}:Props) => {
    let {amountPrecipitationScale} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    let today = new Date();
    let day = new Date(today); day.setDate(today.getDate() + NumberOfDay);
    return( <>  
                <div className="day">
                    <div className="INB">{`${day.toLocaleDateString('ru-RU', { weekday: 'short' })[0].toLocaleUpperCase()}${day.toLocaleDateString('ru-RU', { weekday: 'short' })[1]}`}</div>
                    <div>{`${day.getDate()} ${day.toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                </div>
                <div className="icon">
                    <img src={`${weather.data[NumberOfDay].weather.icon}.svg`} alt={weather.data[NumberOfDay].weather.description} />
                </div>
                <div className="phw Block">
                    <div className="INB ValBlock">{`${Math.round(weather.data[NumberOfDay].temp)}°`}</div>
                    <div>{`${Math.round(weather.data[NumberOfDay].precip*10)/10} ${amountPrecipitationScale}`}</div>
                </div>
                <div className="phw annotation">
                    <div className="ValBlock">{weather.data[NumberOfDay].weather.description}</div>
                </div>
            </>
    );
}

export default Day;