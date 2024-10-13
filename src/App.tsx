import Content from "./Content"
import { useCustomSelector } from './hooks';

const App = () =>{
    const {weather, weatherMinutely} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    return(
        <Content weather={weather} weatherMinutely={weatherMinutely}/>
    );
}

export default App;