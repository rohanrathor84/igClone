import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {white} from '../../utils/Colors';
import {useTheme} from '@react-navigation/native';

export default function HeaderScreen() {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.logo, {color: colors.text}]}> Instagram </Text>
      <View style={styles.iconContainer}>
        <FontAwesome
          name={'plus-square-o'}
          size={24}
          color={colors.text}
          style={{marginEnd: 20}}
        />
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>23</Text>
          </View>
          <MaterialCommunityIcons
            name={'facebook-messenger'}
            size={24}
            color={colors.text}
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
    marginHorizontal: 14,
  },
  logo: {
    fontFamily: 'Fontspring',
    fontSize: 24,
    paddingVertical: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: white,
    fontWeight: '600',
  },
  iconStyle: {
    height: 24,
    width: 24,
    marginEnd: 8,
  },
});
