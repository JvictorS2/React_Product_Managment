import {
  Grid,
  Heading,
  Input,
  Button,
  Text,
  Divider,
  IconButton,
  NavBar,
} from "../../../components/";

import { Controller, useForm } from "react-hook-form";
import {  getData, updateData } from "../../../utils/dataBaseActions";
import { useContext, useEffect } from "react";
import { authContext } from "../../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { verifyLogin } from "../../../utils/auth";

const ProductEdit = () => {
  const { handleSubmit, control, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { authStates } = useContext(authContext);


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
  }

  /* Atualizar produto */
  const updateProduct = async (data) => {
    await updateData(authStates.uid, "products", id, data);
    navigate(`/Product/Details/${id}`);
  };

  return (
    <Grid h="100vh" bg="primary.100">
      <NavBar navigate={navigate}></NavBar>
      <Grid px={8} py={4} bg="primary.100">
        <form>
          <Grid flex={1} gap={6}>
            <Grid gap={2}>
              <Heading textAlign="center">Editar produto</Heading>
              <Divider />
            </Grid>

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Categoria"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="price"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Preço(R$)"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="weight"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Peso(Kg)"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="stock"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Quantidade em estoque"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="validateDate"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Data de válidade(dd/mm/aaaa)"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="provider"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Fornecedor"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="dimensions.height"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Altura(cm)"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="dimensions.length"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Comprimento(cm)"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="dimensions.width"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Largura(cm)"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Grid gap={2}>
              <Divider />
              <Button onPress={handleSubmit(updateProduct)}>
                <Text>Editar produto</Text>
              </Button>
            </Grid>
          </Grid>
        </form>
        <IconButton
          position="absolute"
          left={2}
          top={2}
          icon={<UndoRoundedIcon fontSize="large" />}
          onPress={() => navigate(`/product/Details/${id}`)}
          color="secondary.200"
        ></IconButton>
      </Grid>
    </Grid>
  );
};

export default ProductEdit;
