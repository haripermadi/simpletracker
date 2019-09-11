import {AsyncStorage} from 'react-native'

import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const locationReducer = (state, action) => {
  switch(action.type){
    case 'add_current_location' :
      return {...state, currentLocation: action.payload}
    case 'start_recording' :
      return {...state, recording : true}
    case 'stop_recording' :
      return {...state, recording : false}
    case 'add_location' :
      return {...state, locations: [...state.locations,action.payload]}
    case 'change_name' :
      return {...state, name:action.payload}
    case 'reset' : 
      return {...state, name:'',locations:[]}
    default:
      return state
  }
}

const changeName = dispatch => (name) => {
  dispatch({type:'change_name', payload:name})
}

const startRecording = (dispatch) => async () => {
  // try {
  //   const response = await trackerApi.post('/signin', {email,password})
  //   dispatch({type: 'signin', payload: response.data.token})
  //   navigate('trackList')
  // }catch(err) {
  //   dispatch({type:'add_error', payload: 'Something wrong!'})
  // }
  dispatch({type: 'start_recording'})
}

const stopRecording = (dispatch) => async () => {
  dispatch({type: 'stop_recording'})
}

const addLocation = (dispatch) => async (location, recording) => {
  // console.log('add location dispatch')
  dispatch({type:'add_current_location', payload: location})
  if(recording) {
    dispatch({type: 'add_location', payload: location})
  }
}

const reset = (dispatch) =>() => {
  dispatch({type: 'reset'})
}

export const {Provider, Context} = createDataContext(
  locationReducer,
  {startRecording, stopRecording, addLocation, changeName, reset},
  {recording : false, locations: [], currentLocation : null, name:''}
)