import React from 'react'

import { Provider } from 'react-redux'
import storeRedux from 'reduxer/store'

import AppConnect from 'gui/Container/AppNavigator'
import { AppNavigator } from 'gui/Container/AppNavigator/AppNavigator'

const App = () => {
  return (
    <Provider store={storeRedux}>
      {/* <AppConnect /> */}
      <AppNavigator />
    </Provider>
  )
}
export default App
