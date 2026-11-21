import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const loading = () => {
  return (
    <View style = {styles.container}>
        <ActivityIndicator size="large" color= "rgba(245, 229, 15, 0.86)" />
      <Text>loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})


export default loading
