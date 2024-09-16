import { Heading } from "native-base";

const HeadingNativeBase = (props) => {
  return (
    <Heading
      fontSize={{
        base: "4xl", // Padrão para todos os tamanhos
        lg: "4xl", // Para telas grandes
        xl: "5xl", // Para telas extra grandes
      }}
      color="text.100"
      {...props}
    ></Heading>
  );
};

export default HeadingNativeBase;
