import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const openSettings = () => {
    console.log('설정 화면으로 이동');
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>어플 이름</Text>
      <TouchableOpacity onPress={openSettings} style={styles.settingsButton}>
        <Icon name="delete" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1, // 구분선의 두께
    borderBottomColor: '#dedede', // 구분선의 색상
    flexDirection: 'row',
    padding: 1,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsButton: {
    // 설정 버튼에 대한 스타일
  },
});
