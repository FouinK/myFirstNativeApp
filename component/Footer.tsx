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
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
  },
});
