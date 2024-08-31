import "./Dashboard.css";
/* hooks */
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { Grid, Text, NavBar, Button } from "../../components";
import { writeUserData } from "../../utils/dataBaseActions";
import { MyContext } from "../../context/statesGlobal";

const DashBoard = (props) => {
  const navigate = useNavigate();
  const { dataGlobal } = useContext(MyContext);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate} auth={props.auth}></NavBar>
      <Grid>
        <Text>Conteúdo principal aqui</Text>
      </Grid>
    </Grid>
  );
};

export default DashBoard;
