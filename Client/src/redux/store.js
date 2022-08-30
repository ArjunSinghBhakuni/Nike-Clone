import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer} from "./AppReducer/reducer";
// import {reducer as AppReducer} from './AppReducer/reducer'

const rootReducer =  combineReducers({AppReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}