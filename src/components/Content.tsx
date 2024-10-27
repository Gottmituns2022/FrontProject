import { FunctionComponent } from 'react';
import { useCustomSelector } from '../hooks/hooks';
import CurrentDay from './CurrentDay';
import Day from './Day';
import Today from './Today';
  
const Content:FunctionComponent = () =>{  
    const {weather, weatherMinutely} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    return(<div className="content">
                <div className="NowBlock FirstMainUnit"><CurrentDay weatherMinutely = {weatherMinutely}/></div>
                <div className="MainUnit TodayBlock"><Today weather = {weather.data[0]}/></div>
                <div className="MainUnit"><Day weather = {weather.data[1]} NumberOfDay = {1}/></div>
                <div className="MainUnit"><Day weather = {weather.data[2]} NumberOfDay = {2}/></div>
                <div className="MainUnit"><Day weather = {weather.data[3]} NumberOfDay = {3}/></div>
                <div className="MainUnit"><Day weather = {weather.data[4]} NumberOfDay = {4}/></div>
                <div className="MainUnit"><Day weather = {weather.data[5]} NumberOfDay = {5}/></div>
                <div className="MainUnit"><Day weather = {weather.data[6]} NumberOfDay = {6}/></div>
           </div>
    );
}

export default Content;