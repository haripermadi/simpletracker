import '../_mockLocation'
import React, {useState,useEffect, useContext, useCallback} from 'react'
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {SafeAreaView,withNavigationFocus} from 'react-navigation'
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location'
import Map from '../components/Map'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'


const TrackCreateScreen = ({isFocused}) => {
  const {state,addLocation} = useContext(LocationContext)
  // const [err] = useLocation((location) => addLocation(location)) // 1
  // const [err] = useLocation(isFocused,addLocation) // 2 simplyfy no 1
  const callback = useCallback((location) => {
    addLocation(location, state.recording)
  },[state.recording])
  const [err] = useLocation(isFocused || state.recording, callback )

  // const [err, setErr] = useState(null)
// console.log(isFocused)
  // const startWatching = async () => {
  //   try {
  //     await requestPermissionsAsync()
  //     await watchPositionAsync({
  //       accuracy: Accuracy.BestForNavigation,
  //       timeInterval: 1000,
  //       distanceInterval: 10
  //     }, (location)=>{
  //       // console.log('====LOCATION=====>', location)
  //       addLocation(location)
  //     })
  //   }catch(e) {
  //     setErr(e)
  //   }
  // }

  // useEffect(() => {
  //   startWatching()
  // },[])

  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={styles.textTitle}>TrackCreateScreen</Text>
      <Map/>
      {err ? <Text>{err}</Text>: null}
      <TrackForm/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  }
})


export default withNavigationFocus(TrackCreateScreen) 