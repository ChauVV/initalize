

import { Action, MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
const SimpleStore = require('react-native-simple-store')
import ServerAPI from 'reduxer/api'
import { Observable } from 'rxjs'
import { KeyStore, RouteKey } from 'utils/globalConstants'
import { actionsType, statusCode, strMessageTimeout, TIME_OUT, ttError } from 'utils/reduxConstants'

export default (action$: ActionsObservable<Action>, store: MiddlewareAPI<{}>, dependencies: any) => {
  const checkAuthen$ = action$.ofType(actionsType.CHECK_AUTHEN).switchMap((action: any) => {
    return Observable.concat(
      Observable.fromPromise(SimpleStore.get(KeyStore.AUTHEN_TOKEN))
        .mergeMap((authenState: any) => {
          console.log('token get: ', authenState)
          if (authenState && authenState.token.length > 0) {
            return Observable.concat(
              Observable.of({ type: actionsType.AUTHEN_SUCCESS, payload: authenState }),
              Observable.of({ type: actionsType.RESET_TO_ROUTE, routeName: RouteKey.Drawer })
            )
          } else {
            return Observable.concat(
              Observable.of({ type: actionsType.RESET_TO_ROUTE, routeName: RouteKey.Login })
            )
          }
        })
    )
  })

  const login$ = action$.ofType(actionsType.LOGIN).switchMap((action: any) => {
    return Observable.fromPromise(ServerAPI.login())
      .takeUntil(Observable.timer(TIME_OUT))
      .takeUntil(action$.ofType(actionsType.CANCEL_LOGIN))
      .mergeMap((response: any) => {
        if (response) {
          console.log('login response: ', response)
          if (response.status === statusCode.CODE_200) {
            return Observable.concat(
              Observable.of({ type: actionsType.LOGIN_SUCCESS, payload: response.data[0] }),
              Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Drawer })
            )
          } else {
            return Observable.concat(
              Observable.of({ type: actionsType.LOGIN_FAIL })
            )
          }
        } else {
          ServerAPI.showAlert(ttError, strMessageTimeout)
          return Observable.concat(
            Observable.of({ type: actionsType.LOGIN_FAIL })
          )
        }
      })
  })

  const logout$ = action$.ofType(actionsType.LOGOUT).switchMap((action: any) => {
    return Observable.concat(
      Observable.of({ type: actionsType.SET_TOKEN, payload: { token: null } }), // Call api logout if have
      Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Login })
    )
  })

  return Observable.merge(
    checkAuthen$,
    login$,
    logout$
  )
}
