
import { Action, MiddlewareAPI } from 'redux'
import { ActionsObservable } from 'redux-observable'
import ServerAPI from 'reduxer/api'
import { Observable } from 'rxjs'
import { actionsType, statusCode, strMessageTimeout, TIME_OUT, ttError } from 'utils/reduxConstants'

export default (action$: ActionsObservable<Action>, store: MiddlewareAPI<{}>, dependencies: any) => {


  const fetchClient$ = action$.ofType(actionsType.FETCH_CLIENT).switchMap((action: any) => {
    console.log('action FETCH_CLIENT: ', action)
    return Observable.concat(
      Observable.fromPromise(ServerAPI.getClient())
        .takeUntil(Observable.timer(TIME_OUT))
        .takeUntil(action$.ofType(actionsType.CANCEL_FETCHING_CLIENT))
        .mergeMap((response) => {
          if (response) {
            if (response.status === statusCode.CODE_200) {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_CLIENT_SUCCESS, payload: { clients: response.data } }),
                // Observable.of({ type: actionsType.FETCH_PLACES }) // Call next action if have
              )
            } else {
              return Observable.concat(
                Observable.of({ type: actionsType.FETCH_CLIENT_FAIL })
              )
            }
          } else {
            ServerAPI.showAlert(ttError, strMessageTimeout)
            return Observable.concat(
              Observable.of({ type: actionsType.FETCH_CLIENT_FAIL })
            )
          }
        })
    )
  })

  return Observable.merge(
    fetchClient$
  )
}
