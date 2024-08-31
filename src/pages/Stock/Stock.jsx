/* hook */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
/* my */
import { verifyLogin } from "../../utils/auth";
import { DataTable, Grid, NavBar } from "../../components";
/* Externo */
import axios from "axios";

const Stock = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // bloqueia o acesso a rotas não permitidas com base se o usuário está logado ou não
  useEffect(() => {
    verifyLogin(navigate);
    GetDataByUrl();
  }, []);

  /* Acessa os dados de uma API externa */
  const GetDataByUrl = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setData(FilterData(data));
    } catch (error) {
      throw error;
    }
  };

  /* Filtrar os dados, deveolver apenas os dados com as keys no array */
  const FilterData = async (data) => {
    const keysToKeep = ["id", "title"];

    const filteredObject = await data.map((item, index) =>
      Object.fromEntries(
        Object.entries(item).filter(([key]) => keysToKeep.includes(key))
      )
    );

    setData(filteredObject);
  };

  /* Objeto usado no componente DataTable o nome se refere a coluna e
   size ao tamanho propocional que a coluna ocupa na tela */
  
  {
    /* <Button
          onPress={() =>
            writeUserData(
              dataGlobal.authFirebase.currentUser.uid,
              "JVictor2",
              dataGlobal.authFirebase.currentUser.email,
              "https://avatars.githubusercontent.com/u/106039120?s=400&u=733cda27eede61bc38d61fc23a765bdd198c3d7e&v=4",
              dataGlobal.dbFirebase,
              2
            )
          }
        >
          Adicionar dados
        </Button>
        <Button></Button> */
  }

  const HeadTable = [
    { name: "ID", size: 4 },
    { name: "Nome", size: 20 },
    { name: "Detalhe", size: 6 },
  ];

  return (
    <Grid bg="primary.100" h="100vh">
      <NavBar navigate={navigate}></NavBar>
      <DataTable HeadTable={HeadTable} data={data}></DataTable>
    </Grid>
  );
};

export default Stock;
