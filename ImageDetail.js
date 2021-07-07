import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Chip, Avatar } from 'react-native-paper';


export default function ImageDetail({image}) {
  const imageUrl = image.webformatURL;
  const userImage = image.userImageURL;
  const tags = image.tags.split(', ');

  return (
    <View style={styles.imageDetailWrapper}>
      <Avatar.Image size={48} source={{ url: userImage }} />
      <Text>Posted by: {image.user}</Text>
      <Image resizeMode='contain' style={styles.imageDetail} source={{ url: imageUrl }} />
      <View style={styles.tagWrapper}>
        {tags.map((tag) => <Chip style={styles.chip}>{tag}</Chip>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageDetailWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
  },
  imageDetail: {
    height: 300,
    width: '100%',
  },
  tagWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  chip: {
      margin: 5,
  }
});