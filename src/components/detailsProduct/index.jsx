import { Divider, FloatBtn, Grid, Heading, IconButton, NavBar, Text } from "..";
import { useNavigate } from "react-router-dom";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import { deleteData } from "../../utils/dataBaseActions";
import { useContext } from "react";
import { authContext } from "../../context/authContext";

const DetailsProduct = ({ data,id }) => {
    const navigate = useNavigate();
    const { authStates } = useContext(authContext);
 
    const deleteProduct = async () => {
        await deleteData(authStates.uid,'products',id);
        navigate('/product')
    }
  return (
    <Grid p={2} flex={1}>
      <Grid>
        <Heading textAlign="center">Detalhes do produto</Heading>
        <Divider my={2} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Nome:</Text> Suco de Uva
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Categoria:</Text> Suco
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Preço:</Text> 5,89 R$
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Peso:</Text> 0.2 Kg
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Fornecedor:</Text> Marata
        </Text>
        <Divider my={1} />
      </Grid>

      <Grid>
        <Text>
          <Text bold>Quantidade em estoque:</Text> 2
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Data de válidade:</Text> 18/07/2025
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid>
        <Text>
          <Text bold>Medidas:</Text> 2.2 cm X 4.6 cm X 2.5 cm
        </Text>
        <Divider my={1} />
      </Grid>
      <Grid
        position="absolute"
        flexDirection="row"
        gap={4}
        bottom={4}
        right={4}
      >
        <FloatBtn onPress={deleteProduct} bg={"tertiary.50"}>
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
