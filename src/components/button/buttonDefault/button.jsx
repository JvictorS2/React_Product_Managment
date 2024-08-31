import { Button } from "native-base";

const BtnGeneral = (props) => {
  return (
    <Button
      bg="secondary.100"
      borderRadius="full"
      shadow={8}
      {...props}
    >

    </Button>
  );
};

export default BtnGeneral;
