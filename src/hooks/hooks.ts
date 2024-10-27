import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useCustomDispatch = () => useDispatch<AppDispatch>(); //const dispatchBase =  useDispatch<AppDispatch>(); dispatchBase(consoleTest());
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector; //let {scale} = useSelector((state:RootState) => state.currentWeatherSliceReducer);


