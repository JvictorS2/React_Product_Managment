import { Text } from "native-base";

const TextNativeBase = (props) => {
  return (
    <Text
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }}
      fontSize="md"
      color={"text.100"}
      {...props}
    ></Text>
  );
};

export default TextNativeBase;
