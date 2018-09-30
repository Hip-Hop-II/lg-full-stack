import React from 'react'
import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {colors} from '../utils/colors'
import {Ionicons} from '@expo/vector-icons'


const AuthNavigator = createStackNavigator({
  Signin: {
    getScreen: () => require('../screen/SigninScreen').default
  }
})

const CompanyStack = createStackNavigator({
  Company: {
    getScreen: () => require('../screen/CompanyScreen').default
  }
})

const TabNavigator = createBottomTabNavigator({
  Home: {
    getScreen: () => require('../screen/HomeScreen.js').default
  },
  Company: {
    screen: CompanyStack,
    navigationOptions: {
      tabBarLabel: '公司',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-stats-outline" size={26} color={tintColor} />
      )
    }
  },
  Information: {
    getScreen: () => require('../screen/InformationScreen').default
  },
  Profile: {
    getScreen: () => require('../screen/ProfileScreen').default
  }
}, {
  tabBarOptions: {
    activeTintColor: colors.greenPrimary,
    labelStyle: {
      fontWeight: '900'
    }
  }
})

const MainNavigator = createStackNavigator({
  Tab: TabNavigator
}, {
  navigationOptions: {
    header: null
  }
})

export default createSwitchNavigator({
  Auth: AuthNavigator,
  Main: MainNavigator
}, {
  initialRouteName: 'Main'
})
