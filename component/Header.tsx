import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
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
  },
});

export default Header;
