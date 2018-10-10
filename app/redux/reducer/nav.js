import { NavigationActions } from "react-navigation"

import { RootNavigator } from "../../navigations"

const firstAction = RootNavigator.router.getActionForPathAndParams("Auth")
const tempNavState = RootNavigator.router.getStateForAction(firstAction)
const secondAction = RootNavigator.router.getActionForPathAndParams('Main')
const initNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState
)

export function nav (state = initNavState, action) {
  let nextState
  switch (action.type) {
    case "Login":
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break
    case "Logout":
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Auth'}),
        state
      )
      break
    default:
      nextState = RootNavigator.router.getStateForAction(action, state)  
      break
  }
  return nextState || state
}
