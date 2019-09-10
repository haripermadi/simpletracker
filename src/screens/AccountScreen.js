import React,{useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext'
import Spacer from '../components/Spacer'


const AccountScreen = () => {
  const {signout} = useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <Text style={styles.textTitle}>Account Screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout}/>
      </Spacer>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30
  }
})


export default AccountScreen