import {useContext} from 'react'
import {Accuracy, watchPositionAsync, requestPermissionsAsync} from 'expo-location'

import {Context as LocationContext} from '../context/LocationContext'
import {Context as TrackContext} from '../context/TrackContext'
import {navigate} from '../navigationRef'

export default () => {
  const {createTrack} = useContext(TrackContext)
  const {state:{locations, name}, reset} = useContext(LocationContext)

  const saveTrack = async () => {
    await createTrack(name, locations)
    reset()
    navigate('trackList')
  }

  return [saveTrack]
}