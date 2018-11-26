
import Header from 'gui/Components/Header'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { width } from 'utils/globalStyles'

export interface Props {
  navigation: any,
  gotoDetail?: (user: any) => {},
  renderRightIcon: () => {}
  userState: any,
  renderUserCell: any
}
export const HomeView = ({ navigation, renderRightIcon, userState, renderUserCell }: Props) => {
  return (

    <View style={styles.container}>
      <Header
        title='HomeScreen'
        rightAction={() => navigation.toggleDrawer()}
        rightIcon={renderRightIcon()}
      />
      <View style={styles.body}>
        <FlatList
          data={userState.users}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderUserCell}
        />
      </View>
    </View>
  )
}

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
