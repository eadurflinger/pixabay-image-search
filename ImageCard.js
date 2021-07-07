import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default function ImageCard({image}) {
  return (
    <Card style={styles.imageCard}>
        <Card.Cover source={{ uri: image.webformatURL }} />
    </Card>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    width: '47%',
    backgroundColor: '#fff',
    marginTop: 5,
  },
});