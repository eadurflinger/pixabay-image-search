import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Title } from 'react-native-paper';
import ImageList from './ImageList';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Title>Pixbay Image Search</Title>
        <ImageList></ImageList>
      </SafeAreaView>
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
