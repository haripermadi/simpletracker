import React,{useContext} from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {ListItem} from 'react-native-elements'
import {Context as TrackContext} from '../context/TrackContext'


const TrackListScreen = ({navigation}) => {
  const {state, fetchTrack} = useContext(TrackContext)
  console.log('LISTTRACTSCREEN---', state)
  return (
    <View>
      <NavigationEvents onWillFocus={() => fetchTrack()}/>
      {/* <Text style={styles.textTitle}>TrackListScreen</Text> */}
      <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return <TouchableOpacity onPress={() => navigation.navigate('trackDetail',{_id:item._id}) }>
          <ListItem chevron title={item.name}/>
        </TouchableOpacity>
      }}
      />
    </View>
  )
}

TrackListScreen.navigationOptions = {
  title:'Tracks'
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  }
})


export default TrackListScreen
