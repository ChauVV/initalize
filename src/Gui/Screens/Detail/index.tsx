import Header from 'gui/Components/Header'
import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { COLORS } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

export interface Props {
  pop: any,
  navigation: any
}
class Detail extends Component<Props> {
  render() {
    const { pop, navigation } = this.props
    const user = navigation.getParam('user', {})
    console.log('user: ', user)

    return (
      <View style={styles.container}>
        <Header
          title={'Detail'}
          leftAction={() => pop()}
          leftIcon={<IconFontAwesome name='chevron-left' style={{ color: 'white', fontSize: 25 }} />}
        />
        <View style={styles.body}>
          <View style={styles.avatarBorder}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} resizeMode={'contain'} />
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              <Text style={styles.infoTitle}>{'Name: '}</Text>
              <Text>{user.name}</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.infoTitle}>{'Age: '}</Text>
              <Text>{user.age}</Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state: any) => ({
  userState: state.userState
})
const mapactionsTypeToProps = (dispatch: any) => ({
  pop: () => dispatch({ type: actionsType.POP })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Detail)

const styles = StyleSheet.create({
  info: {
    marginTop: 20
  },
  text: {
    fontSize: 20
  },
  infoTitle: {
    fontWeight: 'bold'
  },
  avatarBorder: {
    overflow: 'hidden',
    marginTop: 40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  avatar: {
    flex: 1
  },
  body: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
