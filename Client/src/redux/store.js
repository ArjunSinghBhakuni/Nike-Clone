import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer} from "./AppReducer/reducer";
  import {reducer as AuthReducer} from './AuthReducer/reducer'

  import {homeReducer} from './home/reducer'

const rootReducer =  combineReducers({AppReducer,AuthReducer,homeReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}