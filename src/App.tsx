import React from 'react'

import { Provider } from 'react-redux'
import storeRedux from 'reduxer/store'

import AppConnect from 'gui/Container/AppNavigator'

const App = () => {
  return (
    <Provider store={storeRedux}>
      <AppConnect />
    </Provider>
  )
}
export default App
