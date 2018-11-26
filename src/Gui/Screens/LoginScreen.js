
import React, {Component} from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

import { width, height, COLORS } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

class LoginScreen extends Component {
  componentDidMount () {
    // this.props.fetchUsers()
  }
  render () {
    const { userState, login } = this.props

    return (
      <View style={styles.container}>
        {userState.isLoading && <Text style={styles.txtLoading}>loading...</Text>}
        {userState.users.length > 0 &&
            <Text style={styles.textUser}>{`Has ${userState.users.length} users`}</Text>
        }
        <TouchableOpacity
          onPress={() => login()}
          style={styles.btnLogin}>
          <Text style={styles.txtBtn}>Login</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userState: state.userState
})
const mapactionsTypeToProps = (dispatch) => ({
  fetchUsers: () => dispatch({ type: actionsType.FETCH_USER, payload: { users: [], isLoading: true } }),
  updateUser: (users) => dispatch({ type: actionsType.UPDATE_USER_SUCCESS, payload: users }),
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
