import { Button } from "native-base";

const BtnGeneral = (props) => {
  return (
    <Button
      bg="secondary.100"
      borderRadius="full"
      shadow={2}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default BtnGeneral;
