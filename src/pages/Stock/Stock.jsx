/* hook */
import { useContext, useEffect, useState } from "react";

/* my */
import { verifyLogin } from "../../utils/auth";
import { Button, DataTable, Grid, NavBar } from "../../components";
/* Externo */
import { authContext } from "../../context/authContext";
import {
  readUserData,
  removeUserData,
  writeUserData,
} from "../../utils/dataBaseActions";
import { useNavigate } from "react-router-dom";

const Stock = () => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API e seta em um estado */
  useEffect(() => {
    setIsLoading(true);
    readUserData(authStates.dbFirebase, authStates.uid, setData);
  }, []);

  /* Monitora o Loading */
  useEffect(() => {
    if (data !== null)
      setIsLoading(false);
  }, [data]);

  const HeadTable = [
    { name: "ID", size: 4 },
    { name: "email", size: 20 },
    { name: "Detalhe", size: 6 },
  ];

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate}></NavBar>
      {isLoading ? (
        ""
      ) : (
        <>
          <DataTable HeadTable={HeadTable} data={data}></DataTable>
        </>
      )}
    </Grid>
  );
};

export default Stock;
