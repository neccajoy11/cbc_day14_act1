import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const BlueScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Red Screen" color="red" onPress={() => navigation.navigate('RedScreen')} />
      <Button title="Go to Blue Screen" color="blue" onPress={() => navigation.navigate('BlueScreen')} />
      <Button title="Go to Green Screen" color="green" onPress={() => navigation.navigate('GreenScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, 
    backgroundColor: 'blue', 
  },
});

export default BlueScreen;
