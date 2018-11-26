import { actionsType } from 'utils/reduxConstants'

const userInitState = {
  users: [],
  isLoading: false,
  isRefresh: false,
  isLoadmore: false
}
export default (state = userInitState, action: any) => {
  switch (action.type) {
    case actionsType.FETCH_USER:
      return action.payload
    case actionsType.FETCH_USER_SUCCESS:
      return { ...action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
    case actionsType.UPDATE_USER_SUCCESS:
      return { ...action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
    case actionsType.CANCEL_FETCHING_USER:
      return { ...action.payload, isLoading: false, isRefresh: false, isLoadmore: false }
    default:
      return state
  }
}
