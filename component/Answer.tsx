import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

const Answer = () => {
  return (
    <ScrollView style={styles.content}>
      <Text>답변하기</Text>
    </ScrollView>
  );
};

export default Answer;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
