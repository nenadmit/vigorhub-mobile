import React from "react";
import { StyleSheet } from "react-native";
import { Input as UiInput, Button as UiButton } from "@ui-kitten/components";

const Primary = "primary";
const Secondary = "secondary";

function Input({ label, name, onChange, value }) {
  return (
    <UiInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(name, text)}
    ></UiInput>
  );
}

function Button({ type, onClick, children, style: customStyle }) {
  return (
    <UiButton  style={{ ...customStyle }} onPress={onClick}>
      {children}
    </UiButton>
  );
}

const styles = StyleSheet.create({
  primary: {
    backgroundColor: "#000",
    color: "#FFF",
  },
  secondary: {
    backgroundColor: "yellow",
    color: "#000",
  },
});

export { Input, Button };
