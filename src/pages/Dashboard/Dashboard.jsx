import "./Dashboard.css";
/* hooks */
import { useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { Grid, Text, NavBar } from "../../components";


const DashBoard = (props) => {
  const navigate = useNavigate();


  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);


   useEffect(() => {
     const timeoutId = setTimeout(() => {
       // Ação que você quer realizar após 1 segundo
       console.log("useEffect acionado após 1 segundo");
     }, 3000); // 1000 milissegundos = 1 segundo

     // Limpa o timeout caso o componente seja desmontado antes de completar
     return () => clearTimeout(timeoutId);
   }, []); 

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate} auth={props.auth}></NavBar>
      <Grid>
        <Text>Conteúdo principal aqui</Text>
      </Grid>
      <div>

    </div>
    </Grid>
  );
};

export default DashBoard;
