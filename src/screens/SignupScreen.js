import React,{useState, useContext, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext)

  console.log('==========>SIGNUPSCREEN========>', state)

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage}/>
      <AuthForm 
      headerText = 'Sign Up for Tracker'
      errorMessage = {state.errorMessage}
      // onSubmit = {({email,password}) => signup({email, password})}
      onSubmit={signup}
      submitButtonText = 'Sign Up'
      />
      <NavLink
      textTitle='Already have an account? Sign in instead!'
      routeName='signin'
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  },
  container:{
    // borderColor:'red',
    // borderWidth:5,
    flex:1,
    justifyContent:'center',
    marginBottom:250
  },
})


export default SignupScreen