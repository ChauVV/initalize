import { combineEpics } from 'redux-observable'
import clientEpic from './clientEpic'
import placesEpic from './placesEpic'
import usersEpic from './usersEpic'

export default combineEpics(
  placesEpic,
  usersEpic,
  clientEpic
)
