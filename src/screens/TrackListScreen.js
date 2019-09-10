import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'


const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textTitle}>TrackListScreen</Text>
      <Button title='Go To detail Here!' onPress={() => navigation.navigate('trackDetail') }/>
    </View>
  )
}


const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  }
})


export default TrackListScreen
