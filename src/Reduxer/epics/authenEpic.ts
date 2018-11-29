

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
        .mergeMap((token: any) => {
          if (token && token.length > 0) {
            console.log('token get: ', token)
            return Observable.concat(
              Observable.of({ type: actionsType.SET_TOKEN, payload: { token } }),
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
    return Observable.concat(
      Observable.of({ type: actionsType.SET_TOKEN, payload: { token: 'token_aodsifjasdf8a9sd8fauds9fa8sd' } }),
      Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Drawer })
    )
  })

  const logout$ = action$.ofType(actionsType.LOGOUT).switchMap((action: any) => {
    return Observable.concat(
      Observable.of({ type: actionsType.SET_TOKEN, payload: { token: null } }),
      Observable.of({ type: actionsType.PUSH, routeName: RouteKey.Login })
    )
  })

  return Observable.merge(
    checkAuthen$,
    login$,
    logout$
  )
}
