import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HeaderScreen from '../components/home/HeaderScreen';
import Stories from '../components/home/Stories';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderScreen />
      <Stories />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
