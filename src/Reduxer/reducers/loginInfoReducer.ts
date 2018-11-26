const SimpleStore = require('react-native-simple-store')
import { KeyStore } from 'utils/globalConstants'
import { actionsType } from 'utils/reduxConstants'

const loginInFoInitState = {
  token: null
}
export default (state = loginInFoInitState, action: any) => {
  switch (action.type) {
    case actionsType.SET_TOKEN:
      console.log('action.payload.token: ', action.payload.token)
      SimpleStore.save(KeyStore.AUTHEN_TOKEN, action.payload.token)
      return action.payload
    default:
      return state
  }
}
