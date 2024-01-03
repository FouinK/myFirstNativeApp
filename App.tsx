import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './component/Header';
import TopMenu from './component/TopMenu.tsx';
import Body from './component/Body';
import Footer from './component/Footer';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menuContainer}>
        <TopMenu />
      </View>
      <View style={styles.bodyContainer}>
        <Body />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 8,
  },
  footerContainer: {
    flex: 1,
  },
});

export default App;
