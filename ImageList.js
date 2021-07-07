import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import ImageCard from './ImageCard'
import ImageDetail from './ImageDetail'


export default function ImageList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const onChangeSearch = query => setSearchQuery(query);

  const getResults = async(text) => {
    try {
      const response = await fetch(`https://pixabay.com/api?key=22390465-ee16b0cc037dc7df2ed3c03ba&q=${text}`);
      const reponseJson = await response.json();
      setSearchResults(reponseJson);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( 
    () => { 
      getResults('dog')
    }, []);
  return (
    <View style={styles.imageList}>
        { !selectedImage ? 
        <>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onSubmitEditing={(event) => { 
            getResults(event.nativeEvent.text)}
          }
        />
        <ScrollView>
          <View style={styles.imageCardListWrapper}>
            {searchResults?.hits.map((searchResult) => <ImageCard onClick={()=>setSelectedImage(searchResult)} key={searchResult.id} image={searchResult}/>)}
          </View>
        </ScrollView>
        </>
       :
          <View>
            <Button icon="arrow-left" onPress={() => setSelectedImage(null)}>
                Back to Search
            </Button>
            <ImageDetail image={selectedImage}/>
          </View>
        }
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