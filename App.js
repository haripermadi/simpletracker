import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'


import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import LoadingScreen from './src/screens/LoadingScreen'
import {setNavigator} from './src/navigationRef'
import { Provider as AuthProvider} from './src/context/AuthContext'
import { Provider as LocationProvider} from './src/context/LocationContext'

const switchNavigator = createSwitchNavigator({
  loading : LoadingScreen,
  loginFlow : createStackNavigator({
    signup : SignupScreen,
    signin : SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackFlow: createStackNavigator({
      trackList : TrackListScreen,
      trackDetail : TrackDetailScreen
    }),
    trackCreate : TrackCreateScreen,
    account : AccountScreen
  })
})

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


const App =  createAppContainer(switchNavigator)

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator) => {setNavigator(navigator)}}/>
      </AuthProvider>
    </LocationProvider>
  )
}