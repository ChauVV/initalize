
import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'
import { RouteKey } from 'utils/globalConstants'
import { ISIOS } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'
import { HomeView } from './HomeView'

export interface Props {
  fetchClients: () => {},
  navigation: any,
  gotoDetail: (client: any) => {},
  clientState: any,
  navigate: any,
  close: any
}
class HomeScreen extends Component<Props> {
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
    this.props.fetchClients()
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
    if (activeRoute.routeName === 'HomeScreen' || activeRoute.routeName === 'Login') {
      BackHandler.exitApp()
      return true
    } else {
      this.props.close()
      return true
    }
  }
  render() {
    const { clientState, gotoDetail } = this.props

    return (
      <HomeView
        navigation={this.props.navigation}
        clientState={clientState}
        gotoDetail={gotoDetail}
      />
    )
  }
}
const mapStateToProps = (state: any) => ({
  clientState: state.clientState,
  navigate: state.navigate
})
const mapactionsTypeToProps = (dispatch: any) => ({
  gotoDetail: (client: any) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: { client } }),
  fetchClients: () => dispatch({ type: actionsType.FETCH_CLIENT, payload: { clients: [], isLoading: true } }),
  close: () => dispatch({ type: 'pop' })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(HomeScreen)

