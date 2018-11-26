
import React, { Component } from 'react'
import {
  StatusBar, StyleSheet, View
} from 'react-native'
import { connect } from 'react-redux'
import { actionsType } from 'utils/reduxConstants'
import { AppNavigator } from './AppNavigator'

export interface Props {
  checkAuthen: (...args: any[]) => any
}
class AppConnect extends Component<Props> {
  constructor(props: Props) {
    super(props)
    props.checkAuthen()
  }
  render() {
    return (
      <View style={styles.base}>
        <StatusBar
          barStyle='light-content'
          translucent={true}
          backgroundColor='transparent'
        />
        <View style={styles.base}>
          <AppNavigator />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
})
const mapactionsTypeToProps = (dispatch: any) => ({
  checkAuthen: () => dispatch({ type: actionsType.CHECK_AUTHEN })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(AppConnect)

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})