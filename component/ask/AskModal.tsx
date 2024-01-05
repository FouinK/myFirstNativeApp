import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface AskModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AskModal: React.FC<AskModalProps> = ({visible, setVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableOpacity
        style={styles.centeredView}
        activeOpacity={1}
        onPressOut={() => setVisible(false)} // 모달 바깥 영역 터치 시 닫힘
      >
        <View style={styles.modalView} onStartShouldSetResponder={() => true}>
          <Text>질문 작성하기</Text>
          <TextInput
            style={styles.textInput}
            placeholder="여기에 질문을 작성하세요"
          />
          <View style={styles.buttonContainer}>
            <Button title="제출하기" onPress={() => setVisible(false)} />
            <Button
              title="취소"
              color="red"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 모달의 바깥 영역에 투명한 검은색 배경 추가
  },
  modalView: {
    width: '80%', // 화면 너비의 80%
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center', // 내부 요소를 가로 방향으로 중앙 정렬
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row-reverse', // 요소들을 역순으로 배치하여 '취소' 버튼이 오른쪽 끝에 위치하도록 함
    justifyContent: 'flex-start', // 요소들이 컨테이너의 시작 부분(여기서는 오른쪽 끝)에 위치하도록 함
    width: '100%', // 버튼 컨테이너의 너비를 modalView의 너비와 동일하게 설정
    marginTop: 20,
  },
  textInput: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%', // 텍스트 입력 필드의 너비를 modalView의 너비와 동일하게 설정
  },
});

export default AskModal;
