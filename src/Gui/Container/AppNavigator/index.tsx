import Authen from 'gui/Container/Authen'
import Detail from 'gui/Screens/Detail'
import DrawerContent from 'gui/Screens/DrawerContent'
import HomeScreen from 'gui/Screens/HomeScreen'
import LoginScreen from 'gui/Screens/LoginScreen'
import Setting from 'gui/Screens/Setting/'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import { RouteKey } from 'utils/globalConstants'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.navigate
)

const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Detail: { screen: Detail }
  }, {
    headerMode: 'none'
  }
)

const MainTabbar = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: { screen: Setting }
  },
  {
    navigationOptions: ({ navigation }: any) => ({
      tabBarIcon: ({ focused }: any) => {
        const { routeName } = navigation.state
        let iconName = ''
        if (routeName === RouteKey.Home) {
          iconName = `ios-home`
        } else if (routeName === RouteKey.Settings) {
          iconName = `ios-settings`
        }

        return <Icon
          name={iconName}
          style={{ color: focused ? 'red' : '#7e7e7e', fontSize: 20 }}
        />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray'
    }
  }
)
const getActiveScreen = (navigationState: any): any => {
  if (navigationState.index !== undefined) {
    return getActiveScreen(navigationState.routes[navigationState.index])
  } else {
    return navigationState
  }
}

MainTabbar.navigationOptions = ({ navigation }: any) => {
  let drawerLockMode = 'locked-closed'
  const activeRoute = getActiveScreen(navigation.state)
  if (activeRoute.routeName === RouteKey.HomeScreen || activeRoute.routeName === RouteKey.Settings) { // Only open drawer for 2 these screen
    drawerLockMode = 'unlocked'
  }
  return {
    drawerLockMode
  }
}

const Drawer = createDrawerNavigator(
  {
    MainTabbar: {
      screen: MainTabbar
    }
  },
  {
    drawerPosition: 'right',
    contentComponent: DrawerContent,
    drawerWidth: 300
  }
)
const RootNavigator = createStackNavigator(
  {
    Authen: { screen: Authen },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    Drawer: {
      screen: Drawer,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  }, {
    headerMode: 'none'
  }
)

const AppWithNavigationState: any = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = (state: any) => ({
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
