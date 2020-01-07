import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';

export default function App() {
  return (
    <Timer>test</Timer>
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
