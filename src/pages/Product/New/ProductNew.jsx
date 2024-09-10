import {
  Grid,
  Heading,
  Input,
  Button,
  Text,
  Divider,
  IconButton,
  NavBar,
  LabelInput,
} from "../../../components/";

import { useForm } from "react-hook-form";
import { saveData } from "../../../utils/dataBaseActions";
import { useContext } from "react";
import { authContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";

const ProductNew = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, setValue } = useForm();
  const { authStates } = useContext(authContext);

  setValue("isFavorite", false);

  const addProduct = (data) => {
    console.log(data);
    saveData(authStates.uid, "products", data);
    navigate("/product");
  };

  return (
    <Grid h="100vh" bg="primary.100">
      <NavBar navigate={navigate}></NavBar>
      <Grid px={12} py={8} bg="primary.100">
        <form>
          <Grid gap={2}>
            <Grid gap={2}>
              <Heading textAlign="center">Cadastrar produto</Heading>
              <Divider />
            </Grid>
            <Grid
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={{ md: "space-between" }}
              flexWrap={{ md: "wrap" }}
            >
              <LabelInput
                control={control}
                name="name"
                placeholder="Nome"
                title="Nome"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="category"
                placeholder="Categoria"
                title="Categoria"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="price"
                placeholder="Preço(R$)"
                title="Preço"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="weight"
                placeholder="Peso(Kg)"
                title="Peso"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="stock"
                placeholder="Quantidade em estoque"
                title="Quantidade em estoque"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="validateDate"
                placeholder="Data de válidade(dd/mm/aaaa)"
                title="Data de validade"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="provider"
                placeholder="Fornecedor"
                title="Fornecedor"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="dimensions.height"
                placeholder="Altura(cm)"
                title="Altura"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="dimensions.length"
                placeholder="Comprimento(cm)"
                title="Comprimento"
                width={{ md: "45%" }}
              ></LabelInput>
              <LabelInput
                control={control}
                name="dimensions.width"
                placeholder="Largura(cm)"
                title="Largura"
                width={{ md: "45%" }}
              ></LabelInput>
            </Grid>

            <Grid gap={2}>
              <Divider />
              <Button onPress={handleSubmit(addProduct)}>
                Adicoinar produto
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <IconButton
        position="absolute"
        left={16}
        top={4}
        icon={<UndoRoundedIcon fontSize="large" />}
        onPress={() => navigate("/product")}
        color="secondary.200"
      ></IconButton>
    </Grid>
  );
};

export default ProductNew;
