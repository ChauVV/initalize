
import Header from 'gui/Components/Header'
import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { RouteKey } from 'utils/globalConstants'
import { width } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'
import { HomeView } from './HomeView'

export interface Props {
  fetchUsers: () => {},
  navigation: any,
  gotoDetail: (user: any) => {},
  userState: any
}
class HomeScreen extends Component<Props> {
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderRightIcon = () => {
    return (
      <IconFontAwesome name='bars' style={{ color: 'white', fontSize: 25 }} />
    )
  }
  rightAction = () => {
    console.log('this.props.navigation.toggleDrawer()', this.props.navigation, this.props)
  }
  renderUserCell = (ob: any) => {
    const user = ob.item
    const { gotoDetail } = this.props

    return (
      <TouchableOpacity
        onPress={() => gotoDetail(user)}
        style={styles.cell}>
        <Text>{user.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { userState } = this.props

    return (
      <HomeView
        renderRightIcon={() => this.renderRightIcon()}
        navigation={this.props.navigation}
        renderUserCell={this.renderUserCell}
        userState={userState}
      />
    )
  }
}
const mapStateToProps = (state: any) => ({
  userState: state.userState
})
const mapactionsTypeToProps = (dispatch: any) => ({
  fetchUsers: () => dispatch({ type: actionsType.FETCH_USER, payload: { users: [], isLoading: true } }),
  updateUser: (users: any) => dispatch({ type: actionsType.UPDATE_USER_SUCCESS, payload: users }),
  gotoDetail: (user: any) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: { user } })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(HomeScreen)

const styles = StyleSheet.create({
  cell: {
    height: 50,
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
