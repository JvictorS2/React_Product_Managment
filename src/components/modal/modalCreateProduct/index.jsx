import { useContext } from "react";
import { Grid, Heading, Input, Button, Text, Divider } from "../..";
import { writeUserData } from "../../../utils/dataBaseActions";
import { authContext } from "../../../context/authContext";
import { useForm } from "react-hook-form";

const ModalCreateProduct = () => {
  const { authStates } = useContext(authContext);
  const {
    register,
    handleSubmit,
  } = useForm();

  const addProduct = () => {
    
  }

  return (
    <Grid
      color="#fff"
      position="absolute"
      top="50%"
      left="50%"
      w="90vw"
      p={4}
      bg="primary.100"
      borderRadius={4}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <form onSubmit={handleSubmit(addProduct)}>
        <Grid gap={6}>
          <Grid gap={2}>
            <Heading textAlign="center">Cadastar produto</Heading>
            <Divider />
          </Grid>
          <Input placeholder="Nome" />
          <Input placeholder="Categoria " />
          <Input placeholder="Preço(R$)" />
          <Input placeholder="Peso(Kg)" />
          <Input placeholder="Quantidade em estoque" />
          <Input placeholder="Fornecedor" />
          <Input placeholder="Altura(cm)" />
          <Input placeholder="Comprimento(cm)" />
          <Input placeholder="Largura(cm)" />
          <Grid gap={2}>
            <Divider />
            <Button
              onPress={() =>
                writeUserData(
                  authStates.uid,
                  "vssimoesdunck@gmail.com",
                  authStates.dbFirebase
                )
              }
            >
              <Text>Adicoinar produto</Text>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default ModalCreateProduct;
