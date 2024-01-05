import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Button, StyleSheet, View} from 'react-native';
import AskModal from './AskModal.tsx'; // 모달 컴포넌트 임포트

const Ask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [askList, setAskList] = useState([]);

  useEffect(() => {
    // TODO: API 호출하여 질문 목록 가져오기
  }, []);

  return (
    <View style={styles.content}>
      <Button title="질문하기" onPress={() => setModalVisible(true)} />
      <AskModal visible={modalVisible} setVisible={setModalVisible} />
      <ScrollView>
        <Text>{'일단 테스트로 텍스트 잘 나오는지'}</Text>
        {askList.map((question, index) => (
          <Text key={index}>{question}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default Ask;
