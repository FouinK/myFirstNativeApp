import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

const TopMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('1');
  const handleSelectMenu = (menu: string) => {
    // 상태를 업데이트합니다.
    setSelectedMenu(menu);
  };

  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      {/* 각 메뉴 항목을 반복해서 렌더링합니다. */}
      <TouchableOpacity
        style={[styles.menuItem, selectedMenu === '1' && styles.selectedMenu]}
        onPress={() => handleSelectMenu('1')}>
        <Text>메뉴 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.menuItem, selectedMenu === '2' && styles.selectedMenu]}
        onPress={() => handleSelectMenu('2')}>
        <Text>메뉴 2</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TopMenu;

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
