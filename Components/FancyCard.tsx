import { Image ,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Treanding Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8&w=1000&q=80'

        }} 
        style={styles.cardImage}/>  
        <View style = {styles.cardBody}>
            <Text style={styles.cardTitle}>Paris</Text>
            <Text style={styles.cardDescription}>Paris is the capital city of France, known for its art, fashion, and culture. It is home to iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.</Text>
            <Text style={styles.cardLocation}>CardLocation</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  card: {
    width: 350,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  cardElevated: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  cardImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  cardBody: {
    padding: 12,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#444',
  },

  cardLocation: {
    fontSize: 13,
    color: 'gray',
    marginTop: 10,
  },
});