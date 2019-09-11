import {AsyncStorage} from 'react-native'

import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const trackReducer = (state, action) => {
  switch(action.type){
    case 'fetch_track' :
      return action.payload
    default:
      return state
  }
}

const fetchTrack = dispatch => async () => {
  const response = await trackerApi.get('/tracks')
  dispatch({type:'fetch_track', payload: response.data})
}

const createTrack = dispatch => async (name, locations) => {
  console.log('CONTEXT create track---', name, locations.length)
  const res = await trackerApi.post('/tracks',{name, locations})
  console.log('CONTEXT create track-res--', res)
  dispatch({type:'create_track'})
}

export const {Provider, Context} = createDataContext(
  trackReducer,
  {fetchTrack, createTrack},
  []
)