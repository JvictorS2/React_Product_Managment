import "./Dashboard.css";
/* hooks */
import { useNavigate } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { Grid, Text, NavBar, Heading, IconButton } from "../../components";
import { authContext } from "../../context/authContext";
import StackedLineChartRoundedIcon from "@mui/icons-material/StackedLineChartRounded";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const DashBoard = () => {
  const navigate = useNavigate();
 const { authStates } = useContext(authContext);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);


  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate}></NavBar>
      <Grid p={12} gap={24} w="100vw" h="100%">
        <Heading textAlign="center">
          Bem vindo{" "}
          <Heading color="secondary.100">{authStates.displayName}</Heading>, O que
          vai querer fazer?
        </Heading>

        <Grid
          flexDirection="row"
          gap={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid flexDirection="column" alignItems="center">
            <IconButton
              icon={<StackedLineChartRoundedIcon fontSize="large" />}
              color="secondary.200"
              onPress={() => navigate("/product")}
            />
            <Text onPress={() => navigate("/product")} bold>
              Ver Estoque
            </Text>
          </Grid>
          <Grid flexDirection="column" alignItems="center">
            <IconButton
              icon={<AddToPhotosIcon fontSize="large" />}
              color="secondary.200"
              onPress={() => navigate("/product/new")}
            />
            <Text onPress={() => navigate("/product/new")} bold>
              Adicionar produto
            </Text>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashBoard;
