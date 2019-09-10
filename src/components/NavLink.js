import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {withNavigation} from 'react-navigation'
import Spacer from './Spacer'


const NavLink = ({navigation, textTitle, routeName}) => {
 return (
   <>
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
    <Spacer>
    <Text style={styles.link}>{textTitle}</Text>
    </Spacer>
  </TouchableOpacity>
   </>
 ) 
}

const styles = StyleSheet.create({
  link: {
    color:'blue'
  }
})

export default withNavigation(NavLink)