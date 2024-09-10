import { Text } from "native-base";

const TextNativeBase = (props) => {
  return (
    <Text
      fontSize={{
        base: "xl", // Padrão para todos os tamanhos
        lg: "md", // Para telas grandes
      }}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      color={"text.100"}
      
      {...props}
  
    ></Text>
  );
};

export default TextNativeBase;
