/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { RenderView } from './RenderView'

export interface Props { }

export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  public render() {
    return (
      <RenderView />
    )
  }
}


