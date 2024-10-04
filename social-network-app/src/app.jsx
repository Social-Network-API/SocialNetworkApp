import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from '../src/app/components/Home';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Home />
    </SafeAreaView>
  );
};

export default App;
