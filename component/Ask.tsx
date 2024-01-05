import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

const Ask = () => {
  return (
    <ScrollView style={styles.content}>
      <Text>질문서 작성하기</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default Ask;
