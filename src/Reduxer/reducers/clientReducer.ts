import { actionsType } from 'utils/reduxConstants'

const clientInitState = {
  clients: [],
  isLoading: false,
  isRefresh: false,
  isLoadmore: false
}
export default (state = clientInitState, action: any) => {
  switch (action.type) {
    case actionsType.FETCH_CLIENT:
      return action.payload
    case actionsType.FETCH_CLIENT_SUCCESS:
      return { ...action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
    case actionsType.UPDATE_CLIENT_SUCCESS:
      return { ...action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
    case actionsType.CANCEL_FETCHING_CLIENT:
      return { ...action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
    default:
      return state
  }
}
