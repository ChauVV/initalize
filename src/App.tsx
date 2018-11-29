import React from 'react'

import { Provider } from 'react-redux'
import storeRedux from 'reduxer/store'

import { AppNavigator } from 'gui/Container/AppNavigator'

const App = () => {
  return (
    <Provider store={storeRedux}>
      <AppNavigator />
    </Provider>
  )
}
export default App
