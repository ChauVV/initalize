const SimpleStore = require('react-native-simple-store')
import { KeyStore } from 'utils/globalConstants'
import { actionsType, initState } from 'utils/reduxConstants'


export default (state = initState.authenStateInit, action: any) => {
  switch (action.type) {
    case actionsType.LOGIN_SUCCESS:
      console.log('action.payload.token: ', action.payload)
      SimpleStore.save(KeyStore.AUTHEN_TOKEN, action.payload)
      return action.payload
    case actionsType.AUTHEN_SUCCESS:
      return action.payload
    case actionsType.LOGOUT:
      return initState.authenStateInit
    default:
      return state
  }
}
