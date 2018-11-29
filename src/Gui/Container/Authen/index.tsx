
import BaseView from 'gui/Container/BaseView'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionsType } from 'utils/reduxConstants'

export interface Props {
  checkAuthen: (...args: any[]) => any,
}
class AppConnect extends Component<Props> {
  constructor(props: Props) {
    super(props)
    props.checkAuthen()
  }
  render() {
    return (
      <BaseView />
    )
  }
}

const mapStateToProps = (state: any) => ({
})
const mapactionsTypeToProps = (dispatch: any) => ({
  checkAuthen: () => dispatch({ type: actionsType.CHECK_AUTHEN })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(AppConnect)

