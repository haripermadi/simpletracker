import React,{useEffect,useContext} from 'react'
import {View,StyleSheet,ActivityIndicator} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'


const LoadingScreen = () => {
  const {tryLocalSignin} = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin()
  },[])

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
}


const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  }
})


export default LoadingScreen
