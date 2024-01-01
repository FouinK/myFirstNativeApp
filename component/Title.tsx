import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View style={styles.title}>
      <Text>며칠째인지 나오게</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    flex: 0.2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
  },
});
