import { actionsType, initState } from 'utils/reduxConstants'

export default (state = initState.currency, action: any) => {
  switch (action.type) {
    case actionsType.SET_CURRENCY:
      return action.payload
    default:
      return state
  }
}
