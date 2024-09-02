/* hook */
import { useContext, useEffect, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { Button, DataTable, Grid, NavBar } from "../../components";
/* Externo */
import { authContext } from "../../context/authContext";
import { deleteData, getAllData, updateData } from "../../utils/dataBaseActions";
import { useNavigate } from "react-router-dom";
import { update } from "firebase/database";

const Stock = () => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const Load = async () => {
    const response = await getAllData(authStates.uid, "products");
    setData(response);
  };

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API e seta em um estado */
  useEffect(() => {
    setIsLoading(true);
    Load()
    
  }, []);

  /* Monitora o Loading */
  useEffect(() => {
    if (data !== null || data === 0) setIsLoading(false);
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
