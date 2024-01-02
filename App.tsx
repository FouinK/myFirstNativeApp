import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Header from './component/Header';
import TopMenu from './component/TopMenu.tsx';
import Body from './component/Body';
import Footer from './component/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <TopMenu />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Body />
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    flex: 0.8,
  },
});

export default App;
