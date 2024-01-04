import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

type HeaderProps = {
  style?: ViewStyle;
};

const Header: React.FC<HeaderProps> = ({style}) => {
  const openSettings = () => {
    console.log('설정 화면으로 이동');
  };

  return (
    <View style={[styles.header, style]}>
      <Text>궁그미</Text>
      <TouchableOpacity onPress={openSettings}>
        <Icon name="delete" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
          ? StatusBar.currentHeight + 10
          : 10
        : 0, // 안드로이드 경우 marginTop 값을 조정
    paddingTop: Platform.OS === 'ios' ? 30 : 0, // iOS의 경우 상단바와의 간격 조정
  },
});

export default Header;
