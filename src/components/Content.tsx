import { FunctionComponent } from 'react';
import { useCustomSelector } from '../hooks/hooks';
import CurrentDay from './CurrentDay';
import Day from './Day';
import Today from './Today';
  
const Content:FunctionComponent = () =>{
    const {weather, weatherMinutely} = useCustomSelector((state) => state.currentWeatherSliceReducer);
    return(<div className="content">
                <div className="NowBlock FirstMainUnit"><CurrentDay weatherMinutely = {weatherMinutely}/></div>
                <div className="MainUnit TodayBlock"><Today weather = {weather}/></div>
                <div className="MainUnit ThirddayBlock"><Day weather = {weather} NumberOfDay = {1}/></div>
                <div className="MainUnit FourthdayBlock"><Day weather = {weather} NumberOfDay = {2}/></div>
                <div className="MainUnit FifthdayBlock"><Day weather = {weather} NumberOfDay = {3}/></div>
                <div className="MainUnit SixthdayBlock"><Day weather = {weather} NumberOfDay = {4}/></div>
                <div className="MainUnit SeventhdayBlock"><Day weather = {weather} NumberOfDay = {5}/></div>
                <div className="MainUnit EighthdayBlock"><Day weather = {weather} NumberOfDay = {6}/></div>
           </div>
    );
}

export default Content;