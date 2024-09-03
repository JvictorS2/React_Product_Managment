/* hook */
import { useContext, useEffect, useState } from "react";
/* my */
import { verifyLogin } from "../../utils/auth";
import { DataTable, Grid, NavBar } from "../../components";
/* Externo */
import { authContext } from "../../context/authContext";
import { getAllData } from "../../utils/dataBaseActions";
import { useNavigate } from "react-router-dom";

const Stock = () => {
  const navigate = useNavigate();
  const { authStates } = useContext(authContext);
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const Load = async () => {
    try {
      const response = await getAllData(authStates.uid, "products");
      FilterData(response);
    } catch (error) {
      console.log(error);
    }
  };

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
  }, []);

  /* Receber os dados da API e seta em um estado */
  useEffect(() => {
    setIsLoading(true);
    Load();
  }, []);

  /* Monitora o Loading */
  useEffect(() => {
    if (data !== null || data === 0) setIsLoading(false);
  }, [data]);

  const HeadTable = [
    {name: 'id'},
    { name: "name", size: 20 },
    { name: "price", size: 6 },
    { name: "Detalhe", size: 6 },
  ];

  const FilterData = async (data) => {
    const keysToKeep = [];

    HeadTable.forEach((item) => keysToKeep.push(item.name));

    const filteredObject = await data.map((item, index) =>
      Object.fromEntries(
        Object.entries(item).filter(([key]) => keysToKeep.includes(key))
      )
    );
    setData(filteredObject);
  };

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
