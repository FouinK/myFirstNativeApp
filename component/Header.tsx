import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const openSettings = () => {
    console.log('설정 화면으로 이동');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>어플 이름</Text>
        <TouchableOpacity onPress={openSettings} style={styles.settingsButton}>
          <Icon name="delete" size={25} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {},
  settingsButton: {},
});

export default Header;
