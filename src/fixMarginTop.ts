import { Weather, WeatherMinutely } from "./store/types";

export const fixMarginTop = (weather:Weather, weatherMinutely:WeatherMinutely) => {
    let list:Array<HTMLElement> = [document.getElementById("-1")!, document.getElementById("0")!, document.getElementById("1")!, document.getElementById("2")!, document.getElementById("3")!, document.getElementById("4")!, document.getElementById("5")!, document.getElementById("6")!].filter((el) => el !== null);;
    for(let i = -1; i <= 6; i ++){
        if(weather.data[0].weather.icon){
            list[i].id = "20";
            console.log(`${i}img - 20`);
        }
    }
}
//==="r01d"