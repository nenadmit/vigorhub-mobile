import React from "react";
import {Modal as UiModal, Card,Button,Text} from '@ui-kitten/components'
import { Dimensions, StyleSheet, View } from 'react-native';
function Modal(props) {

    const [visible,setVisible] = React.useState(true)

    const width = Dimensions.get('window').width
  return (
    <UiModal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}
    >
      <View style={{backgroundColor:'#fff',height:500,width:width,alignSelf:'flex-end',borderRadius:15}}>
        <Text>Welcome to UI Kitten 😻</Text>
        <Button onPress={() => setVisible(false)}>DISMISS</Button>
      </View>
    </UiModal>
  );
}
const styles = StyleSheet.create({
    container: {
      height: 500,
      width:'100%',
      backgroundColor:'red'
    },
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent:'flex-end'
    },
  });
export default Modal;
