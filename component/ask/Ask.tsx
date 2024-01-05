import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import QuestionModal from './AskModal.tsx'; // 모달 컴포넌트 임포트

const Ask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [askList, setAskList] = useState([]);

  useEffect(() => {
    // TODO: API 호출하여 질문 목록 가져오기
  }, []);

  return (
    <ScrollView style={styles.content}>
      <Button title="질문지 생성하기" onPress={() => setModalVisible(true)} />
      <QuestionModal visible={modalVisible} setVisible={setModalVisible} />
      {askList.map((question, index) => (
        <Text key={index}>{question}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default Ask;
