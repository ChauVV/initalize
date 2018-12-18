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

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.navigate
)

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
  },
    Detail: {
      screen: Detail,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      })
    }
  }, {
    headerMode: 'none'
  }
)


const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: { screen: Setting }
  },
  {
    navigationOptions: ({ navigation }: any) => ({

      tabBarIcon: ({ focused }: any) => {
        const { routeName } = navigation.state
        let iconName = ''
        if (routeName === 'Home') {
          iconName = `ios-home`
        } else if (routeName === 'Settings') {
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

const Drawer = createDrawerNavigator(
  {
    MainNavigator: {
      screen: MainNavigator,
      navigationOptions: ({ navigation }: any) => ({
        drawerLockMode: navigation.state.index === 0 ? 'unlocked' : 'locked-closed',
        gesturesEnabled: navigation.state.index === 0 ? true : false
      })
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
HomeStack.navigationOptions = ({ navigation }: any) => navigation.state.index === 0
    ? { drawerLockMode: 'unlocked', gesturesEnabled: true }
    : { drawerLockMode: 'locked-closed', gesturesEnabled: false } // Only open drawer for main screen

const AppWithNavigationState: any = reduxifyNavigator(RootNavigator, 'root')

const mapStateToProps = (state: any) => ({
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
