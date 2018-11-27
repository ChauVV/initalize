
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles'

export interface Props {
  object: any,
  gotoDetail: (client: any) => {}
}

const ClientCell = ({ object, gotoDetail }: Props) => {
  const client = object.item
  return (
    <TouchableOpacity
      onPress={() => gotoDetail(client)}
      style={styles.cell}>
      <Text>{client.name}</Text>
    </TouchableOpacity>
  )
}
export default ClientCell