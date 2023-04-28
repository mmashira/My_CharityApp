import React from 'react';
import { View, Text } from 'react-native';
import DonationCategories from './DonationCategories';

const App = () => {
  return (
    <View>
      <Text>Choose a donation category:</Text>
      <DonationCategories />
    </View>
  );
};

export default App;