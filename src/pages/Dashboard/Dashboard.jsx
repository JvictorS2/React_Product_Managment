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
  NavBar,
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
    <Grid width="100%" height="100vh" bg="primary.100">
      <NavBar></NavBar>
      <Grid></Grid>
    </Grid>
  );
};

export default DashBoard;
