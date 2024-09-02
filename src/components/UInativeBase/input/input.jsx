import { Input } from "native-base";


const InputNativeBase = (props,{register}) => {
    return (
      <Input
  
        {...props}
        size="xl"
        borderRadius="lg"
        variant="filled"
            bg="#fff"
            shadow={8}
      />

    );
}

export default InputNativeBase;