import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

const Body = () => {
  return (
    <ScrollView style={styles.content}>
      <Text>앞으로 며칠 후 뭐가있는지</Text>
    </ScrollView>
  );
};

export default Body;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
