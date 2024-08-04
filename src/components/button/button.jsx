import { Button } from "native-base";

const BtnGeneral = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default BtnGeneral;
