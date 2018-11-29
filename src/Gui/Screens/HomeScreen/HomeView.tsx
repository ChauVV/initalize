
import BaseView from 'gui/Container/BaseView'
import React from 'react'
import { FlatList, View } from 'react-native'
import { icBar } from 'utils/globalIcons'
import ClientCell from './Components/ClientCell'
import styles from './styles'
export interface Props {
  navigation: any,
  gotoDetail: (client: any) => {},
  clientState: any,
}
export const HomeView = ({ navigation, clientState, gotoDetail }: Props) => {
  return (
    <BaseView
      isHeader={true}
      title='HomeScreen'
      rightAction={() => navigation.toggleDrawer()}
      rightIcon={icBar}
    >

      <View style={styles.body}>
        <FlatList
          data={clientState.clients}
          keyExtractor={(_, index) => index.toString()}
          renderItem={(object) => ClientCell({ object, gotoDetail })}
        />
      </View>
    </BaseView>
  )
}