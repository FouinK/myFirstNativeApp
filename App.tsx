import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './component/Header';
import TopMenu from './component/TopMenu.tsx';
import Body from './component/Body';
import Footer from './component/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TopMenu />
        <Body />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default App;
