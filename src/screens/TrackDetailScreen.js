import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MapView,{Polyline} from 'react-native-maps'
import {Context as TrackContext} from '../context/TrackContext'


const TrackDetailScreen = ({navigation}) => {
  const {state} = useContext(TrackContext)
  const _id = navigation.getParam('_id')
  const track = state.find(tra => tra._id === _id)
  const initialCoord = track.locations[0].coords
  return (
    <View>
      <Text style={styles.textTitle}>{track.name}</Text>
      <MapView 
        initialRegion={{
          longitudeDelta:0.01,
          latitudeDelta:0.01,
          ...initialCoord
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
      </MapView>
    </View>
  )
}


const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  },
  map:{
    height:300
  }
})


export default TrackDetailScreen