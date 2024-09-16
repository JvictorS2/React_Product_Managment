import { Divider, FloatBtn, Grid, Heading, IconButton, Text } from "..";
import { useNavigate } from "react-router-dom";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import { deleteData } from "../../utils/dataBaseActions";
import { useContext } from "react";
import { authContext } from "../../context/authContext";
import { toast } from "react-toastify";

const DetailsProduct = ({ data, id }) => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);

  const deleteProduct = async () => {

    try {
      await deleteData(authStates.uid, "products", id);
      toast.success("Registro removido!", {
        position: "top-right",
      });
        navigate("/product");
    } catch (error) {
      console.log(error);
      toast.error("Falha ao remover registro!", {
        position: "top-right",
      });
    }
  };

  return (
    <Grid p={2} flex={1} borderRadius={2}>
      <Grid p={3} mb={1} bg="secondary.100">
        <Heading color="#fff" textAlign="center">
          Detalhes do produto
        </Heading>
      </Grid>
      <Grid mx={2}>
        <Grid>
          <Text>
            <Text bold>Nome:</Text> {data.name}
          </Text>
          <Divider my={1} />
        </Grid>
        <Grid>
          <Text>
            <Text bold>Categoria:</Text> {data.category}
          </Text>
          <Divider my={1} />
        </Grid>
        <Grid>
          <Text>
            <Text bold>Preço:</Text> R$ {data.price}
          </Text>
          <Divider my={1} />
        </Grid>
        <Grid>
          <Text>
            <Text bold>Peso:</Text> {data.weight} Kg
          </Text>
          <Divider my={1} />
        </Grid>
        <Grid>
          <Text>
            <Text bold>Fornecedor:</Text> {data.provider}
          </Text>
          <Divider my={1} />
        </Grid>

        <Grid>
          <Text>
            <Text bold>Quantidade em estoque:</Text> {data.stock}
          </Text>
          <Divider my={1} />
        </Grid>
        <Grid>
          <Text>
            <Text bold>Data de válidade:</Text> {data.validateDate}
          </Text>
          <Divider my={1} />
        </Grid>
        <Grid>
          <Text>
            <Text bold>Medidas:</Text> {data.dimensions.length} cm X{" "}
            {data.dimensions.height} cm X {data.dimensions.width} cm
          </Text>
          <Divider my={1} />
        </Grid>
      </Grid>

      <Grid
        position="absolute"
        flexDirection="row"
        gap={4}
        bottom={4}
        right={4}
      >
        <FloatBtn onPress={deleteProduct} bg={"tertiary.200"}>
          <IconButton
            icon={<DeleteRoundedIcon fontSize="large" />}
            color="#FEF7FF"
            pointerEvents="none"
          />
        </FloatBtn>
        <FloatBtn
          onPress={() => navigate(`/Product/Edit/${id}`)}
          bg={"tertiary.100"}
        >
          <IconButton
            icon={<ModeEditRoundedIcon fontSize="large" />}
            color="#FEF7FF"
            pointerEvents="none"
          />
        </FloatBtn>
      </Grid>
    </Grid>
  );
};

export default DetailsProduct;
