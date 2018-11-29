import { middlewareNav } from 'gui/Container/AppNavigator'
import { applyMiddleware, compose, createStore } from 'redux'
import loggerMiddleware from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import epics from 'reduxer/epics'
import reducers from 'reduxer/reducers'

// Create middlewares
const epicMiddleware = createEpicMiddleware(epics)

const middlewares = [
  epicMiddleware,
  middlewareNav
]
declare var process: any
if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware)
}

// create store
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))

export default store
