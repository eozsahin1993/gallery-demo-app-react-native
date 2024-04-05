import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface GalleryListItemProps {
  id: string;
  title: string;
  artist: string;
  date: string;
}

function GalleryListItem(props: GalleryListItemProps) {
  console.log(props);
  return (
    <View style={style.container}>
      <View style={style.column}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          style={style.image}
        />
        <View style={style.column}>
          <Text style={style.title}>{props.title}</Text>
          <Text style={style.text}>{props.artist}</Text>
          <Text style={style.text}>{props.date}</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    height: 200,
    borderRadius: 4,
    flex: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 18,
    flex: 1,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default GalleryListItem;
