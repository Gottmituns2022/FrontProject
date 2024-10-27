import { useCustomSelector } from "../hooks/hooks";
import { WeatherBlock } from "../types/types";
import moment from 'moment';
import 'moment/locale/ru';

interface Props{
    weather:WeatherBlock;
}

const Today = ({weather}:Props) => {
    let {amountPrecipitationScale} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    return(<>
                <div className="day">
                    <div className="INB">Сегодня</div>
                    <div>{moment().format('D MMM').slice(0,6)}</div>
                </div>
                <div className="icon NoMarginTop">
                    <img src={`${weather.weather.icon}.svg`} alt={weather.weather.description} />
                </div>
                <div className="phw Block">
                    <div className="INB ValBlock">{`${Math.round(weather.temp)}°`}</div>
                    <div id="Osadki">{`Осадки - ${Math.round(weather.precip*10)/10} ${amountPrecipitationScale}`}</div>
                </div>
                <div className="phw annotation">
                    <div className="ValBlock">{weather.weather.description}</div>
                </div>
            </>
    );
}

export default Today;