import React from 'react';
import {Modal, View, Text, TextInput, Button, StyleSheet} from 'react-native';

interface AskModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AskModal: React.FC<AskModalProps> = ({visible, setVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true} // 투명 배경 설정
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>질문 작성하기</Text>
          <TextInput
            style={styles.textInput}
            placeholder="여기에 질문을 작성하세요"
          />
          <Button title="제출하기" onPress={() => setVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});

export default AskModal;
