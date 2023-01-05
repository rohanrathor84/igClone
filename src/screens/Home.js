import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import HeaderScreen from '../components/home/HeaderScreen';
import Posts from '../components/home/Posts';
import Stories from '../components/home/Stories';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      <ScrollView>
        <Stories />
        <View style={styles.seperator} />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {width: '100%', height: 1, backgroundColor: '#bdbdbd'},
});
