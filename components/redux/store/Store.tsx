import { combineReducers } from "redux";
import {configureStore}  from '@reduxjs/toolkit';
import {counterReducer, TodoReducer} from "../reducer/Reducer";

export const rootreducer = combineReducers({
counterReducer : counterReducer,
TodoReducer : TodoReducer
})




const store = configureStore({
reducer : rootreducer })

export default store