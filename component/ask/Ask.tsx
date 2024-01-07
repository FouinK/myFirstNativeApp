import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Button, StyleSheet, View} from 'react-native';
import AskModal from './AskModal.tsx';

// 질문 항목에 대한 타입을 정의합니다.
interface AskItem {
  text: string;
  answered: boolean;
}

const Ask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [askList, setAskList] = useState<AskItem[]>([]);

  useEffect(() => {
    const exampleData = [];
    for (let i = 0; i < 10; i++) {
      const answered = Math.random() > 0.5; // 임의로 답변 여부 결정
      exampleData.push({text: `Example Text ${i + 1}`, answered});
    }
    setAskList(exampleData);
  }, []);

  return (
    <View style={styles.content}>
      <Button title="질문하기" onPress={() => setModalVisible(true)} />
      <AskModal visible={modalVisible} setVisible={setModalVisible} />
      <ScrollView>
        {askList.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.text}</Text>
            <Text
              style={[
                styles.badge,
                item.answered ? styles.answered : styles.notAnswered,
              ]}>
              {item.answered ? '답변함' : '답변안함'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    textAlign: 'left',
    fontSize: 18,
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  answered: {
    backgroundColor: 'green',
    color: 'white',
  },
  notAnswered: {
    backgroundColor: 'red',
    color: 'white',
  },
});

export default Ask;
