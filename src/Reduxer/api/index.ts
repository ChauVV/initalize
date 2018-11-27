import { Alert } from 'react-native'
import { get } from 'reduxer/api/baseApi'
import { BaseURL } from 'utils/globalConstants'

export default class ServerApi {
  /** ------------------------------------------*
  * Group Code: User
  * ------------------------------------------- */
  static getUsers = () => {
    const url = BaseURL + `/clients`
    const header = {}
    return get(url, header)
  }
  /** ------------------------------------------*
  * Group Code: Client
  * ------------------------------------------- */
  static getClient = () => {
    const url = BaseURL + `/clients`
    const header = {}
    return get(url, header)
  }
  /** ------------------------------------------*
  * Group Code: places
  * ------------------------------------------- */
  static getPlaces = async () => {
    const url = BaseURL + `/places`
    const header = {}
    return get(url, header)
  }
  /**
  * showAlert
  */
  static showAlert = async (title = '', message = '') => {
    setTimeout(() => Alert.alert(title, message), 0)
  }
}
