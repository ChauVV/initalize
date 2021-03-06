import BaseView from 'gui/Container/BaseView'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Setting extends Component {
  render() {
    return (
      <BaseView>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native B</Text>
        </View>
      </BaseView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
