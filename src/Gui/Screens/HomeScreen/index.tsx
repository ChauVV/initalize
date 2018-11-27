
import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { RouteKey } from 'utils/globalConstants'
import { actionsType } from 'utils/reduxConstants'
import { HomeView } from './HomeView'
import styles from './styles'

export interface Props {
  fetchClients: () => {},
  navigation: any,
  gotoDetail: (client: any) => {},
  clientState: any
}
class HomeScreen extends Component<Props> {
  componentDidMount() {
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
  userState: state.userState,
  clientState: state.clientState
})
const mapactionsTypeToProps = (dispatch: any) => ({
  fetchUsers: () => dispatch({ type: actionsType.FETCH_USER, payload: { users: [], isLoading: true } }),
  updateUser: (users: any) => dispatch({ type: actionsType.UPDATE_USER_SUCCESS, payload: users }),
  gotoDetail: (user: any) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: { user } }),
  fetchClients: () => dispatch({ type: actionsType.FETCH_CLIENT, payload: { clients: [], isLoading: true } }),
})
export default connect(mapStateToProps, mapactionsTypeToProps)(HomeScreen)

