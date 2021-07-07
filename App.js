import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ImageList from './ImageList';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Pixbay Image Search</Text>
        <ImageList></ImageList>
      </View>
    </PaperProvider>
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
