import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './component/Header';
import TopMenu, {MenuType} from './component/TopMenu';
import Ask from './component/ask/Ask.tsx';
import Answer from './component/answer/Answer.tsx';
import Footer from './component/Footer';

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(MenuType.Ask);

  let ContentComponent = selectedMenu === MenuType.Ask ? Ask : Answer;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.menuContainer}>
        <TopMenu selectedMenu={selectedMenu} onSelectMenu={setSelectedMenu} />
      </View>
      <View style={styles.bodyContainer}>
        <ContentComponent />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menuContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 9,
  },
  footerContainer: {
    flex: 1,
  },
});

export default App;
