import React,{useState, useContext} from 'react'
import {StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import Spacer from './Spacer'
import {Context as LocationContext} from '../context/LocationContext'

const TrackForm = () => {
  const {state, startRecording, stopRecording, changeName} = useContext(LocationContext)
 console.log('loca----', state.locations.length)
  return (
    <>
    <Spacer>
      <Input 
      placeholder='Enter name'
      value={state.name} 
      onChangeText={changeName}
      autoCapitalize='none'
      autoCorrect={false}
      />
      </Spacer>
      <Spacer>
        {
          state.recording ? 
          <Button title='Stop recording' onPress={stopRecording}/>
          :
          <Button title='Start recording' onPress={startRecording}/>

        }
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMsg: {
    fontSize: 14,
    color:'red',
    marginHorizontal:15,
    marginTop:15
  },
})

export default TrackForm