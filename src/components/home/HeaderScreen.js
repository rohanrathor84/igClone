import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function HeaderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.iconContainer}>
        <Image
          source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
          }}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
          }}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>23</Text>
          </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
            style={styles.iconStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  logo: {
    fontFamily: 'billabong',
    fontSize: 28,
    color: 'white',
    paddingTop: 12,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 12,
    bottom: 12,
    flex: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    minWidth: 22,
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
  iconStyle: {
    height: 24,
    width: 24,
    marginEnd: 8,
  },
});
