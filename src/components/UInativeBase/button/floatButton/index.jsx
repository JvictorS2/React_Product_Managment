import { Button } from "native-base";

const FloatButton = (props) => {
  return (
    <Button
      width="64px"
      height="64px"
      borderRadius="50%"
      p={4}
      fontSize="2xl"
      shadow={4}
      {...props}
    >
      
    </Button>
  );
};

export default FloatButton;
