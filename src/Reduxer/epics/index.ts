import { combineEpics } from 'redux-observable'
import placesEpic from './placesEpic'
import usersEpic from './usersEpic'

export default combineEpics(
  placesEpic,
  usersEpic
)
