import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useEffect } from "react";
import { verifyLogin } from "../../utils/auth";
import {
  Avatar,
  Button,
  Center,
  Grid,
  HStack,
  Input,
  Text,
  VStack,
} from "../../components";

const DashBoard = (props) => {
  const navigate = useNavigate();

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  return (
    <Grid width="100%" height="100vh" bg="primary.800">
      <Grid
        justifyContent="space-between"
        flexDirection="row"
        height="8vh"
        alignItems="center"
        bg="primary.900"
        px={6}
      >
        <Grid flexGrow={12}>
          <Text
            color="white"
            fontSize="lg"
            cursor="pointer"
            onPress={() => navigate("/")}
          >
            Home
          </Text>
        </Grid>
        <Grid flexGrow={1}>
          <Text
            textAlign="center"
            color="white"
            fontSize="lg"
            cursor="pointer"
            onPress={() => navigate("/product")}
          >
            Product
          </Text>
        </Grid>
        <Grid flexGrow={1}>
          <Text
            textAlign="center"
            color="white"
            fontSize="lg"
            cursor="pointer"
            onPress={() => navigate("/logout")}
          >
            Sair
          </Text>
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default DashBoard;
