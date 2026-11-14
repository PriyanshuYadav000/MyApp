import { View, Text } from 'react-native'
import React from 'react'
import {ScrollView } from 'react-native'
import {SafeAreaProvider,SafeAreaView,
} from 'react-native-safe-area-context';
import FlatCards from './Components/FlatCards';
import ElevatedCard from './Components/ElevatedCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App