import React from "react";
import { Modal as UiModal, Icon } from "@ui-kitten/components";
import { Dimensions, StyleSheet, View } from "react-native";

function Modal({ isVisible, onClose, children }) {
  const width = Dimensions.get("window").width;
  return (
    <UiModal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onClose}
    >
      <View style={{...styles.container,width: width - 50}}>
        <Icon
          onPress={onClose}
          name="close-outline"
          fill="#000"
          width={20}
          height={20}
          style={styles.closeIcon}
        ></Icon>
        {children}
      </View>
    </UiModal>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  closeIcon: {
    margin:10,
    alignSelf:'flex-end'
  },
});
export default Modal;
