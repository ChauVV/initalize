
import { connect } from 'react-redux'

const withTheme = connect((state: any) => ({ theme: state.theme }))

export default withTheme