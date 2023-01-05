import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {black, gray400, gray800, white} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

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
  const {colors} = useTheme();
  const scheme = useColorScheme();

  function renderItem({item, index}) {
    return (
      <View style={styles.renderItemStyle}>
        <LinearGradient
          colors={['#ff0000', '#ffed00']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.linearGradient}>
          <View style={styles.imageViewStyle}>
            <Image
              source={{uri: item.image_url}}
              style={{
                height: 46,
                width: 46,
                borderRadius: 23,
                borderWidth: 2,
                borderColor: scheme === 'dark' ? black : white,
              }}
            />
          </View>
        </LinearGradient>
        <Text style={{color: colors.text, width: 60}} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            alignItems: 'center',
            marginEnd: 10,
            marginStart: 14,
          }}>
          <LinearGradient
            colors={['#ff0000', '#ffed00']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.linearGradient}>
            <View style={{elevation: 6}}>
              <Image
                source={require('../../resources/assets/my-photo.jpg')}
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  borderWidth: 2,
                  borderColor: scheme === 'dark' ? black : white,
                }}
              />
            </View>
          </LinearGradient>
          <Text style={{color: colors.text, width: 60}} numberOfLines={1}>
            Rohan Kumar
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: 0.2,
          backgroundColor: scheme === 'dark' ? gray800 : gray400,
          marginTop: 5,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderItemStyle: {
    alignItems: 'center',
    marginEnd: 10,
  },
  imageViewStyle: {elevation: 6},
});
