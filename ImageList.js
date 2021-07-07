import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Searchbar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ImageCard from './ImageCard'

export default function ImageList() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.imageList}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={ async(event) => {
            try {
              const response = await fetch(`https://pixabay.com/api?key=22390465-ee16b0cc037dc7df2ed3c03ba&q=${event.nativeEvent.text}`);
              const reponseJson = await response.json();
              setSearchResults(reponseJson);
            } catch (error) {
              console.log(error);
            }
          }}
        />
        <ScrollView>
          <View style={styles.imageCardListWrapper}>
            {searchResults?.hits.map((searchResult) => <ImageCard key={searchResult.id} image={searchResult}/>)}
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageList: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },

  imageCardListWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'scroll',
    justifyContent: 'space-around',
  }
});