import { legacy_createStore } from "redux";
import {reducer} from "./reducer"

// export const store = legacy_createStore(reducer);

export const store =createStore(reducer,todo =[])