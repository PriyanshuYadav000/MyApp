
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function ActionCard() {

  async function openWebsite(websiteLinking: string) {
    try {
      await Linking.openURL(websiteLinking);
    } catch (error) {
      Alert.alert('Error', 'Unable to open the website');
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.headingText}>Blog</Text>

      <View style={[styles.card, styles.elevatedCard]}>

        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            React Native Linking
          </Text>
        </View>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&q=80',
          }}
          style={styles.cardImages}
          resizeMode="cover"
        />

        <View style={styles.cardBody}>

          <Text style={styles.cardDescription}>
            Linking in React Native allows you to open
            websites, make phone calls, send emails,
            and interact with other applications.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              openWebsite('https://reactnative.dev/docs/linking')
            }
          >
            <Text style={styles.buttonText}>
              Read More
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  card: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
  },

  elevatedCard: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  headingContainer: {
    padding: 12,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  cardImages: {
    width: '100%',
    height: 150,
  },

  cardBody: {
    padding: 12,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: '#444',
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
