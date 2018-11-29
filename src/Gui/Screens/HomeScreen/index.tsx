
import React, { Component } from 'react'
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
  clientState: any
}
class HomeScreen extends Component<Props> {
  componentDidMount() {
    if (ISIOS) {
      SplashScreen.hide()
    } else {
      setTimeout(() => SplashScreen.hide(), 100)
    }
    this.props.fetchClients()
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
  clientState: state.clientState
})
const mapactionsTypeToProps = (dispatch: any) => ({
  gotoDetail: (client: any) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: { client } }),
  fetchClients: () => dispatch({ type: actionsType.FETCH_CLIENT, payload: { clients: [], isLoading: true } }),
})
export default connect(mapStateToProps, mapactionsTypeToProps)(HomeScreen)

