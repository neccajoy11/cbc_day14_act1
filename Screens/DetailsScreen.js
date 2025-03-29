import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style= {styles.text}>Necca Joy</Text>
      <Text style= {styles.text}>You Click {count} times</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default DetailsScreen;