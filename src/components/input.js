import { TextInput } from "react-native-paper";
import { primaryColor } from "../config/colors";

const Input = (props) => {
  const { label, value, onChange, type, icon } = props;
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      mode="outlined"
      activeOutlineColor={primaryColor}
      keyboardType={type || "default"}
      right={<TextInput.Icon icon={icon} />}
    />
  );
};

export default Input;
