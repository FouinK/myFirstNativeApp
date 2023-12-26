/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <Text>상단 바</Text>
      </View>

      <View style={styles.characterContainer}>
        <Text>중앙 캐릭터</Text>
      </View>

      <View style={styles.textContainer}>
        <Text>하단 텍스트 버튼</Text>
      </View>

      <View style={styles.menuBar}>
        <Text>하단 메뉴 바</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  characterContainer: {
    alignItems: 'center',
  },
  textContainer: {},
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
