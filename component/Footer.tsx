import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>홈버튼이나, 광고 ?</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1, // 구분선의 두께
    borderBottomColor: '#dedede', // 구분선의 색상
  },
});
