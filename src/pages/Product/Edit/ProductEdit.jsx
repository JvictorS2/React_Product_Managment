import {
  Grid,
  Heading,
  Button,
  Divider,
  IconButton,
  NavBar,
  LabelInput,
  SpinnerPage,
} from "../../../components/";

import {  useForm } from "react-hook-form";
import {  getData, updateData } from "../../../utils/dataBaseActions";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { verifyLogin } from "../../../utils/auth";

const ProductEdit = () => {
  const { handleSubmit, control, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { authStates } = useContext(authContext);
    const [isLoading, setIsLoading] = useState(true);


  const load = async () => {
    const response = await getData(authStates.uid, "products/", id);
    setDatas(response);
  };

  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API e seta em um estado  */
  useEffect(() => {
    load();
  }, []);

  /* Trazer dados registrados para editar */
  const setDatas = (data) => {
    setValue('name', data.name)
    setValue('category', data.category)
    setValue("price", data.price);
    setValue("weight", data.weight);
    setValue("stock", data.stock);
    setValue("provider", data.provider);
    setValue("validateDate", data.validateDate);
    setValue("isFavorite", data.isFavorite);
    setValue("dimensions.height", data.dimensions.height);
    setValue("dimensions.width", data.dimensions.width);
    setValue("dimensions.length", data.dimensions.length);
    setIsLoading(false);
  }

  /* Atualizar produto */
  const updateProduct = async (data) => {
    await updateData(authStates.uid, "products", id, data);
    navigate(`/Product/Details/${id}`);
  };

  return (
    <Grid h="100vh" bg="primary.100">
      <NavBar navigate={navigate}></NavBar>
      {isLoading ? (
        <SpinnerPage />
      ) : (
        <Grid px={8} py={4} bg="primary.100">
          <form>
            <Grid flex={1} gap={6}>
              <Grid gap={2}>
                <Heading textAlign="center">Editar produto</Heading>
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
                <Button onPress={handleSubmit(updateProduct)}>
                  Editar produto
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      )}
      <IconButton
        position="absolute"
        left={16}
        top={4}
        icon={<UndoRoundedIcon fontSize="large" />}
        onPress={() => navigate(`/product/Details/${id}`)}
        color="secondary.200"
      ></IconButton>
    </Grid>
  );
};

export default ProductEdit;
