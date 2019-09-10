import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <NavigationEvents
      onWillBlur={clearErrorMessage}
      />
      <AuthForm 
      headerText = 'Sign In to Your Account'
      errorMessage = {state.errorMessage}
      onSubmit={signin}
      submitButtonText = 'Sign In'
      />
      <NavLink
      textTitle='Already have an account? Sign up instead!'
      routeName='signup'
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    header : null
  }
}


const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  },
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
  },
})


export default SigninScreen