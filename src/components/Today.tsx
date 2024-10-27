import { useCustomSelector } from "../hooks/hooks";
import { Weather } from "../types/types";

interface Props{
    weather:Weather;
}

const Today = ({weather}:Props) => {
    let {amountPrecipitationScale} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    return(<>
                <div className="day">
                    <div className="INB">Сегодня</div>
                    <div>{`${new Date().getDate()} ${new Date().toLocaleDateString('ru-RU', { month: 'short' }).slice(0,3)}`}</div>
                </div>
                <div className="icon NoMarginTop">
                    <img src={`${weather.data[0].weather.icon}.svg`} alt={weather.data[0].weather.description} />
                </div>
                <div className="phw Block">
                    <div className="INB ValBlock">{`${Math.round(weather.data[0].temp)}°`}</div>
                    <div id="Osadki">{`Осадки - ${Math.round(weather.data[0].precip*10)/10} ${amountPrecipitationScale}`}</div>
                </div>
                <div className="phw annotation">
                    <div className="ValBlock">{weather.data[0].weather.description}</div>
                </div>
            </>
    );
}

export default Today;