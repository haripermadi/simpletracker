import axios from 'axios'
import {AsyncStorage} from 'react-native'

const instance = axios.create({
  baseURL: 'http://077bd19a.ngrok.io'
})

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    console.log('TOKEN--api---', token)
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance