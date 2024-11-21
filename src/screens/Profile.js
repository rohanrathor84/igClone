import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Profile() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 12,
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            rohan_kumar.11
          </Text>
          <SimpleLineIcons
            name="arrow-down"
            size={14}
            style={{marginStart: 8, alignSelf: 'center', color: 'black'}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            name="md-add-circle-outline"
            size={32}
            style={{marginEnd: 16, color: 'black'}}
          />
          <Entypo name="menu" size={32} style={{color: 'black'}} />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
          }}>
          <Image
            source={require('../resources/assets/my-photo.jpg')}
            style={{
              height: 90,
              width: 90,
              borderRadius: 90,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View style={{marginEnd: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                }}>
                75
              </Text>
              <Text style={{color: 'black'}}>Posts</Text>
            </View>
            <View style={{marginEnd: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                }}>
                265
              </Text>
              <Text style={{color: 'black'}}>Followers</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 18,
                }}>
                458
              </Text>
              <Text style={{color: 'black'}}>Following</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 12, marginTop: 8}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Rohan Kumar</Text>
        <Text style={{color: 'black'}}>The best is yet to come</Text>
        <Text style={{color: 'black'}}>Bengaluru</Text>
      </View>
    </View>
  );
}
