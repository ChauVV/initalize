
import { RootNavigator } from 'gui/Container/AppNavigator'
import { NavigationActions, StackActions } from 'react-navigation'

const getActiveRoute = (state: any): any => {
  if (state.index !== undefined) {
    return getActiveRoute(state.routes[state.index])
  } else {
    return state
  }
}
export default (state: any, action: any) => {
  switch (action.type) {
    case 'push':
    case 'pop':
    case 'popToTop':
    case 'resetToRoute':
    case 'reset':
    case 'clear':
      const lastRoute = getActiveRoute(state)
      console.log('action: ', state, action, lastRoute, action.routeName === lastRoute.routeName)
      break
    default:
      break
  }
  switch (action.type) {
    case 'push': {
      const lastRoute = getActiveRoute(state)
      if (action.routeName === lastRoute.routeName) {
        return state
      }
      const newState = RootNavigator.router.getStateForAction(NavigationActions.navigate({
        routeName: action.routeName, params: action.params
      }), state)
      return (newState || state)
    }
    case 'pop': {
      const lastRoute = getActiveRoute(state)
      if (lastRoute.routeName === 'Drawer' || lastRoute.routeName === 'Login') {
        return state
      }
      const newState = RootNavigator.router.getStateForAction(NavigationActions.back(), state)
      return (newState || state)
    }
    case 'popToTop': {
      const lastRoute = getActiveRoute(state)
      if (lastRoute.routeName === 'Drawer' || lastRoute.routeName === 'Login') {
        return state
      }
      const newState = RootNavigator.router.getStateForAction(StackActions.popToTop({}), state)
      return (newState || state)
    }
    case 'resetToRoute': {
      const newState = RootNavigator.router.getStateForAction(StackActions.reset({
        index: 0,
        key: action.key,
        actions: [
          NavigationActions.navigate({ routeName: action.routeName, params: action.params })
        ]
      }), state)
      return newState || state
    }
    case 'reset':
      return {
        ...state,
        index: 0,
        routes: [{ key: 'Init', routeName: 'Login' }]
      }
    case 'clear':
      return {}
    default: {
      const newState = RootNavigator.router.getStateForAction(action, state)
      return (newState || state)
    }
  }
}
