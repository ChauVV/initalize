import { Dimensions, Platform, StyleSheet } from 'react-native'

const CORE_RATIO = 667 / 375
export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

export const width = (num: number) => MYWIDTH * (num / 100)
export const height = (num: number) => MYHEIGHT * (num / 100)
export const scale = (size: number) => MYWIDTH / guidelineBaseWidth * size
export const verticalScale = (size: number) => MYHEIGHT / guidelineBaseHeight * size
export const heightScale = (num: number) => MYHEIGHT * (num * MYSCALE / 100)
export const ISIOS = Platform.OS === 'ios'

export const FONT = {
  OSWALD_LIGHT: 'Oswald-Light',
  OSWALD_LIGHT_ITALIC: 'Oswald-LightItalic',
  OSWALD_BOLD: 'Oswald-Bold',
  OSWALD_REGULAR: 'Oswald-Regular'
}

export const txtDefault = {
  color: 'white',
  fontSize: width(4),
  backgroundColor: 'transparent',
  fontFamily: FONT.OSWALD_LIGHT
}

export const COLORS = {
  RED: '#C21B17',
  BACKGROUND_COLOR: '#FF7043',
  LINE: '#a5abaf',
  TEXT: 'white',
  PING: '#FF7043'
}
export const THEME_DEFAULT = {
  fontRegular: '',
  fontMedium: '',
  fontLight: '',
  fontSize: width(4),
  fontSizeTitle: width(6),
  // COLORS
  colorPrimary: '', // primary color for your app, usually your brand color.
  colorAccent: '', // secondary color for your app which complements the primary color.
  colorBackground: '', // background color for pages, such as lists.
  colorSurface: '', // background color for elements containing content, such as cards.
  colorText: '', // text color for content.
  colorTextTitle: '', // text color for title.
  colorInfo : '',
  colorSuccess : '',
  colorDanger : '',
  colorWarning : '',
  colorDisabled: '' , // color for disabled elements.
  colorPlaceholder: '', // color for placeholder text, such as input placeholder.
  colorBackdrop: '', // color for backdrops of various components such as modals.
}
const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
})

export default styles
