import { Input } from "native-base";

const InputNativeBase = (props) => {
  return (
    <Input
      {...props}
      size="2xl"
      borderRadius={6}
      variant="filled"
      bg="#fff"
      shadow={8}
      color="#A29E99"
    />
  );
};

export default InputNativeBase;
