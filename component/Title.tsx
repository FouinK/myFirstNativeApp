import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View style={styles.title}>
      <Text>타이틀</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
  },
});
