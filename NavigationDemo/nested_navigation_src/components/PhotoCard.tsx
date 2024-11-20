import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const PhotoCard = ({ photo }) => {
    const imageWidth = 200;
    const imageHeight = (photo.height / photo.width) * imageWidth;

    return (
        <View style={[styles.photoContainer]}>
        <Image source={{ uri: photo.src.small }} style={[styles.image, { width: imageWidth, height: imageHeight }]}  />
        <Text>
            Width: {photo.width}px, Height: {photo.height}px
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  photoContainer: {
    marginBottom: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    // width: '100%', // Ensures the image takes up the full width of the container
    // height: 'auto',
    // aspectRatio: 1,  // This ensures the image keeps a square aspect ratio
    borderRadius: 8, // Adds rounded corners to the image
  },
});

export default PhotoCard;
