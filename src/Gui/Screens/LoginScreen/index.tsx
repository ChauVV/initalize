
import BaseView from 'gui/Container/BaseView'
import React, { Component } from 'react'
import {
  BackHandler, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'
import { RouteKey } from 'utils/globalConstants'
import { COLORS, height, ISIOS, width } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

export interface Props {
  login: () => {}
  navigate: any,
  close: any
}

class LoginScreen extends Component<Props> {
  constructor(props: Props) {
    super(props)
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentDidMount() {
    if (ISIOS) {
      SplashScreen.hide()
    } else {
      setTimeout(() => SplashScreen.hide(), 100)
    }
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  getActiveScreen = (navigationState: any): any => {
    if (navigationState.index !== undefined) {
      return this.getActiveScreen(navigationState.routes[navigationState.index])
    } else {
      return navigationState
    }
  }
  onBackPress = () => {
    const { navigate } = this.props

    const activeRoute = this.getActiveScreen(navigate)
    if (activeRoute.routeName === RouteKey.HomeScreen || activeRoute.routeName === RouteKey.Login) {
      BackHandler.exitApp()
      return true
    } else {
      this.props.close()
      return true
    }
  }
  render() {
    const { login } = this.props

    return (
      <BaseView >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => login()}
            style={styles.btnLogin}>
            <Text style={styles.txtBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </BaseView>
    )
  }
}

const mapStateToProps = (state: any) => ({
  navigate: state.navigate
})
const mapactionsTypeToProps = (dispatch: any) => ({
  login: () => dispatch({ type: actionsType.LOGIN }),
  close: () => dispatch({ type: 'pop' })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(LoginScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    height: height(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f2f1'
  },
  btnLogin: {
    width: width(50),
    height: height(10),
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBtn: {
    color: COLORS.TEXT
  },
  txtLoading: {
    position: 'absolute',
    top: 100
  },
  textUser: {
    position: 'absolute',
    bottom: 30
  }
})
