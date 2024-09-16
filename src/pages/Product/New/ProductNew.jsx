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

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { saveData } from "../../../utils/dataBaseActions";
import { useContext } from "react";
import { authContext } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { toast } from "react-toastify";

const ProductNew = () => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);

  const schema = yup
    .object({
      name: yup.string("Valor inválido").required("Campo obrigatório"),
      category: yup.string("Valor inválido").required("Campo obrigatório"),
      price: yup
        .number()
        .typeError("O valor deve ser um número")
        .required("Campo obrigatório")
        .integer()
        .positive("O valor não pode ser menor que 0"),
      weight: yup
        .number()
        .typeError("O valor deve ser um número")
        .required("Campo obrigatório")
        .integer()
        .positive("O valor não pode ser menor que 0"),
      stock: yup
        .number()
        .typeError("O valor deve ser um número")
        .required("Campo obrigatório")
        .integer()
        .positive("O valor não pode ser menor que 0"),
      validateDate: yup.string("Valor inválido").required("Campo obrigatório"),
      provider: yup.string("Valor inválido").required("Campo obrigatório"),
      dimensions: yup.object().shape({
        height: yup
          .number()
          .typeError("O valor deve ser um número")
          .required("Campo obrigatório")
          .integer()
          .positive("O valor não pode ser menor que 0"),
        length: yup
          .number()
          .typeError("O valor deve ser um número")
          .required("Campo obrigatório")
          .integer()
          .positive("O valor não pode ser menor que 0"),
        width: yup
          .number()
          .typeError("O valor deve ser um número")
          .required("Campo obrigatório")
          .integer()
          .positive("O valor não pode ser menor que 0"),
      }),
    })
    .required();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  setValue("isFavorite", false);

  const addProduct = (data) => {
    try {
      saveData(authStates.uid, "products", data);
      toast.success("Registro criado com sucesso", {
        position: "top-right",
      });
      navigate("/product");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao criar registro!", {
        position: "top-right",
      });
    }
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
                errorMessage={errors.name?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="category"
                placeholder="Categoria"
                title="Categoria"
                width={{ md: "45%" }}
                errorMessage={errors.category?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="price"
                placeholder="Preço(R$)"
                title="Preço"
                width={{ md: "45%" }}
                errorMessage={errors.price?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="weight"
                placeholder="Peso(Kg)"
                title="Peso"
                width={{ md: "45%" }}
                errorMessage={errors.weight?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="stock"
                placeholder="Quantidade em estoque"
                title="Quantidade em estoque"
                width={{ md: "45%" }}
                errorMessage={errors.stock?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="validateDate"
                placeholder="Data de válidade(dd/mm/aaaa)"
                title="Data de validade"
                width={{ md: "45%" }}
                errorMessage={errors.validateDate?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="provider"
                placeholder="Fornecedor"
                title="Fornecedor"
                width={{ md: "45%" }}
                errorMessage={errors.provider?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="dimensions.height"
                placeholder="Altura(cm)"
                title="Altura"
                width={{ md: "45%" }}
                errorMessage={errors.dimensions?.height?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="dimensions.length"
                placeholder="Comprimento(cm)"
                title="Comprimento"
                width={{ md: "45%" }}
                errorMessage={errors.dimensions?.length?.message}
              ></LabelInput>
              <LabelInput
                control={control}
                name="dimensions.width"
                placeholder="Largura(cm)"
                title="Largura"
                width={{ md: "45%" }}
                errorMessage={errors.dimensions?.width?.message}
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
