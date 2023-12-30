import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Body = () => {
  return (
    <View style={styles.content}>
      <Text>앞으로 며칠 후 뭐가있는지</Text>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  content: {
    flex: 0.8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1, // 구분선의 두께
    borderBottomColor: '#dedede', // 구분선의 색상
  },
});
