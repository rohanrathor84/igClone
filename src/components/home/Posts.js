import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Posts() {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 5,
          marginHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../resources/assets/my-photo.jpg')}
            style={{
              height: 26,
              width: 26,
              borderRadius: 13,
              borderWidth: 2,
            }}
          />
          <Text style={{marginStart: 5}}>Rohan</Text>
        </View>
        <MaterialCommunityIcons name="dots-horizontal" size={24} />
      </View>
      <Image
        source={require('../../resources/assets/my-photo.jpg')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: 'red',
        }}
        // resizeMode={'contain'}
      />
      <View style={{marginTop: 10, marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontFamily: 'newFontFile', fontSize: 22}}>
              &#xe064;
            </Text>
            <Text
              style={{
                fontFamily: 'newFontFile',
                fontSize: 22,
                marginStart: 12,
              }}>
              7
            </Text>
            <Text
              style={{
                fontFamily: 'newFontFile',
                fontSize: 22,
                marginStart: 12,
              }}>
              &#xe060;
            </Text>
          </View>
          <Text style={{fontFamily: 'newFontFile', fontSize: 22}}>H</Text>
        </View>
        <Text>7,423 Likes</Text>
        <Text>
          An apple a day will keep anyone away if you throw it hard enough. ✨
        </Text>
        <Text>View all 2 comments</Text>
        <Text>
          <Text>Dollar</Text>
          <Text> Couldn’t be happier 🙂</Text>
        </Text>
        <Text>
          <Text>Rohit</Text>
          <Text>
            {' '}
            Back in the old days my best friend why quiet and shy. I turned her
            into a monster. 😜
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
