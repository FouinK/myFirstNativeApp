import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Body = () => {
  return (
    <View style={styles.content}>
      <Text>Content</Text>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
  },
});
