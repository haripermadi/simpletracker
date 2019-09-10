import React,{useContext} from 'react'
import {View, Text, StyleSheet,ActivityIndicator} from 'react-native'
import MapView,{Polyline, Circle} from 'react-native-maps'
import { Context as LocationContext} from '../context/LocationContext'


const Map = () => {
  const {state : {currentLocation, locations}} = useContext(LocationContext)
  // console.log('MAP---', state)
  // let points = []
  // for(let i =0;i<20;i++){
  //   if(i <10) {
  //     points.push({
  //       latitude: 37.33233 + (i * 0.0001),
  //       longitude: -122.03121 + (i * 0.0002)
  //     })
  //   }else{
  //     points.push({
  //       latitude: 37.33233 - (i * 0.00001),
  //       longitude: -122.03121 + (i * 0.0002)
  //     })
  //   }
  // }
  // console.log('LOCATIONARR---', locations)
  if(!currentLocation) {
    return <ActivityIndicator size='large' style={{marginTop:200}}/>
  }

  return (
      <MapView 
      style={styles.map}
      initialRegion={{
        // latitude:37.33233,
        // longitude:-122.03121,
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
      >
        <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline coordinates={locations.map(loc=>loc.coords)}/>
      </MapView>
  )
}


const styles = StyleSheet.create({
  viewStyle: {
    margin: 15
  },
  map:{
    height:300
  }
})


export default Map