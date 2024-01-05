import React from 'react';
import {Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export enum MenuType {
  Ask = 'ask',
  Answer = 'answer',
}
interface TopMenuProps {
  selectedMenu: string;
  onSelectMenu: (menu: string) => void;
}

const TopMenu: React.FC<TopMenuProps> = ({selectedMenu, onSelectMenu}) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={[
          styles.menuItem,
          selectedMenu === MenuType.Ask && styles.selectedMenu,
        ]}
        onPress={() => onSelectMenu('ask')}>
        <Text>질문하기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.menuItem,
          selectedMenu === MenuType.Answer && styles.selectedMenu,
        ]}
        onPress={() => onSelectMenu('answer')}>
        <Text>답변하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  selectedMenu: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
  },
});

export default TopMenu;
