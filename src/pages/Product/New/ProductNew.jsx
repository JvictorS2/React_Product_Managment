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
import { saveData } from "../../../utils/dataBaseActions";
import { useContext } from "react";
import { authContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";

const ProductNew = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { authStates } = useContext(authContext);
  const addProduct = (data) => {
    saveData(authStates.uid, "products");
    navigate('/product')
  };

  return (
    <Grid>
      <NavBar navigate={navigate}></NavBar>
      <Grid px={8} py={4} bg="primary.100">
        <form>
          <Grid flex={1} gap={6}>
            <Grid gap={2}>
              <Heading textAlign="center">Cadastar produto</Heading>
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
              <Button onPress={handleSubmit(addProduct)}>
                <Text>Adicoinar produto</Text>
              </Button>
            </Grid>
          </Grid>
        </form>
        <IconButton
          position="absolute"
          left={2}
          top={2}
          icon={<UndoRoundedIcon fontSize="large" />}
          onPress={() => navigate("/product")}
          color="secondary.200"
        ></IconButton>
      </Grid>
    </Grid>
  );
};

export default ProductNew;
