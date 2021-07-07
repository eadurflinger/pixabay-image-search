import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function ImageList() {
  return (
    <View style={styles.imageList}>
         <Text>Pixbay Image List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageList: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});