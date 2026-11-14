import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingtext}>ElevatedCard</Text>
      <ScrollView horizontal = {true} style = {styles.Container}>  
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card,styles.cardElevated]}>
            <Text>emoji</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    Container: {
    padding: 10,
  },
    card: {
        flex : 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 5, // Add elevation for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
})