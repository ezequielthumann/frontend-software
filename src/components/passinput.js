import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { primaryColor } from "../config/colors";

const PasswordInput = (props) => {
  const { label, value, onChange } = props;
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      mode="outlined"
      secureTextEntry={!isPasswordVisible}
      activeOutlineColor={primaryColor}
      right={
        <TextInput.Icon
          icon={isPasswordVisible ? "eye-off" : "eye"}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        />
      }
    />
  );
};

export default PasswordInput;
