import React from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';

const data = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://www.teahub.io/photos/full/171-1718121_high-resolution-restaurant-images-hd.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://www.elitetraveler.com/wp-content/uploads/2021/06/FSX-0164-Filia-main-e1623861643989.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 2444,
    rating: 3.7,
  },
  {
    name: 'Indian Grill',
    image_url:
      'https://assets.gqindia.com/photos/5cdc74897813c415f22fc949/master/pass/cafe-mozaic.png',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 1594,
    rating: 4.5,
  },
  {
    name: 'Moginies',
    image_url: 'https://wallpaperaccess.com/full/3014596.jpg',
    categories: ['Cafe', 'Bar', 'Bakery'],
    price: '$$',
    reviews: 5521,
    rating: 4.9,
  },
];

export default function Stories() {
  function renderItem({item, index}) {
    return (
      <View
        style={{
          alignItems: 'center',
          marginEnd: 10,
          marginStart: index == 0 ? 10 : 0,
        }}>
        <Image
          source={{uri: item.image_url}}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: 'orange',
          }}
        />
        <Text style={{color: 'white', width: 60}} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: 1,
          backgroundColor: 'white',
          marginTop: 5,
        }}
      />
    </View>
  );
}
