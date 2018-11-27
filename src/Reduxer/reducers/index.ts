import { combineReducers } from 'redux'
import clientReducer from './clientReducer'
import currencyReducer from './currencyReducer'
import languageReducer from './languageReducer'
import loadingReducer from './loadingReducer'
import loginInfoReducer from './loginInfoReducer'
import placesReducer from './placesReducer'
import routesReducer from './routersReducer'
import userReducer from './userReducer'

export default combineReducers({
  currency: currencyReducer,
  language: languageReducer,
  userState: userReducer,
  places: placesReducer,
  loading: loadingReducer,
  navigate: routesReducer,
  loginInfo: loginInfoReducer,
  clientState: clientReducer
})
