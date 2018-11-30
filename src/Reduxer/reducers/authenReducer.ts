const SimpleStore = require('react-native-simple-store')
import { KeyStore } from 'utils/globalConstants'
import { actionsType } from 'utils/reduxConstants'

const authenStateInit = {
  id: '',
  userName: '',
  passWord: '',
  token: '',
  displayName: '',
  Avatar: null
}
export default (state = authenStateInit, action: any) => {
  switch (action.type) {
    case actionsType.LOGIN_SUCCESS:
      console.log('action.payload.token: ', action.payload)
      SimpleStore.save(KeyStore.AUTHEN_TOKEN, action.payload)
      return action.payload
    case actionsType.AUTHEN_SUCCESS:
      return action.payload
    default:
      return state
  }
}
