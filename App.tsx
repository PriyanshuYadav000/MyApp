import { View, Text } from 'react-native'
import React from 'react'
import {ScrollView } from 'react-native'
import {SafeAreaProvider,SafeAreaView,
} from 'react-native-safe-area-context';
import FlatCards from './Components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App