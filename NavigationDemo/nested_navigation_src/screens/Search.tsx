import { createClient } from 'pexels';
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, StyleSheet, Alert } from 'react-native';
import PhotoCard from '../components/PhotoCard';

const PEXELS_API_KEY = 'JLpCpa8eVdGrX5GjMtVDtjtTdf3vvgJlWOQ8vlNUXuMU1CVTZM1KEQ8u';
//const client = createClient(PEXELS_API_KEY);
const PEXELS_API_URL = 'https://api.pexels.com/v1/search';

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchPhotos = async () => {
    if (!keyword) {
      Alert.alert('Enter Key Word for Searching');
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${PEXELS_API_URL}?query=${keyword}&per_page=10`, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });
      const data = await response.json();
      setPhotos(data.photos);
    } catch (err) {
      setError('Error, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Photos..."
        value={keyword}
        onChangeText={setKeyword}
        onSubmitEditing={searchPhotos}
      />
      
      {loading && <Text>Searching...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}

      <Text style={styles.featuredText}>Featured Photos</Text>

      <FlatList
        data={photos}
        // keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        // renderItem={({ item }) => (
        //   <View style={styles.photoContainer}>
        //     <Image source={{ uri: item.src.small }} style={styles.image} />
        //     <Text>{item.photographer}</Text>
        //   </View>
        // )}
        renderItem={({ item }) => <PhotoCard photo={item} />}
        contentContainerStyle={styles.photoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 16,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
  },
  photoContainer: {
    marginBottom: 16,
    alignItems: 'center',
    marginRight: 10,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    // width: 200,
    width: '100%',
    height: undefined,
    aspectRatio: 1,  // Maintain square aspect ratio
    borderRadius: 8,
    // marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  featuredText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },
});

export default SearchScreen;