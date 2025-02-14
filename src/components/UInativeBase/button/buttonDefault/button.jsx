import { Button } from "native-base";
import { Text } from "../../..";

const BtnGeneral = (props) => {
  return (
    <Button bg="secondary.100" borderRadius={8} w="100%" shadow={8} {...props}>
      <Text bold color="#fff">
        {props.children}
      </Text>
    </Button>
  );
};

export default BtnGeneral;
