import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Elephant Monitor</Text>
      <Button title="Go to Map" onPress={() => navigation.navigate('Map')} />
      <Button title="View Alerts" onPress={() => navigation.navigate('Alerts')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default HomeScreen;