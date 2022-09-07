import { TAppDispatch, TRootState } from "../store/store";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";


export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;