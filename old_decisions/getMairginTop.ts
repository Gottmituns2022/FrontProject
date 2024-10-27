import { Property } from 'csstype';

function getMarginTop(icon: string): Property.MarginTop<string> {
    if(icon==="d01d" || icon==="d01n" || icon==="d02d" || icon==="d02n" || icon==="d03d" || icon==="d03n"
    || icon==="f01d" || icon==="f01n" || icon==="r01d" || icon==="r01n" || icon==="r02d" || icon==="r02n" 
    || icon==="r03d" || icon==="r03n" || icon==="r04d" || icon==="r04n" || icon==="r05d" || icon==="r05n" 
    || icon==="r06d" || icon==="r06n" || icon==="s01d" || icon==="s01n" || icon==="s02d" || icon==="s02n" 
    || icon==="s03d" || icon==="s03n" || icon==="s04d" || icon==="s04n" || icon==="s05d" || icon==="s05n" 
    || icon==="t01d" || icon==="t01n" || icon==="t02d" || icon==="t02n" || icon==="t03d" || icon==="t03n" 
    || icon==="t04d" || icon==="t04n" || icon==="t05d" || icon==="t05n") return "20px";
    else return "0px";
}

//style={{marginTop:getMarginTop(weatherMinutely.data[0].weather.icon)}}