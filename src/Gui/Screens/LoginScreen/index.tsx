
import React, { Component } from 'react'
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'
import { COLORS, height, ISIOS, width } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

export interface Props {
  userState: any,
  login: () => {}
}

class LoginScreen extends Component<Props> {
  componentDidMount() {
    if (ISIOS) {
      SplashScreen.hide()
    } else {
      setTimeout(() => SplashScreen.hide(), 100)
    }
  }
  render() {
    const { userState, login } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => login()}
          style={styles.btnLogin}>
          <Text style={styles.txtBtn}>Login</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
})
const mapactionsTypeToProps = (dispatch: any) => ({
  login: () => dispatch({ type: actionsType.LOGIN })
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
