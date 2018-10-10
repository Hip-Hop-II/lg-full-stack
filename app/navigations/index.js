import React from 'react'
import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {colors} from '../utils/colors'
import {Ionicons} from '@expo/vector-icons'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'
import {connect} from 'react-redux'
import {AsyncStorage} from 'react-native'


const AuthNavigator = createStackNavigator({
  Signin: {
    getScreen: () => require('../screen/SigninScreen').default
  },
  Signup: {
    getScreen: () => require('../screen/SignupScreen').default
  }
}, {
  navigationOptions: {
    header: null
  }
})

const CompanyStack = createStackNavigator({
  Company: {
    getScreen: () => require('../screen/CompanyScreen').default
  }
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      getScreen: () => require('../screen/HomeScreen').default
    },
    Company: {
      screen: CompanyStack,
      navigationOptions: {
        tabBarLabel: "公司",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-stats-outline" size={26} color={tintColor} />
        )
      }
    },
    Information: {
      getScreen: () => require("../screen/InformationScreen").default
    },
    Profile: {
      getScreen: () => require("../screen/ProfileScreen").default
    }
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: colors.greenPrimary,
      labelStyle: {
        fontWeight: "900"
      }
    }
  }
);

const ProfileStack = createStackNavigator({
  Settings: {
    getScreen: () => require('../screen/settings/SettingScreen').default
  }
})

const MainNavigator = createStackNavigator({
  Tab: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  },
  PositionDetail: {
    getScreen: () => require('../screen/position/PositionDetailScreen').default
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      header: null
    }
  }
}, {
  navigationOptions: {
   
  }
})
export const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)

export const RootNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Main: MainNavigator
}, {
  initialRouteName: 'Auth'
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')

class AppWidthNav extends React.PureComponent {
  async componentWillMount () {
    try {
      const authorization = await AsyncStorage.getItem('Authorization')
      if (authorization) {
        this.props.dispatch({type: 'Login'})
      } else {
        this.props.dispatch({type: 'Logout'})
      }
    } catch (error) {
      throw error
    }
  }
  render () {
    return (
      <AppWithNavigationState {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  state: state.nav
})

export const AppNavigator = connect(mapStateToProps)(AppWidthNav)
