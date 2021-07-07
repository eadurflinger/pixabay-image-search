import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


export default function ImageCard({image, onClick}) {
  return (
    <Card onPress={onClick} style={styles.imageCard}>
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