import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingtext}>FlatCards</Text>
      <View style = {styles.container}>
        <View style= {[styles.card,styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style= {[styles.card,styles.card2]}>
          <Text>Blue</Text>
        </View>
        <View style= {[styles.card,styles.card3]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'blue',
  },
  card3: {
    backgroundColor: 'green',
  }
})
