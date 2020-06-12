import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import KeyPad from './components/KeyPad';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyPad/>
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
});
