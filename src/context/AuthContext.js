import {AsyncStorage} from 'react-native'

import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
  switch(action.type){
    case 'signup' :
      return {token : action.payload, errorMessage:''}
    case 'signin' :
      return {token : action.payload, errorMessage:''}
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'clear_error_message' :
      return {...state, errorMessage: ''}
    case 'signout' :
      return {token: null, errorMessage:''}
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if(token) {
    dispatch({type: 'signin', payload : token})
    navigate('trackList')
  }else{
    navigate('signup')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) => {
  return async ({email, password}) => {
    // console.log('--->', email, password)
    try {
      const response = await trackerApi.post('/signup', {email,password})
      console.log('singup---res --->', response.data)
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signup', payload: response.data.token})
      navigate('trackList')
    }catch(err){
      console.log('singup---err--->', err.response)
      dispatch({type:'add_error', payload: 'Something wrong!'})
    }
  }
}

const signin = (dispatch) => async ({email, password}) => {
    console.log('--->', email, password)
    try {
      const response = await trackerApi.post('/signin', {email,password})
      console.log('singin---res --->', response.data)
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({type: 'signin', payload: response.data.token})
      navigate('trackList')
    }catch(err) {
      dispatch({type:'add_error', payload: 'Something wrong!'})
    }
  }


const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'})
    navigate('loginFlow')
  }
}

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout, clearErrorMessage, tryLocalSignin},
  {token : null, errorMessage:''}
)