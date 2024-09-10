import { Controller } from "react-hook-form";
import { Grid, Heading, Input, Text } from "..";

const LabelInput = ({
  control,
  name,
  placeholder,
  title,
  InputLeftElement,
  InputRightElement,
  type,
  errorMessage,
  width
}) => {
  return (
    <Grid w={width} gap={3}>
      <Text> {title} </Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
            InputLeftElement={InputLeftElement}
            InputRightElement={InputRightElement}
            type={type}
           
          />
        )}
      />
      <Text fontSize="12px" color="tertiary.200">
        {errorMessage}
      </Text>
    </Grid>
  );
};

export default LabelInput;
