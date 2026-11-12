
import React from 'react';
import { View, Text } from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
export default App
