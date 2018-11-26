
import Images from 'assets/Images'
import React, { Component } from 'react'
import {
  Image, StyleSheet, View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'

import { COLORS, height, width } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

export interface Props {
  checkAuthen: () => {}
}
class SplashScreenRN extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide()
    setTimeout(
      () =>
        this.props.checkAuthen()
      , 1000
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={Images.icWindyWhite}
          resizeMode='center'
        />
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
})
const mapactionsTypeToProps = (dispatch: any) => ({
  checkAuthen: () => dispatch({ type: actionsType.CHECK_AUTHEN })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(SplashScreenRN)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    height: height(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  img: {
    alignSelf: 'center',
    width: 240,
    height: 128
  }
})
