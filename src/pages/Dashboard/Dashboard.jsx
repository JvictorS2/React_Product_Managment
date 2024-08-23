import "./Dashboard.css";
/* hooks */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { Grid, Text, NavBar } from "../../components";




const DashBoard = (props) => {
  const navigate = useNavigate();
  

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate} auth={props.auth}></NavBar>
      <Grid >
        <Text>Conteúdo principal aqui</Text>
      </Grid>
    </Grid>
  );
};

export default DashBoard;
