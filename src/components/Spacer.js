import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Spacer = ({children}) => {
  return (
    <View style={styles.viewStyle}>
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
  viewStyle: {
    margin: 15
  }
})


export default Spacer