import React from "react";
import { Modal as UiModal, Card, Button, Text } from "@ui-kitten/components";
import { Dimensions, StyleSheet, View } from "react-native";

function Modal({ isVisible, onClose, children }) {
  const width = Dimensions.get("window").width;

  return (
    <UiModal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onClose}
    >
      <View
        style={{
          backgroundColor: "#fff",
          height: 500,
          width: width - 50,
          alignSelf: "flex-end",
          borderRadius: 15,
        }}
      >
        {children}
      </View>
    </UiModal>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 500,
    width: "100%",
    backgroundColor: "red",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
});
export default Modal;
